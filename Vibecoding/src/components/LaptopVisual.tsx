import { IconPython, IconBookOpen, IconPencil, IconCode } from './LineIcons';

export default function LaptopVisual() {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px auto 0',
        width: 'min(90vw, 440px)',
      }}
    >
      {/* Ambient Glow behind Laptop */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '340px',
          height: '200px',
          background: 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.45) 0%, rgba(245, 166, 35, 0.18) 50%, transparent 80%)',
          filter: 'blur(50px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Floating Badge 1: Persiapan UTS */}
      <div
        style={{
          position: 'absolute',
          top: '-12px',
          left: '-28px',
          zIndex: 4,
          background: 'rgba(15, 17, 32, 0.88)',
          border: '1px solid rgba(245, 166, 35, 0.4)',
          borderRadius: '999px',
          padding: '6px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(245, 166, 35, 0.2)',
          backdropFilter: 'blur(10px)',
          animation: 'bounceSlow 3s ease-in-out infinite',
        }}
      >
        <span style={{ fontSize: '13px' }}>🎯</span>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#f5a623', letterSpacing: '0.03em' }}>
          Simulasi &amp; Latihan UTS
        </span>
      </div>

      {/* Floating Badge 2: Modul Terintegrasi */}
      <div
        style={{
          position: 'absolute',
          top: '18px',
          right: '-32px',
          zIndex: 4,
          background: 'rgba(15, 17, 32, 0.88)',
          border: '1px solid rgba(0, 212, 255, 0.4)',
          borderRadius: '999px',
          padding: '6px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 212, 255, 0.3)',
          backdropFilter: 'blur(10px)',
          animation: 'bounceSlow 3s ease-in-out infinite 1.5s',
        }}
      >
        <span style={{ fontSize: '13px' }}>📚</span>
        <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.03em' }}>
          Materi Pertemuan 1 - 6
        </span>
      </div>

      {/* Screen Frame */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          aspectRatio: '16 / 10',
          background: '#0d0f1b',
          borderRadius: '16px 16px 0 0',
          border: '2px solid rgba(0, 212, 255, 0.4)',
          borderBottom: 'none',
          boxShadow: '0 20px 50px -10px rgba(0, 212, 255, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.8)',
          padding: '12px 14px',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        {/* Screen Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '8px',
            marginBottom: '8px',
          }}
        >
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }} />
          </div>
          <span
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--primary)',
              letterSpacing: '0.04em',
            }}
          >
            reviu_persiapan_uts.py
          </span>
          <div style={{ width: 24 }} />
        </div>

        {/* Screen Content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            background: 'radial-gradient(circle at center, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
            borderRadius: '8px',
            position: 'relative',
          }}
        >
          {/* Logo & Icons Group: Python, Book, Pencil, Code */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                background: 'rgba(26, 26, 46, 0.9)',
                border: '1.5px solid rgba(0, 212, 255, 0.5)',
                boxShadow: '0 0 15px rgba(0, 212, 255, 0.5)',
              }}
            >
              <IconPython width={24} height={24} />
            </div>

            <div
              style={{
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                background: 'rgba(245, 166, 35, 0.15)',
                border: '1px solid rgba(245, 166, 35, 0.4)',
                color: '#f5a623',
              }}
            >
              <IconBookOpen width={18} height={18} />
            </div>

            <div
              style={{
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                background: 'rgba(0, 212, 255, 0.15)',
                border: '1px solid rgba(0, 212, 255, 0.4)',
                color: 'var(--primary)',
              }}
            >
              <IconPencil width={18} height={18} />
            </div>

            <div
              style={{
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                color: '#10b981',
              }}
            >
              <IconCode width={18} height={18} />
            </div>
          </div>

          {/* Integrated topics mini pills */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '4px 8px',
              marginTop: '4px',
              fontSize: '9px',
              fontFamily: 'var(--font-mono)',
              color: '#cbd5e1',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#10b981' }}>✓</span> P1-2: Algoritma &amp; Flowchart
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#10b981' }}>✓</span> P3-4: Variabel &amp; Python Dasar
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#10b981' }}>✓</span> P5: Linear &amp; Binary Search
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#10b981' }}>✓</span> P6: Bubble &amp; Insertion Sort
            </div>
          </div>

          {/* Code snippet inside laptop */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'rgba(255, 255, 255, 0.85)',
              textAlign: 'center',
              marginTop: '2px',
            }}
          >
            <span style={{ color: 'var(--primary-orange)' }}>status_uts</span> = <span style={{ color: '#10b981' }}>"100% Siap Juara!"</span>
          </div>
        </div>
      </div>

      {/* Laptop Base */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '112%',
          height: '14px',
          background: 'linear-gradient(180deg, #2a2e45 0%, #151726 100%)',
          borderRadius: '0 0 16px 16px',
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.7), 0 2px 4px rgba(0, 212, 255, 0.2)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* Trackpad notch */}
        <div
          style={{
            width: '60px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '0 0 4px 4px',
          }}
        />
      </div>
    </div>
  );
}
