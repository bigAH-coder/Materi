import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

interface PipelineStep {
  id: string;
  role: string;
  badgeColor: string;
  title: string;
  desc: string;
  output: string[];
  status: 'COMPLETED' | 'IN_PROGRESS' | 'PENDING';
}

export default function Slide13WorkflowStartCycle() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const startCyclePrompt = `/startcycle

Proyek: Aplikasi Inventory UMKM Keripik Singkong "Rasa Nusantara"
Desain: https://stitch.withgoogle.com/p/keripik-gresik-01
Fitur: Manajemen produk, manajemen stok, laporan penjualan
Target: Aplikasi web yang bisa diakses pemilik UMKM via browser`;

  const pipelineSteps: PipelineStep[] = [
    {
      id: 'step1',
      role: 'Product Manager Agent',
      badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
      title: '1. PM Analysis & Specification',
      desc: 'Menganalisis kebutuhan UMKM dari brief input, mendefinisikan user story, dan menyusun PRD (Product Requirement Document) mini.',
      output: [
        '3 Fitur Utama terdefinisi (Katalog, Mutasi Stok, Rekap Transaksi)',
        '2 Entitas Data (Produk, Log Mutasi) dengan skema field jelas',
        'Prioritas MVP 1 minggu untuk efisiensi eksekusi',
      ],
      status: 'COMPLETED',
    },
    {
      id: 'step2',
      role: 'Frontend Dev Agent',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
      title: '2. Frontend Implementation',
      desc: 'Mengambil design token & komponen dari Google Stitch via MCP server, mengubahnya menjadi komponen React + Tailwind CSS modular.',
      output: [
        '5 Komponen UI: Navbar, StatCards, ProductTable, StockModal, SalesChart',
        'State management terpadu menggunakan React Hooks (useState, useEffect)',
        'Penyimpanan lokal di browser via localStorage sync',
      ],
      status: 'COMPLETED',
    },
    {
      id: 'step3',
      role: 'QA Engineer Agent',
      badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/40',
      title: '3. QA Testing & Validation',
      desc: 'Menjalankan unit test & browser-based testing otomatis untuk memastikan logika kalkulasi laba dan mutasi stok tidak menghasilkan bug.',
      output: [
        '✅ Test 1: Tambah produk 5 varian rasa (PASS)',
        '✅ Test 2: Input stok masuk & keluar realtime (PASS)',
        '✅ Test 3: Notifikasi stok merah < 10 pack terpicu (PASS)',
      ],
      status: 'COMPLETED',
    },
    {
      id: 'step4',
      role: 'DevOps Engineer Agent',
      badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
      title: '4. Cloud Build & Deployment',
      desc: 'Mengemas bundle produksi, menjalankan optimasi aset, dan meluncurkan link live URL cloud agar UMKM bisa langsung mengaksesnya.',
      output: [
        'Production Bundle: Vite build berhasil dalam 3.2 detik',
        'Hosting: Live di https://rasa-nusantara.app (Cloud Run / Vercel)',
        'HTTPS SSL Certificate aktif otomatis untuk keamanan transaksi',
      ],
      status: 'COMPLETED',
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(startCyclePrompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Slide nav="Eksekusi /startcycle" notes={Slide13WorkflowStartCycle.notes}>
      <div className="space-y-4 max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-1">
                Tahap 3 — Eksekusi Pipeline Antigravity
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Menjalankan Pipeline Otonom: <span className="text-violet-400 font-mono">/startcycle</span>
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-400 max-w-md">
              Satu perintah konsol mengorkestrasi 4 agen AI bekerja berurutan mulai dari analisis spesifikasi hingga deployment publik.
            </p>
          </div>
        </Reveal>

        {/* Top: Trigger Prompt Box */}
        <Reveal delay={100}>
          <div className="bg-slate-900/90 border border-violet-500/30 rounded-xl p-4 shadow-xl relative backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-slate-400 ml-2">Antigravity Agent Chat Prompt</span>
              </div>
              <button
                onClick={handleCopy}
                className="px-3 py-1 text-xs font-medium rounded-lg bg-violet-600/30 hover:bg-violet-600/50 text-violet-300 border border-violet-500/40 transition-all flex items-center gap-1.5"
              >
                {isCopied ? '✓ Tersalin!' : '📋 Salin Prompt'}
              </button>
            </div>
            <pre className="text-xs font-mono text-slate-200 bg-slate-950/80 p-3 rounded-lg border border-white/5 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {startCyclePrompt}
            </pre>
          </div>
        </Reveal>

        {/* Interactive Step Explorer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Step Selector List */}
          <div className="md:col-span-5 space-y-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Tahapan Eksekusi Otomatis
            </p>
            {pipelineSteps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                  activeStep === idx
                    ? 'bg-violet-950/40 border-violet-500/60 shadow-lg shadow-violet-950/50 ring-1 ring-violet-500/40'
                    : 'bg-slate-900/50 border-white/10 hover:bg-slate-850 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                    activeStep === idx ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                    <span className="text-xs text-slate-400">{step.role}</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  READY
                </span>
              </button>
            ))}
          </div>

          {/* Step Detail Display */}
          <div className="md:col-span-7 bg-slate-900/80 border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold border ${pipelineSteps[activeStep].badgeColor}`}>
                  {pipelineSteps[activeStep].role}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Status: Pipeline Berhasil
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {pipelineSteps[activeStep].title}
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {pipelineSteps[activeStep].desc}
              </p>

              <div className="bg-slate-950/70 rounded-xl p-3 border border-white/5 space-y-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Hasil / Log Keluaran Agen:
                </p>
                <ul className="space-y-1.5">
                  {pipelineSteps[activeStep].output.map((out, oIdx) => (
                    <li key={oIdx} className="text-xs font-mono text-slate-200 flex items-start gap-2">
                      <span className="text-violet-400 mt-0.5">▸</span>
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Durasi Rata-rata per Siklus: ~90-180 detik</span>
              <span className="text-violet-300 font-semibold">Tersinkron dengan GitHub & MCP</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

Slide13WorkflowStartCycle.notes = `
CATATAN DOSEN (SPEAKER NOTES):
- Fokus Pembelajaran: Memberi pemahaman kepada mahasiswa manajemen mengenai automasi workflow pengembangan perangkat lunak modern (Laudon & Laudon Bab 14: Project Management - Otomasi Pengendalian Proyek).
- Dalam metodologi tradisional, koordinasi antara PM, Frontend Dev, QA tester, dan DevOps memerlukan rapat harian (daily standup), sprint planning, dan alokasi waktu berhari-hari.
- Dalam Antigravity, perintah /startcycle menjalankan seluruh tahapan tersebut secara sekuensial dan otonom. Setiap agen menjalankan tugas berdasarkan instruksi yang telah didefinisikan pada agents.md dan kemampuan di skills.md.
- Tunjukkan kepada mahasiswa bagaimana mahasiswa manajemen tetap memegang kendali strategis: input brief bisnis menentukan kualitas hasil output seluruh tim AI.
`;
