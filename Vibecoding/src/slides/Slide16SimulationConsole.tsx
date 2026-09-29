import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

interface ConsoleLog {
  agent: string;
  avatar: string;
  color: string;
  role: string;
  message: string;
  detail: string[];
}

export default function Slide16SimulationConsole() {
  const [currentStep, setCurrentStep] = useState<number>(4); // default full view, or interactive
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const logs: ConsoleLog[] = [
    {
      agent: 'User (Mahasiswa Manajemen)',
      avatar: '👨‍💼',
      color: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
      role: 'Project Owner',
      message: '/startcycle Proyek: Aplikasi Inventory UMKM Keripik Singkong "Rasa Nusantara"',
      detail: ['Input Desain: https://stitch.withgoogle.com/p/keripik-gresik-01', 'Target: Live Web App'],
    },
    {
      agent: 'PM Agent',
      avatar: '🤖',
      color: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
      role: 'Product Manager',
      message: 'Menganalisis kebutuhan bisnis UMKM dan menyusun PRD teknis...',
      detail: [
        '✓ Memetakan 3 fitur utama: Katalog Produk, Mutasi Stok, & Laporan Penjualan',
        '✓ Menetapkan struktur data: 5 varian rasa singkong + field harga & stok',
        '✓ Prioritas MVP: Sprint 1 (2 Jam Penyelesaian)',
      ],
    },
    {
      agent: 'Frontend Agent',
      avatar: '💻',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
      role: 'Frontend Developer',
      message: 'Mengimpor komponen dari Google Stitch MCP dan merakit React + Tailwind...',
      detail: [
        '✓ Membuat komponen: DashboardStats.tsx, ProductTable.tsx, StockModal.tsx',
        '✓ Menerapkan palet hijau daun (#38a169) & aksen emas (#f6ad55)',
        '✓ Sinkronisasi state lokal dengan localStorage browser',
      ],
    },
    {
      agent: 'QA Agent',
      avatar: '🧪',
      color: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
      role: 'QA Engineer',
      message: 'Menjalankan unit testing dan pengujian antarmuka otomatis...',
      detail: [
        '✅ Test 1: Input produk 5 varian rasa — PASS',
        '✅ Test 2: Pengurangan stok otomatis saat transaksi — PASS',
        '✅ Test 3: Notifikasi stok merah < 10 pack terpicu — PASS',
      ],
    },
    {
      agent: 'DevOps Agent',
      avatar: '🚀',
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      role: 'DevOps Engineer',
      message: 'Membangun production bundle dan meluncurkan link online aplikasi...',
      detail: [
        '✓ Vite Build: Berhasil dalam 3.12 detik (zero error)',
        '✓ Deployment Cloud Run: https://umkm-keripik-nusantara.app',
        '✓ Status: Live & Siap digunakan langsung oleh pemilik UMKM!',
      ],
    },
  ];

  const handleSimulate = () => {
    setIsRunning(true);
    setCurrentStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step <= 4) {
        setCurrentStep(step);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 900);
  };

  return (
    <Slide nav="Simulasi Konsol Antigravity" notes={Slide16SimulationConsole.notes}>
      <div className="space-y-4 max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-1">
                Visualisasi Log Interaktif
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Simulasi Konsol: <span className="text-violet-400">Interaksi Tim Agen AI</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                disabled={isRunning}
                onClick={handleSimulate}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-lg ${
                  isRunning
                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:brightness-110 shadow-violet-900/50'
                }`}
              >
                {isRunning ? (
                  <>
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                    Menjalankan Siklus...
                  </>
                ) : (
                  <>
                    <span>▶</span> Putar Simulasi Konsol
                  </>
                )}
              </button>
            </div>
          </div>
        </Reveal>

        {/* 2 Column: Left Terminal Log, Right Workspace Tree */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Terminal Console */}
          <div className="md:col-span-8 bg-slate-950/95 border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col justify-between h-[420px]">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-slate-400 ml-2">Antigravity Terminal — Live Agent Stream</span>
              </div>
              <span className="text-[10px] font-mono text-violet-400">Step {currentStep + 1} of 5</span>
            </div>

            <div className="overflow-y-auto space-y-3 pr-1 py-2 font-mono text-xs flex-1">
              {logs.slice(0, currentStep + 1).map((log, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 transition-all animate-fadeIn"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span>{log.avatar}</span>
                    <span className="font-bold text-slate-200">{log.agent}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded border ${log.color}`}>
                      {log.role}
                    </span>
                  </div>
                  <p className="text-slate-300 pl-6 text-xs">{log.message}</p>
                  <div className="pl-6 mt-1.5 space-y-0.5 text-[11px] text-slate-400">
                    {log.detail.map((d, dIdx) => (
                      <div key={dIdx} className="text-emerald-400/90 font-sans">
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500">
              <span>● Agen terhubung via WebSocket</span>
              <span className="text-emerald-400 font-mono">Status: Pipeline Active</span>
            </div>
          </div>

          {/* Right: Workspace Directory Tree */}
          <div className="md:col-span-4 bg-slate-900/80 border border-white/10 rounded-2xl p-4 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-2 border-b border-white/10 mb-3">
                <span className="text-sm">📁</span>
                <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Workspace Structure
                </span>
              </div>

              <div className="font-mono text-xs text-slate-300 space-y-1 bg-slate-950/60 p-3 rounded-xl border border-white/5">
                <div className="text-violet-400 font-bold">📂 umkm-keripik-nusantara/</div>
                <div className="pl-3 text-slate-400">├── 📁 .agents/</div>
                <div className="pl-6 text-emerald-300">├── agents.md (Tim AI)</div>
                <div className="pl-6 text-slate-400">└── 📁 workflows/</div>
                <div className="pl-3 text-slate-400">├── 📁 skills/</div>
                <div className="pl-6 text-emerald-300">└── skills.md (Kemampuan)</div>
                <div className="pl-3 text-slate-400">├── 📁 src/</div>
                <div className="pl-6 text-slate-400">├── 📁 components/</div>
                <div className="pl-9 text-slate-300">├── DashboardStats.tsx</div>
                <div className="pl-9 text-slate-300">├── ProductTable.tsx</div>
                <div className="pl-9 text-slate-300">└── StockModal.tsx</div>
                <div className="pl-6 text-cyan-300">└── App.tsx</div>
                <div className="pl-3 text-amber-300">└── package.json</div>
              </div>
            </div>

            <div className="mt-3 p-3 bg-violet-950/30 rounded-xl border border-violet-500/20 text-xs text-violet-300">
              💡 <strong>Insight:</strong> File <code>agents.md</code> dan <code>skills.md</code> menjadi otak panduan bagi sistem automasi.
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

Slide16SimulationConsole.notes = `
CATATAN DOSEN (SPEAKER NOTES):
- Tujuan Slide: Menghilangkan rasa takut atau kebingungan mahasiswa mengenai apa yang terjadi di balik layar ketika perintah /startcycle diketik.
- Tekankan konsep pembagian kerja (Division of Labor - Adam Smith & Henri Fayol) yang diterapkan pada agen kecerdasan buatan:
  1. Product Manager bertindak sebagai perumus kebutuhan bisnis.
  2. Frontend Developer bertindak sebagai eksekutor antarmuka.
  3. QA Engineer bertindak sebagai pengendali mutu (Quality Assurance).
  4. DevOps bertindak sebagai penyalur sistem ke dunia nyata.
- Dosen dapat mengklik tombol "Putar Simulasi Konsol" untuk memperlihatkan animasi urutan kerja tim agen AI secara langsung kepada mahasiswa di kelas.
`;
