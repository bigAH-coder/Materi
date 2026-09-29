import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

export default function Slide11AntigravityMCP() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [testStatus, setTestStatus] = useState<'idle' | 'success'>('idle');

  const steps = [
    {
      step: 1,
      title: 'Generate API Key di Stitch',
      desc: 'Buka stitch.withgoogle.com, masuk ke menu Settings ➔ API Access, lalu klik "Generate Secret Key".',
      badge: 'Google Stitch',
    },
    {
      step: 2,
      title: 'Buka Agent Manager di Antigravity',
      desc: 'Tekan shortcut keyboard CTRL+E (Windows/Linux) atau CMD+E (Mac) untuk membuka panel kontrol agen.',
      badge: 'Shortcut IDE',
    },
    {
      step: 3,
      title: 'Konfigurasi Server MCP Stitch',
      desc: 'Pilih tab "MCP Servers", cari provider "google-stitch", lalu tempelkan API Key yang telah disalin.',
      badge: 'Koneksi MCP',
    },
    {
      step: 4,
      title: 'Verifikasi di Chat Antigravity',
      desc: 'Ketik perintah "List my Stitch projects" di chat agen. Antigravity akan menampilkan seluruh desain aktif Anda!',
      badge: 'Verifikasi Live',
    },
  ];

  return (
    <Slide nav="Konfigurasi MCP" notes={Slide11AntigravityMCP.notes}>
      <div style={{ padding: '24px 36px', height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(6, 182, 212, 0.12)', border: '1px solid #06b6d4', borderRadius: '20px', color: '#22d3ee', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
              <span>🔌 Integrasi Desain ke Codebase</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--fg)', margin: 0 }}>
              Konfigurasi Stitch MCP: Menghubungkan Desain ke Antigravity
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '2px 0 0 0' }}>
              Model Context Protocol (MCP) memungkinkan agen Antigravity membaca prototipe visual Stitch secara langsung.
            </p>
          </div>

          <div style={{ background: 'var(--surface)', padding: '6px 14px', borderRadius: '10px', border: '1px solid var(--hair)' }}>
            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Protokol Standar:</span>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#22d3ee', marginLeft: '6px' }}>
              Model Context Protocol (MCP)
            </span>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', alignItems: 'start' }}>
          {/* Left Column: 4 Step Navigator */}
          <Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {steps.map((s) => {
                const isSelected = activeStep === s.step;
                return (
                  <div
                    key={s.step}
                    onClick={() => setActiveStep(s.step)}
                    style={{
                      padding: '10px 14px',
                      background: isSelected ? 'rgba(6, 182, 212, 0.12)' : 'var(--surface)',
                      border: isSelected ? '2px solid #06b6d4' : '1px solid var(--hair)',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 800, color: '#22d3ee', background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: '4px' }}>
                        LANGKAH {s.step} • {s.badge}
                      </span>
                      <span style={{ fontSize: '10px', color: 'var(--muted)' }}>
                        {isSelected ? 'AKTIF' : 'Pilih'}
                      </span>
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--fg)', marginBottom: '2px' }}>
                      {s.title}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: 1.4 }}>
                      {s.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Right Column: Interactive Verification Terminal */}
          <Reveal delay={200}>
            <div style={{ background: '#0a1120', border: '2px solid #06b6d4', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--hair)', paddingBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#22d3ee' }}>
                  💻 ANTIGRAVITY AGENT TERMINAL
                </span>
                <span style={{ fontSize: '9px', color: 'var(--muted)' }}>mcp_config.json</span>
              </div>

              {/* Simulated Chat Box */}
              <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '8px', padding: '12px', fontSize: '11px', fontFamily: 'monospace', minHeight: '140px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div>
                  <span style={{ color: '#60a5fa' }}>User@Antigravity:~$ </span>
                  <span style={{ color: '#fff' }}>List my Stitch projects</span>
                </div>

                {testStatus === 'success' ? (
                  <div style={{ color: '#34d399', lineHeight: 1.4 }}>
                    <div>✔ [MCP] Stitch Server Connected (Status 200 OK)</div>
                    <div style={{ color: 'var(--fg)', marginTop: '4px' }}>Daftar Proyek Desain Terdeteksi:</div>
                    <div style={{ paddingLeft: '8px', color: '#a5b4fc' }}>
                      1. "UMKM Keripik Rasa Nusantara" (3 Layar) - Updated 10m ago<br />
                      2. "Katalog Batik Gedog Tuban" (4 Layar) - Updated 2h ago
                    </div>
                    <div style={{ color: 'var(--muted)', marginTop: '4px' }}>
                      → Siap diimplementasikan oleh Frontend Agent.
                    </div>
                  </div>
                ) : (
                  <div style={{ color: 'var(--muted)', fontStyle: 'italic' }}>
                    Klik tombol di bawah untuk menyimulasikan verifikasi koneksi...
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={() => setTestStatus('success')}
                  style={{
                    background: '#06b6d4',
                    color: '#000',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  ▶ Simulasikan Verifikasi MCP
                </button>
                <button
                  onClick={() => setTestStatus('idle')}
                  style={{ background: 'transparent', color: 'var(--muted)', border: '1px solid var(--hair)', borderRadius: '6px', padding: '6px 10px', fontSize: '10px', cursor: 'pointer' }}
                >
                  Reset
                </button>
              </div>

              <div style={{ fontSize: '10px', color: 'var(--muted)', lineHeight: 1.4, borderTop: '1px solid var(--hair)', paddingTop: '6px' }}>
                💡 <strong>Manfaat MCP:</strong> Agen AI dapat langsung membaca warna HEX, posisi tombol, dan nama field yang Anda rancang di Google Stitch tanpa perlu salin-tempel manual!
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Slide>
  );
}

Slide11AntigravityMCP.notes = "Dosen menjelaskan konfigurasi Model Context Protocol (MCP) di Antigravity. MCP adalah jembatan standar terbuka yang memungkinkan agen coding membaca proyek desain di Google Stitch secara real-time. Tunjukkan simulasi verifikasi di terminal agar mahasiswa yakin koneksi telah aktif.";
Slide11AntigravityMCP.nav = "Konfigurasi MCP";
