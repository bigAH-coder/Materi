import { IconScroll, IconCpu } from './LineIcons';

interface Milestone {
  year: string;
  title: string;
  creator: string;
  icon: 'scroll' | 'cpu';
  accentColor: string;
  description: string;
  highlights: string[];
}

const milestones: Milestone[] = [
  {
    year: '300 SM',
    title: 'Algoritma Euclidean',
    creator: 'Euclid dari Aleksandria',
    icon: 'scroll',
    accentColor: 'var(--primary-orange)',
    description:
      'Salah satu algoritma tertua dalam sejarah tertulis untuk menemukan Pembagi Persekutuan Terbesar (FPB) dari dua bilangan secara berulang dan terstruktur.',
    highlights: ['Metode matematis tertua', 'Bukti logika komputasi kuno', 'Fondasi teori bilangan'],
  },
  {
    year: '2025+',
    title: 'Algoritma di Mana-mana',
    creator: 'Era Komputasi Cerdas & AI',
    icon: 'cpu',
    accentColor: 'var(--primary)',
    description:
      'Algoritma menjadi penggerak utama revolusi industri, optimasi rute navigasi real-time, sistem rekomendasi produk cerdas, hingga model AI generatif masa kini.',
    highlights: ['Google Maps & Dijkstra', 'Rekomendasi Netflix & E-Commerce', 'Otomasi Pabrik Cerdas 4.0'],
  },
];

export default function HorizontalTimeline() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '960px',
        marginInline: 'auto',
        marginTop: '10px',
      }}
    >
      {/* Horizontal glowing line */}
      <div
        style={{
          position: 'absolute',
          top: '36px',
          left: '10%',
          right: '10%',
          height: '4px',
          background: 'linear-gradient(90deg, var(--primary-orange) 0%, rgba(255,255,255,0.2) 50%, var(--primary) 100%)',
          boxShadow: '0 0 16px rgba(0, 212, 255, 0.4), 0 0 16px rgba(245, 166, 35, 0.4)',
          borderRadius: '999px',
          zIndex: 0,
        }}
      />

      {/* Two Milestone Columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
          gap: '32px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {milestones.map((m, idx) => {
          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Node on the line */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'rgba(26, 26, 46, 0.95)',
                    border: `2px solid ${m.accentColor}`,
                    boxShadow: `0 0 25px ${m.accentColor}55`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: m.accentColor,
                    flexShrink: 0,
                  }}
                >
                  {m.icon === 'scroll' ? (
                    <IconScroll width={36} height={36} />
                  ) : (
                    <IconCpu width={36} height={36} />
                  )}
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: m.accentColor,
                      letterSpacing: '0.05em',
                      textShadow: `0 0 10px ${m.accentColor}66`,
                    }}
                  >
                    {m.year}
                  </span>
                  <div style={{ fontSize: '13px', color: 'var(--fg-muted)' }}>{m.creator}</div>
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  background: 'var(--surface)',
                  border: `1px solid ${m.accentColor}33`,
                  borderRadius: 'var(--radius)',
                  padding: '24px 26px',
                  boxShadow: 'var(--shadow)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--fg)' }}>
                  {m.title}
                </h3>
                <p style={{ color: 'var(--fg-muted)', fontSize: '14px', lineHeight: 1.6 }}>
                  {m.description}
                </p>

                {/* Highlights tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                  {m.highlights.map((h, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '12px',
                        padding: '5px 11px',
                        borderRadius: '999px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--hair-2)',
                        color: 'var(--fg)',
                      }}
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
