import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

interface TroubleItem {
  id: string;
  problem: string;
  tool: string;
  symptom: string;
  solution: string;
  quickAction: string;
  color: string;
}

export default function Slide18Troubleshooting() {
  const [selectedId, setSelectedId] = useState<string>('aistudio');

  const troubleshootingList: TroubleItem[] = [
    {
      id: 'stitch',
      problem: 'Stitch Gagal / Hang saat Generate UI',
      tool: 'Google Stitch',
      symptom: 'Layar loading berputar terus tanpa menampilkan kanvas rancangan antarmuka.',
      solution: 'Periksa koneksi internet kampus/pribadi. Jika masih terhenti, beralih ke mode Experimental di kanan atas atau pecah prompt menjadi lebih spesifik tanpa terlalu banyak instruksi kompleks sekaligus.',
      quickAction: 'Ganti mode ke Standard Gemini 2.5 Flash lalu klik Re-generate.',
      color: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
    },
    {
      id: 'aistudio',
      problem: 'AI Studio Error "Failed to Build React Code"',
      tool: 'Google AI Studio',
      symptom: 'Panel kanan menampilkan crash merah atau build bundler gagal terkompilasi.',
      solution: 'Sederhanakan prompt! Jangan meminta 10 fitur sekaligus. Gunakan teknik Modular Prompting: mulai dari tampilan tabel dan form input sederhana terlebih dahulu, baru tambahkan grafik Recharts.',
      quickAction: 'Ketik di chat: "Sederhanakan kode ke Vanilla React Hooks tanpa library eksternal yang berat".',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
    },
    {
      id: 'mcp',
      problem: 'Antigravity Tidak Terhubung ke Google Stitch',
      tool: 'Antigravity IDE',
      symptom: 'Muncul pesan error "MCP server connection refused" atau perintah "List my Stitch projects" kosong.',
      solution: 'Periksa API Key Google Stitch Anda. Pastikan API Key di-paste dengan benar di menu MCP Servers (tekan CMD+E / CTRL+E). Pastikan tidak ada spasi di awal atau akhir string kunci.',
      quickAction: 'Buka Agent Manager → Reload MCP Server Configuration → Restart IDE.',
      color: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
    },
    {
      id: 'preview',
      problem: 'Aplikasi Macet / Layar Putih (Blank Screen)',
      tool: 'Live Preview',
      symptom: 'Komponen tidak merender apa pun saat tombol tertentu diklik.',
      solution: 'Buka Inspect Element di browser (F12) lalu buka tab Console. Cari baris teks berwarna merah, salin teks error tersebut, lalu paste ke chat AI dengan perintah: "Tolong perbaiki bug ini."',
      quickAction: 'Manfaatkan AI Debugging: Salin error stack trace ke prompt.',
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
    },
    {
      id: 'data',
      problem: 'Data Produk & Stok Hilang Saat Refresh',
      tool: 'State / Storage',
      symptom: 'Setelah menekan F5 / Refresh browser, seluruh data transaksi yang baru diinput kembali ke data awal.',
      solution: 'Pastikan kode aplikasi menggunakan persistensi localStorage. Jika AI menggunakan state memori sementara biasa, minta AI secara eksplisit: "Simpan setiap perubahan state ke localStorage."',
      quickAction: 'Prompt: "Pastikan data tersimpan permanen di browser dengan window.localStorage".',
      color: 'border-red-500/40 text-red-400 bg-red-500/10',
    },
  ];

  const current = troubleshootingList.find((item) => item.id === selectedId) || troubleshootingList[0];

  return (
    <Slide nav="Panduan Troubleshooting" notes={Slide18Troubleshooting.notes}>
      <div className="space-y-4 max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20 mb-1">
                Bagian 8 — Kendala & Solusi Praktis
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Panduan <span className="text-red-400">Troubleshooting</span> Praktikum
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-400 max-w-md">
              Daftar kendala teknis yang paling sering dialami mahasiswa dan langkah cepat mengatasinya saat praktikum berlangsung.
            </p>
          </div>
        </Reveal>

        {/* Diagnostic Panel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Problem List */}
          <div className="md:col-span-5 space-y-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Pilih Gejala Masalah
            </p>
            {troubleshootingList.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-2 ${
                  selectedId === item.id
                    ? 'bg-red-950/40 border-red-500/60 shadow-lg shadow-red-950/40 ring-1 ring-red-500/40'
                    : 'bg-slate-900/60 border-white/10 hover:bg-slate-850 hover:border-white/20'
                }`}
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded border font-semibold bg-slate-800 text-slate-300">
                      {item.tool}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white mt-1">{item.problem}</h4>
                </div>
                <span className="text-slate-500 text-xs">➔</span>
              </button>
            ))}
          </div>

          {/* Solution Detail Box */}
          <div className="md:col-span-7 bg-slate-900/90 border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${current.color}`}>
                  {current.tool}
                </span>
                <span className="text-xs text-red-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  Identifikasi Masalah
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2">{current.problem}</h3>

              <div className="p-3 bg-red-950/30 rounded-xl border border-red-500/20 mb-4">
                <span className="text-[10px] uppercase tracking-wider font-bold text-red-400 block mb-1">
                  Gejala yang Terlihat:
                </span>
                <p className="text-xs text-slate-200">{current.symptom}</p>
              </div>

              <div className="p-3 bg-slate-950/70 rounded-xl border border-white/10 mb-4 space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400 block mb-1">
                  Solusi & Langkah Penanganan:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">{current.solution}</p>
              </div>
            </div>

            <div className="p-3 bg-blue-950/30 rounded-xl border border-blue-500/30 flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] text-blue-400 block font-mono font-bold">AKSI CEPAT:</span>
                <span className="text-white font-medium">{current.quickAction}</span>
              </div>
              <span className="text-lg">⚡</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

Slide18Troubleshooting.notes = `
CATATAN DOSEN (SPEAKER NOTES):
- Sikap Mental Mahasiswa: Dalam vibe coding, error bukan berarti kegagalan, melainkan proses iterasi wajar.
- Peran Mahasiswa Manajemen sebagai Problem Solver:
  1. Ketika error terjadi di AI Studio, jangan panik atau menyerah. Manfaatkan fitur "Annotation Mode" atau salin pesan error console ke AI.
  2. Ini melatih mahasiswa manajemen dalam IT Troubleshooting and Escalation (Laudon Bab 14: Implementation and Project Management).
  3. Ingatkan mahasiswa bahwa prompt yang terlalu panjang dan kompleks (bloated prompt) sering kali menjadi penyebab utama kebingungan model AI. Solusinya adalah "Divide and Conquer" (modular prompt).
`;
