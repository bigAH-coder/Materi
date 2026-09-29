import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

export default function Slide06StitchPreviewExport() {
  const [activeScreen, setActiveScreen] = useState<'dashboard' | 'input' | 'laporan'>('dashboard');

  return (
    <Slide nav="Preview & Ekspor Stitch" notes={Slide06StitchPreviewExport.notes}>
      <div style={{ padding: '24px 36px', height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid #6366f1', borderRadius: '20px', color: '#818cf8', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
              <span>🚀 Tahap 1 • Iterasi & Handoff</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--fg)', margin: 0 }}>
              Preview, Iterasi Vibe & Ekspor Desain Google Stitch
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '2px 0 0 0' }}>
              Memoles detail prototipe visual menggunakan sidebar kontrol dan mengekspor aset untuk tahap build.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '6px', background: 'var(--surface)', padding: '4px', borderRadius: '10px', border: '1px solid var(--hair)' }}>
            <button
              onClick={() => setActiveScreen('dashboard')}
              style={{
                background: activeScreen === 'dashboard' ? '#6366f1' : 'transparent',
                color: activeScreen === 'dashboard' ? '#fff' : 'var(--muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '5px 10px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              1. Dashboard
            </button>
            <button
              onClick={() => setActiveScreen('input')}
              style={{
                background: activeScreen === 'input' ? '#38bdf8' : 'transparent',
                color: activeScreen === 'input' ? '#000' : 'var(--muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '5px 10px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              2. Input Produk
            </button>
            <button
              onClick={() => setActiveScreen('laporan')}
              style={{
                background: activeScreen === 'laporan' ? '#34d399' : 'transparent',
                color: activeScreen === 'laporan' ? '#000' : 'var(--muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '5px 10px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              3. Laporan
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', alignItems: 'start' }}>
          {/* Simulated Mockup Canvas */}
          <Reveal>
            <div style={{ background: '#0a1120', border: '2px solid #6366f1', borderRadius: '16px', padding: '16px', boxShadow: '0 12px 30px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--hair)', paddingBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ fontSize: '10px', color: 'var(--muted)', marginLeft: '6px' }}>stitch.withgoogle.com/preview</span>
                </div>
                <span style={{ fontSize: '9px', fontWeight: 800, color: '#818cf8', background: 'rgba(99,102,241,0.15)', padding: '2px 6px', borderRadius: '4px' }}>
                  STITCH CANVAS
                </span>
              </div>

              {/* Dynamic Screen Mockup */}
              {activeScreen === 'dashboard' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '8px', borderRadius: '8px', borderLeft: '3px solid #34d399' }}>
                      <span style={{ fontSize: '9px', color: 'var(--muted)', display: 'block' }}>Total Stok</span>
                      <strong style={{ fontSize: '14px', color: '#34d399' }}>250 Pack</strong>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '8px', borderRadius: '8px', borderLeft: '3px solid #38bdf8' }}>
                      <span style={{ fontSize: '9px', color: 'var(--muted)', display: 'block' }}>Penjualan Hari Ini</span>
                      <strong style={{ fontSize: '14px', color: '#38bdf8' }}>Rp 1.450.000</strong>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '8px', borderRadius: '8px', borderLeft: '3px solid #ef4444' }}>
                      <span style={{ fontSize: '9px', color: 'var(--muted)', display: 'block' }}>Stok Menipis</span>
                      <strong style={{ fontSize: '14px', color: '#f87171' }}>Balado (6 pack)</strong>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px', height: '110px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', color: 'var(--muted)', marginBottom: '6px' }}>📊 Grafik Penjualan 7 Hari Terakhir</span>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '60px' }}>
                      {[40, 65, 30, 85, 90, 60, 95].map((h, i) => (
                        <div key={i} style={{ width: '18px', height: `${h}%`, background: '#38a169', borderRadius: '3px' }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeScreen === 'input' && (
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--fg)' }}>➕ Form Tambah Varian Produk Baru</span>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '10px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '6px', borderRadius: '4px', color: 'var(--muted)' }}>Nama: Keripik Balado</div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '6px', borderRadius: '4px', color: 'var(--muted)' }}>Varian: Ekstra Pedas</div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '6px', borderRadius: '4px', color: 'var(--muted)' }}>Harga: Rp 15.000</div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '6px', borderRadius: '4px', color: 'var(--muted)' }}>Stok Awal: 50 Pack</div>
                  </div>
                  <div style={{ background: '#38a169', color: '#fff', textAlign: 'center', padding: '6px', borderRadius: '6px', fontSize: '10px', fontWeight: 700, marginTop: '4px' }}>
                    Simpan Produk Baru
                  </div>
                </div>
              )}

              {activeScreen === 'laporan' && (
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--fg)' }}>📋 Tabel Rekap Transaksi Harian</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 6px', background: 'rgba(255,255,255,0.04)', borderRadius: '4px' }}>
                      <span>#TRX-001 • Keripik Original (5 pack)</span>
                      <strong style={{ color: '#34d399' }}>Rp 75.000</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 6px', background: 'rgba(255,255,255,0.02)', borderRadius: '4px' }}>
                      <span>#TRX-002 • Keripik Keju (10 pack)</span>
                      <strong style={{ color: '#34d399' }}>Rp 150.000</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Export Toolbar */}
              <div style={{ display: 'flex', gap: '6px', paddingTop: '6px', borderTop: '1px solid var(--hair)' }}>
                <span style={{ background: 'rgba(255,255,255,0.06)', padding: '4px 8px', borderRadius: '4px', fontSize: '9px', color: '#a5b4fc' }}>
                  [Copy HTML/CSS Code]
                </span>
                <span style={{ background: 'rgba(255,255,255,0.06)', padding: '4px 8px', borderRadius: '4px', fontSize: '9px', color: '#38bdf8' }}>
                  [Paste to Figma]
                </span>
                <span style={{ background: 'rgba(255,255,255,0.06)', padding: '4px 8px', borderRadius: '4px', fontSize: '9px', color: '#34d399' }}>
                  [Share Prototype Link]
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Iteration Prompting & Export Options */}
          <Reveal delay={200}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--hair)', borderRadius: '14px', padding: '14px 16px' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#f59e0b', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  Teknik Prompt Iterasi di Google Stitch:
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '10px', color: 'var(--fg)' }}>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                    💬 <em>"Ubah warna tombol utama menjadi hijau daun dan perbesar ukurannya."</em>
                  </div>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                    💬 <em>"Tambahkan navigation bar di bagian atas halaman dengan logo toko."</em>
                  </div>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                    💬 <em>"Tampilkan grafik penjualan dalam bentuk line chart dengan sumbu tanggal."</em>
                  </div>
                </div>
              </div>

              <div style={{ background: 'var(--surface)', border: '1px solid var(--hair)', borderRadius: '14px', padding: '14px 16px' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#34d399', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  3 Opsi Ekspor Hasil Desain:
                </span>
                <ul style={{ margin: 0, paddingLeft: '14px', fontSize: '10px', color: 'var(--fg)', lineHeight: 1.5 }}>
                  <li><strong>Copy Code:</strong> Menyalin kode front-end untuk langsung dipelajari.</li>
                  <li><strong>Paste to Figma:</strong> Membuka di Figma dengan layer dan auto-layout utuh.</li>
                  <li><strong>Share Link:</strong> Membagikan tautan prototipe interaktif ke dosen pengampu.</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Slide>
  );
}

Slide06StitchPreviewExport.notes = "Dosen mempraktikkan proses review hasil desain di Stitch. Gunakan tombol tab di kanan atas untuk mensimulasikan layar Dashboard, Input Produk, dan Laporan Penjualan. Jelaskan bagaimana mahasiswa dapat melakukan iterasi lanjutan dengan prompt chat serta memanfaatkan 3 opsi ekspor: Copy Code, Paste to Figma, dan Share Link.";
Slide06StitchPreviewExport.nav = "Preview & Ekspor Stitch";
