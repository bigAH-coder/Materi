import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

export default function Slide09AIStudioAnnotation() {
  const [annotationTarget, setAnnotationTarget] = useState<'button' | 'search' | 'chart'>('button');

  const annotations = {
    button: {
      title: 'Anotasi 1: Ukuran & Warna Tombol',
      target: "Tombol 'Tambah Produk'",
      prompt: "Tombol 'Tambah Produk' terlalu kecil, perbesar ukurannya dan beri warna hijau daun (#38a169) dengan icon plus.",
      result: "AI Studio merevisi komponen tombol menjadi lebih ergonomis untuk layar sentuh kasir.",
    },
    search: {
      title: 'Anotasi 2: Filter Pencarian Tabel',
      target: 'Area Header Tabel Produk',
      prompt: 'Tambahkan search bar real-time di atas tabel produk dan dropdown filter varian rasa keripik.',
      result: 'AI Studio menambahkan input search dengan debounce filter state pada data produk.',
    },
    chart: {
      title: 'Anotasi 3: Format Visual Grafik',
      target: 'Komponen Grafik Penjualan',
      prompt: 'Ubah grafik batang menjadi multi-line chart yang menampilkan tren penjualan mingguan vs stok sisa.',
      result: 'AI Studio mengintegrasikan library Recharts dengan sumbu Y rupiah dan tooltip interaktif.',
    },
  };

  const current = annotations[annotationTarget];

  return (
    <Slide nav="Refine & Annotation" notes={Slide09AIStudioAnnotation.notes}>
      <div style={{ padding: '24px 36px', height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(26, 115, 232, 0.12)', border: '1px solid #1a73e8', borderRadius: '20px', color: '#60a5fa', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
              <span>🎯 Tahap 2 • Refinement Visual</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--fg)', margin: 0 }}>
              Refine Aplikasi dengan Annotation Mode & Deployment
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '2px 0 0 0' }}>
              Fitur canggih AI Studio: tunjuk elemen di layar preview, beri instruksi perbaikan, dan deploy ke cloud.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '6px', background: 'var(--surface)', padding: '4px', borderRadius: '10px', border: '1px solid var(--hair)' }}>
            <button
              onClick={() => setAnnotationTarget('button')}
              style={{
                background: annotationTarget === 'button' ? '#1a73e8' : 'transparent',
                color: annotationTarget === 'button' ? '#fff' : 'var(--muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '5px 10px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              1. Edit Tombol
            </button>
            <button
              onClick={() => setAnnotationTarget('search')}
              style={{
                background: annotationTarget === 'search' ? '#38bdf8' : 'transparent',
                color: annotationTarget === 'search' ? '#000' : 'var(--muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '5px 10px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              2. Tambah Search
            </button>
            <button
              onClick={() => setAnnotationTarget('chart')}
              style={{
                background: annotationTarget === 'chart' ? '#34d399' : 'transparent',
                color: annotationTarget === 'chart' ? '#000' : 'var(--muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '5px 10px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              3. Ubah Grafik
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', alignItems: 'start' }}>
          {/* Simulated Annotation Live Canvas */}
          <Reveal>
            <div style={{ background: '#0a1120', border: '2px solid #1a73e8', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--hair)', paddingBottom: '8px' }}>
                <span style={{ fontSize: '10px', color: '#60a5fa', fontWeight: 800 }}>
                  [✏️ ANNOTATION MODE ACTIVE]
                </span>
                <span style={{ fontSize: '9px', background: 'rgba(52, 211, 153, 0.15)', color: '#34d399', padding: '2px 8px', borderRadius: '4px' }}>
                  Live Preview Panel
                </span>
              </div>

              {/* Mockup Canvas with Highlighted Bounding Box */}
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--hair)', borderRadius: '10px', padding: '14px', position: 'relative' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--fg)', marginBottom: '8px' }}>
                  Aplikasi Inventory UMKM Rasa Nusantara
                </div>

                {/* Target Element Box with dashed border */}
                <div
                  style={{
                    border: '2px dashed #f59e0b',
                    background: 'rgba(245, 158, 11, 0.08)',
                    borderRadius: '8px',
                    padding: '10px',
                    position: 'relative',
                    marginBottom: '8px',
                  }}
                >
                  <span style={{ position: 'absolute', top: '-10px', right: '10px', background: '#f59e0b', color: '#000', fontSize: '8px', fontWeight: 800, padding: '1px 5px', borderRadius: '3px' }}>
                    SELECTED: {current.target}
                  </span>

                  <div style={{ fontSize: '11px', color: 'var(--fg)', fontWeight: 600 }}>
                    {annotationTarget === 'button' && (
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#38a169', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '10px' }}>
                        <span>➕ Tambah Produk Varian Baru</span>
                      </div>
                    )}
                    {annotationTarget === 'search' && (
                      <div style={{ background: 'rgba(255,255,255,0.06)', padding: '6px 10px', borderRadius: '6px', color: 'var(--muted)', fontSize: '10px' }}>
                        🔍 Cari nama produk keripik... [Filter Varian ▾]
                      </div>
                    )}
                    {annotationTarget === 'chart' && (
                      <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', fontSize: '10px' }}>
                        📈 Line Chart: Tren Penjualan 7 Hari Terakhir vs Batas Stok Minimum
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ fontSize: '10px', color: 'var(--muted)' }}>
                  Elemen lain di aplikasi tidak terpengaruh saat anotasi diterapkan.
                </div>
              </div>

              {/* Prompt box */}
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '8px 12px', borderRadius: '8px', borderLeft: '3px solid #1a73e8' }}>
                <span style={{ fontSize: '9px', color: '#60a5fa', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>
                  Prompt Refinement Terkirim:
                </span>
                <span style={{ fontSize: '11px', color: 'var(--fg)', fontStyle: 'italic' }}>
                  "{current.prompt}"
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Deployment Actions & Refinement Flow */}
          <Reveal delay={200}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--hair)', borderRadius: '14px', padding: '14px 16px' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#60a5fa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  Cara Kerja Annotation Mode:
                </span>
                <ol style={{ margin: 0, paddingLeft: '14px', fontSize: '10px', color: 'var(--fg)', lineHeight: 1.5 }}>
                  <li>Klik icon <strong>Annotation (pensil/kotak)</strong> di toolbar Live Preview.</li>
                  <li>Gambar kotak seleksi pada tombol, tabel, atau kartu yang ingin diperbaiki.</li>
                  <li>Ketik prompt spesifik dalam bahasa Indonesia, lalu klik <strong>Update</strong>.</li>
                  <li>Gemini hanya merevisi komponen tersebut tanpa merusak kode lainnya!</li>
                </ol>
              </div>

              <div style={{ background: 'var(--surface)', border: '1px solid var(--hair)', borderRadius: '14px', padding: '14px 16px' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#34d399', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  Langkah 4: Simpan & Deploy:
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '10px', color: 'var(--fg)' }}>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', borderLeft: '3px solid #818cf8' }}>
                    <strong>Save to GitHub:</strong> Simpan seluruh source code React ke repository GitHub kelompok Anda.
                  </div>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', borderLeft: '3px solid #34d399' }}>
                    <strong>Deploy to Cloud Run:</strong> Dapatkan tautan web online resmi yang bisa langsung dibuka di smartphone pemilik toko.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Slide>
  );
}

Slide09AIStudioAnnotation.notes = "Dosen mempraktikkan Annotation Mode di Google AI Studio. Tunjukkan bahwa mahasiswa tidak perlu memahami baris kode mana yang harus diubah: cukup gambar kotak di sekitar elemen yang diinginkan pada live preview, lalu tuliskan instruksi perbaikan dalam bahasa natural. Jelaskan pula tombol Save to GitHub dan Deploy to Cloud Run untuk publikasi online.";
Slide09AIStudioAnnotation.nav = "Refine & Annotation";
