import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

export default function Slide01Title() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      title: '1. Desain UI/UX',
      tool: 'Google Stitch',
      tag: 'Vibe Design',
      color: '#6366f1',
      icon: '🎨',
      desc: 'Mengubah bahasa natural & sketsa menjadi prototipe UI/UX berfidelitas tinggi lengkap dengan kode front-end.',
    },
    {
      title: '2. Build Aplikasi',
      tool: 'Google AI Studio',
      tag: 'Build Mode (React)',
      color: '#1a73e8',
      icon: '🧠',
      desc: 'Membangun aplikasi web React interaktif lengkap dengan logika bisnis, state management, dan penyimpanan data.',
    },
    {
      title: '3. Deploy Otonom',
      tool: 'Google Antigravity',
      tag: 'Agentic Pipeline',
      color: '#06b6d4',
      icon: '⚡',
      desc: 'Mengorkestrasi tim developer AI otonom (PM, Frontend, QA, DevOps) untuk menghantarkan aplikasi siap produksi.',
    },
  ];

  return (
    <Slide nav="Cover Praktikum" notes={Slide01Title.notes}>
      <div style={{ padding: '28px 40px', height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
        {/* Top Badges */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: 'rgba(99, 102, 241, 0.15)', border: '1px solid #6366f1', borderRadius: '20px', color: '#a5b4fc', fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <span>⚡ PANDUAN PRAKTIKUM VIBE CODING</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 10px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--hair)', borderRadius: '20px', color: 'var(--muted)', fontSize: '11px', fontWeight: 600 }}>
              S1 Manajemen Semester 5 • Sistem Informasi Manajemen
            </span>
          </div>

          <div style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 600 }}>
            Universitas Internasional Semen Indonesia (UISI)
          </div>
        </div>

        {/* Title and Subtitle */}
        <div style={{ marginBottom: '22px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 900, color: 'var(--fg)', lineHeight: 1.25, margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
            Membangun Aplikasi UMKM dengan <br />
            <span style={{ background: 'linear-gradient(90deg, #818cf8 0%, #38bdf8 50%, #34d399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Google Stitch, Google AI Studio & Antigravity
            </span>
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0, maxWidth: '880px', lineHeight: 1.5 }}>
            Pendekatan modern pengembangan perangkat lunak berbasis bahasa natural (vibe coding): manajer mendiktekan kebutuhan bisnis, kecerdasan buatan mengeksekusi desain, kode React, hingga deployment sistem.
          </p>
        </div>

        {/* Interactive 3-Pillar Cards */}
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '20px' }}>
            {pillars.map((p, idx) => {
              const isSelected = activePillar === idx;
              return (
                <div
                  key={p.title}
                  onClick={() => setActivePillar(idx)}
                  style={{
                    background: isSelected ? 'rgba(255,255,255,0.07)' : 'var(--surface)',
                    border: isSelected ? `2px solid ${p.color}` : '1px solid var(--hair)',
                    borderRadius: '16px',
                    padding: '18px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? `0 8px 24px rgba(0,0,0,0.25)` : 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '24px' }}>{p.icon}</span>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: p.color, background: 'rgba(255,255,255,0.06)', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                      {p.tag}
                    </span>
                  </div>

                  <div style={{ fontSize: '11px', color: p.color, fontWeight: 700, marginBottom: '2px' }}>
                    {p.title}
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--fg)', margin: '0 0 6px 0' }}>
                    {p.tool}
                  </h3>
                  <p style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: 1.4, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Footer Meta */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid var(--hair)', fontSize: '11px', color: 'var(--muted)' }}>
          <div>
            <strong>Dosen Pengampu:</strong> Andy Haryoko / Tim Dosen SIM UISI
          </div>
          <div>
            <strong>Fokus Kompetensi:</strong> Problem-First Mindset • Vibe Coding • Solusi Digital UMKM
          </div>
        </div>
      </div>
    </Slide>
  );
}

Slide01Title.notes = "Selamat datang dalam Panduan Praktikum Vibe Coding untuk mahasiswa S1 Manajemen Semester 5! Sesi praktikum ini mendemonstrasikan bagaimana mahasiswa bisnis dapat membangun prototipe aplikasi nyata untuk UMKM tanpa harus menghafal sintaks pemrograman. Kita memadukan 3 platform Google: Google Stitch untuk visual vibe design, Google AI Studio untuk merakit aplikasi React fungsional, dan Antigravity untuk menjalankan alur pengembangan otonom.";
Slide01Title.nav = "Cover Praktikum";
