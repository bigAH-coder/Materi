import {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { ReactElement, ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';
import { DeckCtx } from './DeckContext';
import Annotator, { type Stroke } from './Annotator';
import {
  IconSidebar,
  IconGrid,
  IconLeft,
  IconRight,
  IconPencil,
  IconExpand,
  IconShrink,
  IconPresent,
  IconClose,
} from './icons';

/* ── The paged presentation engine + Slidev-style chrome (dock + rail)
   Enhanced with:
   - Dark/Light mode toggle
   - Progress bar at the bottom
   - Print / Export PDF support
   - Academic UI header bar (UISI logo & metadata)
   - Resilient speaker notes discovery
────────────────────────────────────────────────────────────────────────── */

const fmt = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

function Thumb({ children }: { children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [d, setD] = useState({ vw: 1280, vh: 720, scale: 0.15 });

  useLayoutEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () =>
      setD({
        vw: window.innerWidth,
        vh: window.innerHeight,
        scale: el.clientWidth / window.innerWidth,
      });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      className="noir-thumb-frame"
      ref={frameRef}
      style={{ aspectRatio: `${d.vw} / ${d.vh}` }}
    >
      <DeckCtx.Provider value={{ clicks: 9999, isStatic: true }}>
        <div
          className="noir-thumb-scale"
          style={{ width: d.vw, height: d.vh, transform: `scale(${d.scale})` }}
        >
          {children}
        </div>
      </DeckCtx.Provider>
    </div>
  );
}

export default function Deck({ children }: { children: ReactNode }) {
  const slides = useMemo(
    () => Children.toArray(children) as ReactElement[],
    [children]
  );
  const total = slides.length;
  const isPresenter = useMemo(
    () => new URLSearchParams(window.location.search).has('presenter'),
    []
  );

  const [slide, setSlide] = useState(() => {
    const h = parseInt(window.location.hash.slice(1), 10);
    return h >= 1 && h <= total ? h - 1 : 0;
  });
  const [clicks, setClicks] = useState(0);
  const [curMax, setCurMax] = useState(0);
  const [railOpen, setRailOpen] = useState(false);
  const [gridOpen, setGridOpen] = useState(false);
  const [drawing, setDrawing] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [fs, setFs] = useState(false);
  const [uiHidden, setUiHidden] = useState(false);
  const [nearDock, setNearDock] = useState(false);
  const [cursorIdle, setCursorIdle] = useState(false);

  // Dark/Light theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('deck:theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // default to academic dark mode
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('deck:theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  const [noteOverrides, setNoteOverrides] = useState<Record<number, string>>(
    () => {
      try {
        return JSON.parse(localStorage.getItem('deck:notes') || '{}');
      } catch {
        return {};
      }
    }
  );

  const maxMap = useRef<Record<number, number>>({});
  const annStore = useRef<Record<number, Stroke[]>>({});
  const slideRef = useRef(slide);
  slideRef.current = slide;

  const registerMax = useCallback((at: number) => {
    const m = maxMap.current;
    m[slideRef.current] = Math.max(m[slideRef.current] || 0, at);
    setCurMax((c) => Math.max(c, at));
  }, []);

  const go = useCallback(
    (i: number) => {
      const n = Math.max(0, Math.min(total - 1, i));
      setSlide(n);
      setClicks(0);
      setCurMax(maxMap.current[n] || 0);
    },
    [total]
  );

  const next = useCallback(() => {
    if (clicks < curMax) {
      setClicks(clicks + 1);
      return;
    }
    if (slide < total - 1) {
      const n = slide + 1;
      setSlide(n);
      setClicks(0);
      setCurMax(maxMap.current[n] || 0);
    }
  }, [clicks, curMax, slide, total]);

  const prev = useCallback(() => {
    if (clicks > 0) {
      setClicks(clicks - 1);
      return;
    }
    if (slide > 0) {
      const n = slide - 1;
      const m = maxMap.current[n] || 0;
      setSlide(n);
      setClicks(m);
      setCurMax(m);
    }
  }, [clicks, slide]);

  const toggleFs = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  }, []);

  const toggleRail = useCallback(() => {
    setRailOpen((v) => !v);
    setGridOpen(false);
  }, []);

  const toggleGrid = useCallback(() => {
    setGridOpen((v) => !v);
    setRailOpen(false);
  }, []);

  const setNote = useCallback((text: string) => {
    setNoteOverrides((prev) => {
      const nextO = { ...prev, [slideRef.current]: text };
      try {
        localStorage.setItem('deck:notes', JSON.stringify(nextO));
      } catch {
        /* ignore */
      }
      return nextO;
    });
  }, []);

  const openPresenter = useCallback(() => {
    if (isPresenter) return;
    const url = window.location.pathname + '?presenter=1' + window.location.hash;
    window.open(url, 'deck-presenter');
  }, [isPresenter]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === 'TEXTAREA' ||
          t.tagName === 'INPUT' ||
          t.isContentEditable)
      )
        return;
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prev();
          break;
        case 'Home':
          e.preventDefault();
          go(0);
          break;
        case 'End':
          e.preventDefault();
          go(total - 1);
          break;
        case 's':
        case 'S':
          toggleRail();
          break;
        case 'g':
        case 'G':
          toggleGrid();
          break;
        case 'f':
        case 'F':
          toggleFs();
          break;
        case 'a':
        case 'A':
          setDrawing((v) => !v);
          break;
        case 'p':
        case 'P':
          openPresenter();
          break;
        case 'h':
        case 'H':
          setUiHidden((v) => !v);
          break;
        case 'Escape':
          setRailOpen(false);
          setGridOpen(false);
          setDrawing(false);
          setUiHidden(false);
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, go, total, toggleRail, toggleGrid, toggleFs, openPresenter]);

  // URL hash sync
  useEffect(() => {
    const want = String(slide + 1);
    if (window.location.hash.slice(1) !== want)
      history.replaceState(null, '', '#' + want);
  }, [slide]);

  useEffect(() => {
    const onHash = () => {
      const h = parseInt(window.location.hash.slice(1), 10);
      if (h >= 1 && h <= total && h - 1 !== slide) go(h - 1);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [slide, total, go]);

  // Cross-tab sync via BroadcastChannel
  const chan = useRef<BroadcastChannel | null>(null);
  const applyingRemote = useRef(false);
  useEffect(() => {
    const c = new BroadcastChannel('deck-sync');
    chan.current = c;
    c.onmessage = (e) => {
      if (e.data?.type === 'state') {
        applyingRemote.current = true;
        setSlide(e.data.slide);
        setClicks(e.data.clicks);
      }
    };
    return () => c.close();
  }, []);

  useEffect(() => {
    if (applyingRemote.current) {
      applyingRemote.current = false;
      return;
    }
    chan.current?.postMessage({ type: 'state', slide, clicks });
  }, [slide, clicks]);

  // Fullscreen & timer
  useEffect(() => {
    const h = () => setFs(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', h);
    return () => document.removeEventListener('fullscreenchange', h);
  }, []);

  useEffect(() => {
    if (!isPresenter) return;
    setElapsed(0);
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, [isPresenter]);

  useEffect(() => {
    let t = 0;
    const onMove = (e: MouseEvent) => {
      setCursorIdle(false);
      setNearDock(e.clientY > window.innerHeight - 150);
      clearTimeout(t);
      t = window.setTimeout(() => setCursorIdle(true), 2600);
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      clearTimeout(t);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  const liveCtx = useMemo(
    () => ({ clicks, isStatic: false, registerMax }),
    [clicks, registerMax]
  );
  const hasPrev = slide > 0 || clicks > 0;
  const hasNext = slide < total - 1 || clicks < curMax;

  // Retrieve speaker notes from props or component static property
  const currentSlideElement = slides[slide];
  const slideProps = currentSlideElement?.props as { notes?: string; nav?: string } | undefined;
  const slideTypeNotes = typeof currentSlideElement?.type === 'function' ? (currentSlideElement.type as any).notes : undefined;
  const notes = slideProps?.notes || slideTypeNotes || '';
  const noteText = noteOverrides[slide] ?? notes;
  const nextSlide = slides[slide + 1];

  const hideUI = uiHidden || (fs && !nearDock);
  const cursorHidden = fs && cursorIdle && !drawing;
  const showAnnotator = drawing || (annStore.current[slide]?.length ?? 0) > 0;

  const navCluster = (
    <>
      <button
        className="noir-icon-btn"
        data-tip="Previous (←)"
        aria-label="Previous slide"
        disabled={!hasPrev}
        onClick={prev}
      >
        <IconLeft />
      </button>
      <div className="noir-counter">
        <span className="noir-counter-now">{slide + 1}</span>
        <span className="noir-counter-tot">/ {total}</span>
      </div>
      <button
        className="noir-icon-btn"
        data-tip="Next (→ / Space)"
        aria-label="Next slide"
        disabled={!hasNext}
        onClick={next}
      >
        <IconRight />
      </button>
    </>
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className={'deck' + (cursorHidden ? ' nocursor' : '')}>
        {/* Top Header Bar with Academic Brand & Action Controls */}
        <header className={'deck-top-bar' + (hideUI ? ' hidden' : '')}>
          <div className="deck-brand">
            <div className="deck-logo-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="deck-brand-text">
              <span className="deck-univ">UNIVERSITAS INTERNASIONAL SEMEN INDONESIA</span>
              <span className="deck-dept">S1 Manajemen · Sistem Informasi Manajemen (MG13SI03)</span>
            </div>
          </div>

          <div className="deck-top-actions">
            <button
              className="deck-action-btn"
              onClick={handlePrint}
              title="Print / Export PDF"
              aria-label="Print slide deck"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span className="action-label">Print PDF</span>
            </button>

            <button
              className="deck-action-btn theme-toggle"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  <span className="action-label">Light</span>
                </>
              ) : (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  <span className="action-label">Dark</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Slide Stage with Slide Content */}
        <DeckCtx.Provider value={liveCtx}>
          <div className="slide-stage" key={slide}>
            {slides[slide]}
          </div>
        </DeckCtx.Provider>

        {/* Progress Bar at the Bottom */}
        <div className="deck-progress-track">
          <div
            className="deck-progress-fill"
            style={{ width: `${((slide + 1) / total) * 100}%` }}
          />
        </div>

        {/* Drawing Annotator */}
        {showAnnotator && (
          <Annotator
            key={slide}
            slide={slide}
            store={annStore.current}
            active={drawing}
          />
        )}

        {/* Thumbnail Sidebar Rail (S) */}
        <aside className={'noir-rail' + (railOpen ? ' open' : '')}>
          <div className="noir-rail-head">
            <span className="noir-rail-title">Daftar Slide (18)</span>
            <button
              className="noir-icon-btn sm"
              data-tip="Close"
              aria-label="Close sidebar"
              onClick={() => setRailOpen(false)}
            >
              <IconClose />
            </button>
          </div>
          <div className="noir-rail-list">
            {railOpen &&
              slides.map((s, i) => (
                <button
                  key={i}
                  className={'noir-thumb' + (i === slide ? ' active' : '')}
                  onClick={() => {
                    go(i);
                    setRailOpen(false);
                  }}
                >
                  <span className="noir-thumb-no">{i + 1}</span>
                  <Thumb>{s}</Thumb>
                </button>
              ))}
          </div>
        </aside>

        {/* Grid View (G) */}
        {gridOpen && (
          <div className="noir-grid">
            <div className="noir-grid-head">
              <span className="noir-rail-title">Ikhtisar Seluruh Slide</span>
              <button
                className="noir-icon-btn sm"
                data-tip="Close"
                aria-label="Close grid view"
                onClick={() => setGridOpen(false)}
              >
                <IconClose />
              </button>
            </div>
            <div className="noir-grid-list">
              {slides.map((s, i) => (
                <button
                  key={i}
                  className={'noir-thumb' + (i === slide ? ' active' : '')}
                  onClick={() => {
                    go(i);
                    setGridOpen(false);
                  }}
                >
                  <span className="noir-thumb-no">{i + 1}</span>
                  <Thumb>{s}</Thumb>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Presenter Mode Window (P) */}
        {isPresenter && (
          <div className="noir-presenter">
            <div className="noir-presenter-row">
              <span className="noir-presenter-label">
                Dosen: Andy Haryoko · Slide {slide + 1} / {total}
              </span>
              <span className="noir-presenter-timer">{fmt(elapsed)}</span>
            </div>
            {nextSlide && (
              <div className="noir-presenter-next">
                <Thumb>{nextSlide}</Thumb>
              </div>
            )}
            <textarea
              className="noir-presenter-notes"
              value={noteText}
              spellCheck={false}
              placeholder="Catatan Pengajar / Dosen Pengampu..."
              onChange={(e) => setNote(e.target.value)}
            />
            <div className="noir-presenter-hint">
              Speaker notes tersimpan otomatis di perangkat ini.
            </div>
          </div>
        )}

        {/* Floating Glass Dock */}
        <div className={'noir-dock' + (hideUI ? ' hidden' : '')}>
          <div className="noir-bar noir-nav-bar">{navCluster}</div>
          <div className="noir-bar">
            <button
              className={'noir-icon-btn' + (railOpen ? ' on' : '')}
              data-tip="Sidebar (S)"
              aria-label="Sidebar"
              aria-pressed={railOpen}
              onClick={toggleRail}
            >
              <IconSidebar />
            </button>
            <button
              className={'noir-icon-btn' + (gridOpen ? ' on' : '')}
              data-tip="Grid view (G)"
              aria-label="Grid view"
              aria-pressed={gridOpen}
              onClick={toggleGrid}
            >
              <IconGrid />
            </button>
            <span className="noir-sep" />
            <div className="noir-nav-inline">{navCluster}</div>
            <span className="noir-sep" />
            <button
              className={'noir-icon-btn' + (drawing ? ' on' : '')}
              data-tip="Anotasi Layar (A)"
              aria-label="Annotate"
              aria-pressed={drawing}
              onClick={() => setDrawing((v) => !v)}
            >
              <IconPencil />
            </button>
            <button
              className="noir-icon-btn"
              data-tip={fs ? 'Keluar Fullscreen (F)' : 'Fullscreen (F)'}
              aria-label={fs ? 'Exit fullscreen' : 'Enter fullscreen'}
              onClick={toggleFs}
            >
              {fs ? <IconShrink /> : <IconExpand />}
            </button>
            <button
              className="noir-icon-btn"
              data-tip="Mode Presenter — Tab Baru (P)"
              aria-label="Open presenter view"
              onClick={openPresenter}
            >
              <IconPresent />
            </button>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
