import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

export default function Slide08AIStudioBuildPrompt() {
  const [activeTab, setActiveTab] = useState<'template' | 'example'>('example');
  const [copied, setCopied] = useState<boolean>(false);

  const universalTemplate = `Bangun aplikasi web React untuk UMKM [NAMA UMKM] yang bergerak di bidang [BIDANG].

Fitur utama:
1. [Fitur 1] — [deskripsi fungsi]
2. [Fitur 2] — [deskripsi fungsi]
3. [Fitur 3] — [deskripsi fungsi]

Data yang perlu dikelola:
- [Entitas 1]: [field 1], [field 2], [field 3]
- [Entitas 2]: [field 1], [field 2], [field 3]

Tampilan:
- Gunakan Tailwind CSS
- Warna utama: [warna]
- Layout: [deskripsi layout]
- Responsive untuk desktop dan mobile

Simpan data di localStorage (untuk prototipe).`;

  const realExample = `Bangun aplikasi web React untuk UMKM Keripik Singkong "Rasa Nusantara" yang memproduksi keripik dengan 5 varian rasa.

Fitur utama:
1. Manajemen Produk — CRUD produk (tambah, lihat, edit, hapus) dengan field: nama produk, varian rasa, harga, stok, foto
2. Manajemen Stok — input stok masuk/keluar, notifikasi jika stok < 10
3. Laporan Penjualan — tabel transaksi, total penjualan hari ini, grafik penjualan 7 hari terakhir

Data yang perlu dikelola:
- Produk: id, nama, varian, harga, stok, gambar
- Transaksi: id, produk_id, jumlah, total, tanggal

Tampilan:
- Gunakan Tailwind CSS dengan tema hijau daun (#38a169) dan kuning keemasan (#f6ad55)
- Dashboard dengan kartu statistik di atas
- Tabel dengan sorting dan filter
- Form input dengan validasi
- Responsive untuk mobile

Simpan data di localStorage dengan key "umkm_keripik_data".
Seed data: 5 produk dengan stok awal 50.`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Slide nav="Prompt Build React" notes={Slide08AIStudioBuildPrompt.notes}>
      <div style={{ padding: '24px 36px', height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(26, 115, 232, 0.12)', border: '1px solid #1a73e8', borderRadius: '20px', color: '#60a5fa', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
              <span>✍️ Formula Build Prompt AI Studio</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--fg)', margin: 0 }}>
              Menyusun Build Prompt Aplikasi React Lengkap dengan Data
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '2px 0 0 0' }}>
              Formula penulisan prompt teknis: Fitur Fungsional, Kamus Data, Styling Tailwind, dan Persistensi LocalStorage.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '6px', background: 'var(--surface)', padding: '4px', borderRadius: '10px', border: '1px solid var(--hair)' }}>
            <button
              onClick={() => setActiveTab('template')}
              style={{
                background: activeTab === 'template' ? '#1a73e8' : 'transparent',
                color: activeTab === 'template' ? '#fff' : 'var(--muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Template Build
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
              Contoh Kasus: Keripik Singkong
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', alignItems: 'start' }}>
          {/* Left Column: Code Box */}
          <Reveal>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--hair)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: activeTab === 'example' ? '#34d399' : '#60a5fa', textTransform: 'uppercase' }}>
                  {activeTab === 'example' ? 'Build Prompt Siap Eksekusi di AI Studio' : 'Template Build Universal'}
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

          {/* Right Column: 4 Essential Build Directives */}
          <Reveal delay={200}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--hair)', borderRadius: '14px', padding: '14px 16px' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#60a5fa', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  4 Instruksi Vital dalam Build Prompt:
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px', color: 'var(--fg)' }}>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', borderLeft: '3px solid #1a73e8' }}>
                    <strong>1. Spesifikasi Operasi CRUD:</strong> Sebutkan secara eksplisit tombol Create, Read, Update, Delete agar tabel interaktif.
                  </div>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', borderLeft: '3px solid #34d399' }}>
                    <strong>2. Persistensi Data LocalStorage:</strong> Perintahkan AI untuk menyimpan data di browser agar tidak hilang saat di-refresh!
                  </div>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', borderLeft: '3px solid #f59e0b' }}>
                    <strong>3. Seed Data Awal:</strong> Minta AI menyiapkan 5 data produk awal (dummy data) agar saat aplikasi terbuka langsung ada isinya.
                  </div>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', borderLeft: '3px solid #ef4444' }}>
                    <strong>4. Threshold Notifikasi:</strong> Tentukan angka batas kritis (misal: alert merah jika stok &lt; 10 pack).
                  </div>
                </div>
              </div>

              <div style={{ background: 'rgba(56, 189, 248, 0.08)', border: '1px solid #38bdf8', borderRadius: '12px', padding: '10px 14px' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#38bdf8', display: 'block' }}>
                  💡 Panduan Praktikum
                </span>
                <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: 'var(--fg)', lineHeight: 1.4 }}>
                  Salin prompt di samping, tempelkan ke tab <strong>Build</strong> di <strong>aistudio.google.com</strong>, dan saksikan Gemini menulis ratusan baris kode React untuk Anda!
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Slide>
  );
}

Slide08AIStudioBuildPrompt.notes = "Dosen memandu cara merancang prompt build aplikasi di AI Studio. Soroti pentingnya instruksi 'Simpan data di localStorage' dan 'Seed data 5 produk awal'. Tanpa instruksi ini, data aplikasi akan ter-reset setiap kali browser ditutup. Trik prompt ini menjamin prototipe siap didemokan kepada pemilik UMKM secara mulus.";
Slide08AIStudioBuildPrompt.nav = "Prompt Build React";
