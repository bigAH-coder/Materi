import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

export default function Slide19TipsSukses() {
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    google: true,
    stitch: true,
    aistudio: true,
    mcp: false,
    antigravity: false,
    data: true,
  });

  const toggleCheck = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const isReady = completedCount === 6;

  const tips = [
    {
      num: '01',
      title: 'Fokus pada Nilai Bisnis',
      desc: 'Prioritaskan fitur yang memecahkan masalah omzet dan stok UMKM sebelum memikirkan animasi yang rumit.',
      color: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    },
    {
      num: '02',
      title: 'Prompt Bertahap (Modular)',
      desc: 'Bangun fondasi tabel & form terlebih dahulu. Setelah berjalan sempurna, tambahkan fitur grafik atau analitik.',
      color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    },
    {
      num: '03',
      title: 'Gunakan Annotation Mode',
      desc: 'Klik dan tandai elemen visual di preview AI Studio daripada mendeskripsikan koordinat posisi secara panjang lebar.',
      color: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    },
    {
      num: '04',
      title: 'Uji Angka & Logika Data',
      desc: 'Pastikan rumus pengurangan stok dan total harga akurat. Jangan percaya begitu saja pada output pertama AI.',
      color: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    },
    {
      num: '05',
      title: 'Rutin Simpan ke GitHub',
      desc: 'Tekan "Save to GitHub" setiap kali satu fitur berhasil diselesaikan agar Anda memiliki riwayat versi yang aman.',
      color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    },
    {
      num: '06',
      title: 'Berperilaku sebagai PM Sejati',
      desc: 'AI adalah tim desainer & pembuat kode Anda. Anda adalah kapten yang menentukan arah bisnis dan standar mutu.',
      color: 'border-rose-500/30 bg-rose-500/10 text-rose-400',
    },
  ];

  return (
    <Slide nav="Tips Sukses & Checklist" notes={Slide19TipsSukses.notes}>
      <div className="space-y-4 max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-1">
                Mindset & Kesiapan Praktikum
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                6 Tips Sukses & <span className="text-emerald-400">Checklist Kesiapan</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-xl border border-white/10 text-xs">
              <span className="text-slate-400">Kesiapan Lab:</span>
              <span className="font-mono font-bold text-emerald-400">{completedCount} / 6 Siap</span>
            </div>
          </div>
        </Reveal>

        {/* 6 Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${tip.color}`}>
                    TIPS {tip.num}
                  </span>
                  <span className="text-slate-500 text-xs">★</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{tip.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Readiness Checklist */}
        <Reveal delay={100}>
          <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2 border-b border-white/10">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span>📋</span> Checklist Kesiapan Praktikum Mandiri
              </h4>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                isReady
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              }`}>
                {isReady ? '✓ Siap Praktikum Penuh!' : 'Lengkapi checklist sebelum mulai'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
              {[
                { key: 'google', label: '1. Akun Google / Chrome Aktif' },
                { key: 'stitch', label: '2. Google Stitch Terbuka di Tab' },
                { key: 'aistudio', label: '3. Google AI Studio Tab Build Siap' },
                { key: 'mcp', label: '4. API Key Stitch Terkonfigurasi' },
                { key: 'antigravity', label: '5. Antigravity IDE Terpasang' },
                { key: 'data', label: '6. Dokumen Kebutuhan UMKM Siap' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => toggleCheck(item.key)}
                  className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                    checklist[item.key]
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                      : 'bg-slate-950/60 border-white/5 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                    checklist[item.key] ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {checklist[item.key] ? '✓' : ''}
                  </span>
                  <span className="font-medium text-xs">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}

Slide19TipsSukses.notes = `
CATATAN DOSEN (SPEAKER NOTES):
- Penguatan Mental & Kesiapan: Mahasiswa Manajemen sering merasa terintimidasi ketika berhadapan dengan tool pembuatan aplikasi.
- Tekankan Tips #06: "Berperilaku sebagai PM Sejati". Dalam organisasi modern, eksekutif bisnis tidak menulis kode, tetapi mereka harus mampu:
  1. Mendefinisikan masalah dengan presisi tinggi.
  2. Mengarahkan tim (dalam hal ini agen AI) secara efektif.
  3. Memvalidasi apakah sistem yang dihasilkan sesuai dengan sasaran strategis.
- Ajak mahasiswa di ruang kelas mengklik checklist interaktif pada slide ini untuk memastikan seluruh lingkungan praktikum telah siap sebelum praktikum dimulai.
`;
