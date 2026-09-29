import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

interface RubrikItem {
  id: string;
  kriteria: string;
  bobot: number; // percentage
  deskripsi: string;
  defaultScore: number;
}

export default function Slide17RubrikPenilaian() {
  const [scores, setScores] = useState<Record<string, number>>({
    stitch: 5,
    aistudio: 4,
    antigravity: 4,
    umkm: 5,
    dokumen: 4,
  });

  const rubrik: RubrikItem[] = [
    {
      id: 'stitch',
      kriteria: 'Kualitas Desain UI/UX (Google Stitch)',
      bobot: 20,
      deskripsi: 'Kelengkapan 3-4 layar prototipe, konsistensi palet warna, tipografi, dan kemudahan navigasi.',
      defaultScore: 5,
    },
    {
      id: 'aistudio',
      kriteria: 'Fungsionalitas Aplikasi (AI Studio)',
      bobot: 30,
      deskripsi: 'Fitur CRUD produk, input mutasi stok, perhitungan omzet, penyimpanan localStorage, & alert stok.',
      defaultScore: 4,
    },
    {
      id: 'antigravity',
      kriteria: 'Kelengkapan Pipeline (Antigravity)',
      bobot: 20,
      deskripsi: 'Keberadaan file agents.md, skills.md, konfigurasi MCP Stitch, dan keberhasilan eksekusi /startcycle.',
      defaultScore: 4,
    },
    {
      id: 'umkm',
      kriteria: 'Kesesuaian dengan Kebutuhan UMKM',
      bobot: 15,
      deskripsi: 'Solusi memecahkan problem operasional nyata (mencegah kehabisan stok rasa favorit & efisiensi pencatatan).',
      defaultScore: 5,
    },
    {
      id: 'dokumen',
      kriteria: 'Dokumentasi & Presentasi',
      bobot: 15,
      deskripsi: 'Kerapian laporan praktikum, screenshot hasil 3 tools, link live deployment, dan kemampuan demonstrasi.',
      defaultScore: 4,
    },
  ];

  const updateScore = (id: string, val: number) => {
    setScores((prev) => ({ ...prev, [id]: val }));
  };

  // Hitung total skor skala 100
  // Skala skor per kriteria 1-5, dinormalisasi ke 100: (score / 5) * bobot
  const totalScore = Math.round(
    rubrik.reduce((sum, item) => sum + (scores[item.id] / 5) * item.bobot, 0)
  );

  const getPredikat = (score: number) => {
    if (score >= 85) return { grade: 'A (Istimewa)', color: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/40' };
    if (score >= 75) return { grade: 'AB (Sangat Baik)', color: 'text-blue-400 bg-blue-500/20 border-blue-500/40' };
    if (score >= 65) return { grade: 'B (Baik)', color: 'text-amber-400 bg-amber-500/20 border-amber-500/40' };
    return { grade: 'C / Perlu Revisi', color: 'text-red-400 bg-red-500/20 border-red-500/40' };
  };

  const predikat = getPredikat(totalScore);

  return (
    <Slide nav="Rubrik Penilaian" notes={Slide17RubrikPenilaian.notes}>
      <div className="space-y-4 max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-1">
                Bagian 7 — Evaluasi Pembelajaran
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Rubrik Penilaian Praktikum <span className="text-amber-400">Vibe Coding</span>
              </h2>
            </div>
            {/* Live Score Counter */}
            <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-xl border border-white/10 shadow-lg">
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block uppercase font-mono">Simulasi Total Nilai</span>
                <span className="text-xl font-bold text-white font-mono">{totalScore} / 100</span>
              </div>
              <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${predikat.color}`}>
                {predikat.grade}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Rubric Items Table with Interactive Slider / Button */}
        <Reveal delay={100}>
          <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-4 shadow-2xl space-y-3">
            <div className="grid grid-cols-12 text-xs font-semibold text-slate-400 uppercase tracking-wider pb-2 border-b border-white/10 px-2">
              <div className="col-span-5 md:col-span-4">Kriteria Penilaian</div>
              <div className="col-span-2 text-center">Bobot</div>
              <div className="hidden md:block md:col-span-3">Deskripsi Capaian</div>
              <div className="col-span-5 md:col-span-3 text-right">Skor (1 - 5)</div>
            </div>

            <div className="space-y-2">
              {rubrik.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 items-center text-xs p-2.5 rounded-xl bg-slate-950/60 border border-white/5 hover:border-white/15 transition-all"
                >
                  <div className="col-span-5 md:col-span-4 font-semibold text-white">
                    {item.kriteria}
                  </div>
                  <div className="col-span-2 text-center font-mono font-bold text-amber-400">
                    {item.bobot}%
                  </div>
                  <div className="hidden md:block md:col-span-3 text-[11px] text-slate-400">
                    {item.deskripsi}
                  </div>
                  <div className="col-span-5 md:col-span-3 flex justify-end gap-1.5">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={val}
                        onClick={() => updateScore(item.id, val)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                          scores[item.id] === val
                            ? 'bg-amber-500 text-slate-950 shadow-md scale-105'
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-2">
              <span>* Skor 5 = Sangat Memuaskan, 4 = Memuaskan, 3 = Cukup, 2 = Kurang, 1 = Tidak Lengkap</span>
              <span className="text-amber-300 font-semibold">Tugas diunggah ke LMS Universitas beserta tautan GitHub & Live App</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}

Slide17RubrikPenilaian.notes = `
CATATAN DOSEN (SPEAKER NOTES):
- Transparansi Asesmen OBE (Outcome-Based Education):
  1. Mahasiswa memahami sejak awal ekspektasi praktikum yang dinilai bukan sekadar estetika, namun nilai guna bisnis dan kelengkapan pipeline.
  2. Bobot terbesar (30%) dialokasikan pada Fungsionalitas Aplikasi di Google AI Studio karena sistem harus bekerja nyata dan menyelesaikan alur bisnis transaksi/stok.
  3. Kelengkapan Pipeline Antigravity (20%) mengukur adaptasi mahasiswa terhadap paradigma baru AI Agent Management.
- Dosen dapat menggunakan simulasi tombol 1-5 di depan kelas untuk memberikan feedback kepada mahasiswa yang sedang mendemonstrasikan prototipe mereka.
`;
