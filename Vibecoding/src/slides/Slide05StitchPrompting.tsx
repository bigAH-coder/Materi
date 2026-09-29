import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

export default function Slide05StitchPrompting() {
  const [activeTab, setActiveTab] = useState<'template' | 'example'>('example');
  const [copied, setCopied] = useState<boolean>(false);

  const universalTemplate = `Desain [JENIS APLIKASI] untuk UMKM [NAMA/JENIS UMKM] yang bergerak di bidang [BIDANG USAHA].

Halaman yang dibutuhkan:
1. [Halaman 1] — [deskripsi konten]
2. [Halaman 2] — [deskripsi konten]
3. [Halaman 3] — [deskripsi konten]

Gaya visual:
- Warna: [palet warna, misal: hijau daun dan coklat tanah]
- Font: [jenis font, misal: sans-serif modern]
- Suasana: [misal: hangat, tradisional, profesional]

Elemen wajib:
- [elemen 1, misal: form input produk]
- [elemen 2, misal: tabel stok]
- [elemen 3, misal: grafik penjualan]`;

  const realExample = `Desain aplikasi web inventory untuk UMKM Keripik Singkong "Rasa Nusantara" di Gresik yang memproduksi keripik singkong dengan 5 varian rasa.

Halaman yang dibutuhkan:
1. Dashboard — ringkasan stok, penjualan hari ini, dan notifikasi stok rendah
2. Input Produk — form untuk menambah produk baru dengan foto, nama, harga, stok
3. Laporan Penjualan — tabel transaksi dengan filter tanggal dan grafik penjualan

Gaya visual:
- Warna: hijau daun (#38a169) dan kuning keemasan (#f6ad55)
- Font: Inter atau Plus Jakarta Sans
- Suasana: hangat, tradisional, tetapi modern

Elemen wajib:
- Kartu statistik di dashboard
- Form input dengan validasi
- Grafik batang penjualan mingguan
- Notifikasi stok rendah berwarna merah`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Slide nav="Prompting Stitch" notes={Slide05StitchPrompting.notes}>
      <div style={{ padding: '24px 36px', height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid #6366f1', borderRadius: '20px', color: '#818cf8', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
              <span>✍️ Formula Prompting Google Stitch</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--fg)', margin: 0 }}>
              Menyusun Prompt Vibe Design untuk Solusi Digital UMKM
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '2px 0 0 0' }}>
              Formula 4 pilar prompt: Konteks Usaha, Struktur Halaman, Palet & Tipografi, serta Elemen Wajib.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '6px', background: 'var(--surface)', padding: '4px', borderRadius: '10px', border: '1px solid var(--hair)' }}>
            <button
              onClick={() => setActiveTab('template')}
              style={{
                background: activeTab === 'template' ? '#6366f1' : 'transparent',
                color: activeTab === 'template' ? '#fff' : 'var(--muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Template Universal
            </button>
            <button
              onClick={() => setActiveTab('example')}
              style={{
                background: activeTab === 'example' ? '#34d399' : 'transparent',
                color: activeTab === 'example' ? '#000' : 'var(--muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Contoh Kasus: Keripik Gresik
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', alignItems: 'start' }}>
          {/* Prompt Codebox */}
          <Reveal>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--hair)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: activeTab === 'example' ? '#34d399' : '#818cf8', textTransform: 'uppercase' }}>
                  {activeTab === 'example' ? 'Prompt Siap Pakai: UMKM Keripik' : 'Struktur Template Universal'}
                </span>
                <button
                  onClick={() => handleCopy(activeTab === 'example' ? realExample : universalTemplate)}
                  style={{
                    background: copied ? 'var(--success)' : 'rgba(255,255,255,0.06)',
                    color: copied ? '#fff' : 'var(--fg)',
                    border: '1px solid var(--hair)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '10px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>{copied ? '✔ Tersalin!' : '📋 Salin Prompt'}</span>
                </button>
              </div>

              <pre
                style={{
                  margin: 0,
                  padding: '12px',
                  background: 'rgba(0,0,0,0.35)',
                  borderRadius: '10px',
                  fontSize: '11px',
                  color: 'var(--fg)',
                  fontFamily: 'monospace',
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.45,
                  maxHeight: '260px',
                  overflowY: 'auto',
                }}
              >
                {activeTab === 'example' ? realExample : universalTemplate}
              </pre>
            </div>
          </Reveal>

          {/* Prompting Analysis & Key Principles */}
          <Reveal delay={200}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--hair)', borderRadius: '14px', padding: '14px 16px' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  4 Kunci Keberhasilan Prompt Vibe Design:
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px', color: 'var(--fg)' }}>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', borderLeft: '3px solid #818cf8' }}>
                    <strong>1. Konteks Spesifik:</strong> Sebutkan produk nyata (keripik 5 rasa di Gresik) agar AI menyesuaikan ikonografi.
                  </div>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', borderLeft: '3px solid #38bdf8' }}>
                    <strong>2. Halaman Terfokus:</strong> Batasi 3 halaman utama (Dashboard, Input Produk, Laporan) untuk draft awal.
                  </div>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', borderLeft: '3px solid #34d399' }}>
                    <strong>3. Kode Warna Eksak:</strong> Berikan kode HEX (misal: `#38a169` & `#f6ad55`) agar warna brand konsisten.
                  </div>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', borderLeft: '3px solid #f59e0b' }}>
                    <strong>4. Elemen Wajib Kasir:</strong> Minta kartu statistik, form validasi, dan notifikasi stok rendah berwarna merah.
                  </div>
                </div>
              </div>

              <div style={{ background: 'rgba(52, 211, 153, 0.08)', border: '1px solid #34d399', borderRadius: '12px', padding: '10px 14px' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#34d399', display: 'block' }}>
                  💡 Tips Praktikum Mahasiswa
                </span>
                <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: 'var(--fg)', lineHeight: 1.4 }}>
                  "Salin contoh prompt di sebelah kiri, lalu tempelkan langsung ke kolom input <strong>stitch.withgoogle.com</strong> untuk melihat hasil visual pertama Anda!"
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Slide>
  );
}

Slide05StitchPrompting.notes = "Dosen membedah cara merumuskan prompt vibe design di Google Stitch. Tunjukkan 4 pilar prompt: Konteks Bisnis, Struktur Halaman, Palet Warna HEX, dan Elemen Wajib. Mahasiswa dipersilakan mengklik tombol 'Salin Prompt' untuk langsung mencobanya di akun Google Stitch masing-masing.";
Slide05StitchPrompting.nav = "Prompting Stitch";
