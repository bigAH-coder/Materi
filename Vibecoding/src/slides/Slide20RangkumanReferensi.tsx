import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

export default function Slide20RangkumanReferensi() {
  const references = [
    { name: 'Google Stitch', url: 'https://stitch.withgoogle.com', desc: 'Platform Desain UI/UX AI Google Labs' },
    { name: 'Google AI Studio', url: 'https://aistudio.google.com', desc: 'Build Mode & Prototyping Full-stack React' },
    { name: 'Antigravity IDE', url: 'https://antigravity.google', desc: 'Autonomous Agentic Development Platform' },
    { name: 'Codelab Vibe Coding', url: 'https://codelabs.developers.google.com', desc: 'Panduan Praktis AI Studio Build Mode' },
    { name: 'Codelab Stitch MCP', url: 'https://codelabs.developers.google.com', desc: 'Integrasi Antigravity + Stitch MCP Server' },
    { name: 'Laudon & Laudon (2012)', url: '#', desc: 'Ch. 13 (Building IS) & Ch. 14 (Project Management)' },
  ];

  return (
    <Slide nav="Rangkuman & Referensi" notes={Slide20RangkumanReferensi.notes}>
      <div className="space-y-4 max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-1">
                Bagian 9 — Penutup & Direktori Belajar
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Rangkuman Praktikum & <span className="text-violet-400">Referensi Resmi</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-xl">
              ✓ Modul Praktikum Lengkap
            </span>
          </div>
        </Reveal>

        {/* Big Key Takeaway Quote */}
        <Reveal delay={100}>
          <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-950/60 via-indigo-950/40 to-slate-900 border border-violet-500/30 shadow-xl">
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
              "Mahasiswa S1 Manajemen semester 5 dapat <strong>membangun aplikasi nyata untuk UMKM</strong> menggunakan pendekatan vibe coding — mulai dari desain UI/UX dengan <strong>Google Stitch</strong>, build aplikasi interaktif dengan <strong>Google AI Studio</strong>, hingga deployment otonom dengan <strong>Antigravity</strong> — <em>tanpa perlu menulis kode pemrograman secara manual</em>."
            </p>
          </div>
        </Reveal>

        {/* 2 Column: Left Action Plan, Right Reference Directory */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Next Action Plan */}
          <div className="md:col-span-5 bg-slate-900/80 border border-white/10 rounded-2xl p-4 flex flex-col justify-between shadow-xl">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <span>🚀</span> Action Plan Tugas Praktikum Mandiri
              </h4>
              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <h5 className="font-semibold text-white">Tentukan Kasus UMKM</h5>
                    <p className="text-slate-400 text-[11px]">Pilih 1 UMKM riil di Gresik/Jawa Timur dan inventarisasi 3 problem bisnisnya.</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <h5 className="font-semibold text-white">Eksekusi Alur 3 Alat</h5>
                    <p className="text-slate-400 text-[11px]">Rancang UI di Stitch, build aplikasi di AI Studio, dan orchestrate di Antigravity.</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-violet-500/20 text-violet-400 font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <h5 className="font-semibold text-white">Kumpulkan Laporan & Demo</h5>
                    <p className="text-slate-400 text-[11px]">Unggah screenshot, link Figma/Stitch, repositori GitHub, & link live web ke LMS.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-white/10 text-[11px] text-slate-400">
              Batas Pengumpulan: 1 Minggu setelah sesi praktikum.
            </div>
          </div>

          {/* References Table */}
          <div className="md:col-span-7 bg-slate-900/80 border border-white/10 rounded-2xl p-4 shadow-xl flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <span>📚</span> Direktori Sumber Daya & Referensi
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {references.map((ref, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-xl bg-slate-950/50 border border-white/5 hover:border-white/15 transition-all text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{ref.name}</span>
                      <span className="text-[10px] text-violet-400 font-mono">LINK ↗</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">{ref.desc}</p>
                    <span className="text-[10px] font-mono text-slate-500 mt-1 block truncate">
                      {ref.url}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Program Studi S1 Manajemen — Universitas Internasional Semen Indonesia</span>
              <span className="text-violet-300 font-semibold">Semester Ganjil 2026</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

Slide20RangkumanReferensi.notes = `
CATATAN DOSEN (SPEAKER NOTES):
- Penutupan Sesi Praktikum: Berikan apresiasi kepada seluruh mahasiswa atas keberhasilan memahami metodologi Vibe Coding.
- Pesan Kunci untuk Lulusan Manajemen:
  "Teknologi berkembang sangat pesat. Seorang manajer masa depan tidak harus menghafal ribuan baris kode sintaks, melainkan harus mampu memanfaatkan kecerdasan buatan sebagai enabler pemecahan masalah bisnis yang menghasilkan nilai tambah ekonomi nyata bagi masyarakat dan UMKM Indonesia."
- Pastikan mahasiswa mencatat seluruh tautan referensi resmi Google Stitch, Google AI Studio, dan Antigravity.
`;
