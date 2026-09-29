import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

export default function Slide15PromptComparison() {
  const [selectedTool, setSelectedTool] = useState<'stitch' | 'aistudio' | 'antigravity'>('stitch');
  const [copied, setCopied] = useState<boolean>(false);

  const prompts = {
    stitch: {
      tool: 'Google Stitch (Desain UI/UX)',
      focus: 'Fokus Visual, Tata Letak, Palet Warna, dan Komponen Interaksi',
      color: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
      btnActive: 'bg-blue-600 text-white',
      content: `Desain aplikasi web inventory untuk UMKM Keripik Singkong "Rasa Nusantara" di Gresik yang memproduksi keripik dengan 5 varian rasa: Original, Pedas, Balado, Keju, dan Rumput Laut.

Halaman yang dibutuhkan:
1. Dashboard — ringkasan stok total, penjualan hari ini, produk terlaris, dan notifikasi stok rendah
2. Manajemen Produk — tabel produk dengan foto, nama, varian, harga, stok, tombol edit dan hapus, serta form tambah produk
3. Manajemen Stok — form input stok masuk/keluar, riwayat perubahan stok
4. Laporan Penjualan — tabel transaksi dengan filter tanggal, grafik penjualan 7 hari terakhir, total pendapatan

Gaya visual:
- Warna: hijau daun (#38a169) untuk primary, kuning keemasan (#f6ad55) untuk accent, putih untuk background
- Font: Plus Jakarta Sans untuk heading, Inter untuk body
- Suasana: hangat, tradisional, tetapi modern dan bersih
- Border radius: 12px untuk card, 8px untuk button

Elemen wajib:
- Sidebar navigation dengan icon
- Kartu statistik dengan icon dan angka besar
- Tabel dengan zebra striping
- Form input dengan label dan placeholder
- Grafik batang untuk penjualan mingguan
- Badge warna merah untuk stok rendah`,
    },
    aistudio: {
      tool: 'Google AI Studio (Build React App)',
      focus: 'Fokus Logika State, CRUD Data, Validasi Form, dan Penyimpanan Lokal',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
      btnActive: 'bg-emerald-600 text-white',
      content: `Bangun aplikasi web React untuk UMKM Keripik Singkong "Rasa Nusantara".

Fitur utama:
1. Manajemen Produk — CRUD produk dengan field: id, nama, varian (dropdown: Original, Pedas, Balado, Keju, Rumput Laut), harga, stok, gambar (URL)
2. Manajemen Stok — input stok masuk dan keluar, update stok otomatis, riwayat perubahan
3. Laporan Penjualan — catat transaksi (pilih produk, jumlah, total otomatis), tampilkan total penjualan hari ini, grafik penjualan 7 hari terakhir
4. Notifikasi — alert jika stok produk < 10

Data yang perlu dikelola:
- Produk: id, nama, varian, harga, stok, gambar
- Transaksi: id, produk_id, jumlah, total, tanggal, tipe (masuk/keluar)

Tampilan:
- Gunakan Tailwind CSS
- Warna primary: hijau daun (#38a169)
- Warna accent: kuning keemasan (#f6ad55)
- Dashboard dengan 4 kartu statistik di atas
- Tabel dengan sorting dan search
- Grafik dengan Recharts (bar chart untuk penjualan)
- Form dengan validasi (required, min value)
- Responsive: sidebar collapse di mobile

Simpan data di localStorage dengan key "umkm_keripik_data".
Seed data: 5 produk dengan stok awal 50.`,
    },
    antigravity: {
      tool: 'Antigravity (Orkestrasi Agen Otonom)',
      focus: 'Fokus Pipeline End-to-End: PM Spec, Coding, Testing, dan Cloud Run Deployment',
      color: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
      btnActive: 'bg-purple-600 text-white',
      content: `/startcycle

Proyek: Aplikasi Inventory UMKM Keripik Singkong "Rasa Nusantara"
Desain: [paste link Stitch project]
Kode: [paste link GitHub repository dari AI Studio]
Target: Aplikasi web yang bisa diakses pemilik UMKM melalui browser

Requirement:
- Aplikasi harus bisa diakses secara online
- Data harus tersimpan (gunakan Supabase atau Firebase)
- Tampilan harus responsive untuk tablet dan smartphone
- Login sederhana untuk pemilik UMKM

Tim AI:
- PM: Analisis kebutuhan dan buat spesifikasi teknis
- Frontend: Implementasi UI dari desain Stitch
- Backend: Setup database dan API
- QA: Testing semua fitur
- DevOps: Deploy ke Cloud Run`,
    },
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const current = prompts[selectedTool];

  return (
    <Slide nav="Matriks Komparasi Prompt" notes={Slide15PromptComparison.notes}>
      <div className="space-y-4 max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-1">
                Sintesis Prompt Engineering
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Matriks Prompt 3 Tahap <span className="text-blue-400">Side-by-Side</span>
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedTool('stitch')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedTool === 'stitch' ? prompts.stitch.btnActive : 'bg-slate-800 text-slate-300'
                }`}
              >
                1. Stitch (Desain)
              </button>
              <button
                onClick={() => setSelectedTool('aistudio')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedTool === 'aistudio' ? prompts.aistudio.btnActive : 'bg-slate-800 text-slate-300'
                }`}
              >
                2. AI Studio (Build)
              </button>
              <button
                onClick={() => setSelectedTool('antigravity')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedTool === 'antigravity' ? prompts.antigravity.btnActive : 'bg-slate-800 text-slate-300'
                }`}
              >
                3. Antigravity (Deploy)
              </button>
            </div>
          </div>
        </Reveal>

        {/* Prompt Content Card */}
        <Reveal delay={100}>
          <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-5 shadow-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-white/10">
              <div>
                <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold border ${current.color}`}>
                  {current.tool}
                </span>
                <p className="text-xs text-slate-400 mt-1">{current.focus}</p>
              </div>
              <button
                onClick={() => handleCopy(current.content)}
                className="self-start sm:self-auto px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 transition-all flex items-center gap-1.5"
              >
                {copied ? '✓ Prompt Disalin!' : '📋 Salin Prompt Ini'}
              </button>
            </div>

            <pre className="text-xs font-mono text-slate-200 bg-slate-950/80 p-4 rounded-xl border border-white/5 max-h-[360px] overflow-y-auto whitespace-pre-wrap leading-relaxed shadow-inner">
              {current.content}
            </pre>

            {/* Quick Annotation */}
            <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span><strong>Stitch:</strong> Deskripsi UI, Palet warna & font</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span><strong>AI Studio:</strong> Logika CRUD, State & LocalStorage</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span><strong>Antigravity:</strong> Delegasi peran agen AI & target cloud</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}

Slide15PromptComparison.notes = `
CATATAN DOSEN (SPEAKER NOTES):
- Kunci Keberhasilan Vibe Coding: Presisi dalam menyusun prompt (Prompt Engineering for Business).
- Bandingkan 3 level prompt:
  1. Prompt Stitch berfokus pada estetika visual, komponen UI, tata letak, dan suasana psikologi warna (#38a169 hijau = segar/alami, #f6ad55 kuning = renyah/keemasan).
  2. Prompt AI Studio berfokus pada data structure (entitas, tipe data), state behavior (CRUD, localStorage, seed data), dan responsivitas.
  3. Prompt Antigravity berfokus pada governance, pipeline orkestrasi tim, dan arsitektur deployment (Laudon Bab 14: Managing Implementation).
- Tekankan kepada mahasiswa untuk menyalin (copy) ketiga prompt ini saat praktikum mandiri.
`;
