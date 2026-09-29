import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

export default function Slide14StudiKasusKeripik() {
  const [activeTab, setActiveTab] = useState<'profil' | 'masalah' | 'solusi'>('profil');

  const varianRasa = [
    { nama: 'Original Gurih', harga: 'Rp 10.000', stokAwal: 50, color: 'border-amber-400/40 bg-amber-500/10' },
    { nama: 'Pedas Manis', harga: 'Rp 12.000', stokAwal: 35, color: 'border-red-400/40 bg-red-500/10' },
    { nama: 'Balado Merah', harga: 'Rp 12.000', stokAwal: 40, color: 'border-orange-400/40 bg-orange-500/10' },
    { nama: 'Keju Spesial', harga: 'Rp 15.000', stokAwal: 25, color: 'border-yellow-400/40 bg-yellow-500/10' },
    { nama: 'Rumput Laut', harga: 'Rp 15.000', stokAwal: 20, color: 'border-emerald-400/40 bg-emerald-500/10' },
  ];

  return (
    <Slide nav="Studi Kasus UMKM Gresik" notes={Slide14StudiKasusKeripik.notes}>
      <div className="space-y-4 max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-1">
                Bagian 6 — Implementasi Nyata Kasus UMKM
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                UMKM Keripik Singkong <span className="text-emerald-400">"Rasa Nusantara"</span>
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('profil')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'profil'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                1. Profil Usaha
              </button>
              <button
                onClick={() => setActiveTab('masalah')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'masalah'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                2. Masalah Operasional
              </button>
              <button
                onClick={() => setActiveTab('solusi')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'solusi'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                3. Arsitektur Solusi Digital
              </button>
            </div>
          </div>
        </Reveal>

        {/* Tab 1: Profil */}
        {activeTab === 'profil' && (
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">Identitas Usaha</span>
                  <h3 className="text-xl font-bold text-white mt-1">Keripik Singkong Rasa Nusantara</h3>
                  <p className="text-xs text-slate-300 mt-2">
                    Produsen camilan olahan singkong lokal berbasis di Kabupaten Gresik, Jawa Timur yang mendistribusikan produk ke toko oleh-oleh dan warung mitra.
                  </p>

                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Skala Usaha:</span>
                      <span className="text-slate-200 font-medium">Usaha Mikro (UMKM)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Kapasitas Produksi:</span>
                      <span className="text-slate-200 font-medium">200-300 bungkus/hari</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Model Bisnis:</span>
                      <span className="text-slate-200 font-medium">B2C & Konsinyasi Toko</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400">Sistem Eksisting:</span>
                      <span className="text-red-400 font-medium">Buku Catatan Kertas Manual</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-emerald-950/40 rounded-xl border border-emerald-500/20 text-xs text-emerald-300">
                  💡 <strong>Konteks Manajemen:</strong> Representasi nyata dari 65 juta UMKM di Indonesia yang membutuhkan digitalisasi tanpa biaya lisensi mahal.
                </div>
              </div>

              {/* 5 Varian Produk Grid */}
              <div className="md:col-span-8 bg-slate-900/60 border border-white/10 rounded-2xl p-5">
                <h4 className="text-sm font-bold text-white mb-3 flex items-center justify-between">
                  <span>5 Varian Rasa Produk yang Dikelola</span>
                  <span className="text-xs font-normal text-slate-400">Stok Awal Prototipe: 170 Pack</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {varianRasa.map((item, idx) => (
                    <div key={idx} className={`p-3 rounded-xl border ${item.color} flex flex-col justify-between`}>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-mono text-slate-400">SKU-00{idx + 1}</span>
                          <span className="text-xs font-bold text-white">{item.harga}</span>
                        </div>
                        <h5 className="text-sm font-semibold text-white">{item.nama}</h5>
                      </div>
                      <div className="mt-3 pt-2 border-t border-white/10 flex justify-between text-xs text-slate-300">
                        <span>Stok Siap:</span>
                        <span className="font-mono font-bold text-emerald-400">{item.stokAwal} pack</span>
                      </div>
                    </div>
                  ))}
                  <div className="p-3 rounded-xl border border-dashed border-white/20 bg-slate-800/30 flex flex-col items-center justify-center text-center">
                    <span className="text-xl">➕</span>
                    <span className="text-xs font-medium text-slate-300 mt-1">Form Input Produk Baru</span>
                    <span className="text-[10px] text-slate-500">Disediakan pada aplikasi</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Tab 2: Masalah */}
        {activeTab === 'masalah' && (
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-950/20 border border-red-500/30 rounded-2xl p-5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center text-xl font-bold">
                  📝
                </div>
                <h4 className="text-base font-bold text-white">1. Pencatatan Kertas Rentan Hilang</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Semua transaksi dicatat di buku tulis nota fisik. Nota basah karena minyak gorengan, sobek, atau terselip sehingga rekapitulasi penjualan akhir bulan memakan waktu hingga 3 hari.
                </p>
                <div className="text-[11px] font-mono text-red-400 bg-red-950/40 p-2 rounded-lg border border-red-500/20">
                  Dampak: Selisih kas harian dan inkonsistensi data persediaan fisik.
                </div>
              </div>

              <div className="bg-amber-950/20 border border-amber-500/30 rounded-2xl p-5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-bold">
                  📉
                </div>
                <h4 className="text-base font-bold text-white">2. Sering Terjadi Stockout Rasa Favorit</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pemilik usaha tidak mengetahui sisa stok secara real-time. Varian Balado dan Pedas Manis sering habis mendadak saat pembeli datang dalam jumlah banyak, mengakibatkan lost sales.
                </p>
                <div className="text-[11px] font-mono text-amber-400 bg-amber-950/40 p-2 rounded-lg border border-amber-500/20">
                  Dampak: Kehilangan potensi omzet hingga 20-30% setiap akhir pekan.
                </div>
              </div>

              <div className="bg-blue-950/20 border border-blue-500/30 rounded-2xl p-5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl font-bold">
                  📊
                </div>
                <h4 className="text-base font-bold text-white">3. Evaluasi Produk Lambat & Buta Tren</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pemilik tidak memiliki grafik visual tren penjualan per varian rasa. Akibatnya, produksi singkong varian kurang laku tetap dibuat berlebihan dan berakhir kedaluwarsa.
                </p>
                <div className="text-[11px] font-mono text-blue-400 bg-blue-950/40 p-2 rounded-lg border border-blue-500/20">
                  Dampak: Modal kerja mengendap pada stok lambat laku (dead stock).
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Tab 3: Solusi */}
        {activeTab === 'solusi' && (
          <Reveal>
            <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span>🚀</span> Solusi Aplikasi Inventory Berbasis Vibe Coding 3 Tahap
                </h4>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Target Waktu Bangun: &lt; 2 Jam Praktikum
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-slate-950/60 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-400 uppercase tracking-wider text-[10px]">Fitur 1</span>
                  <h5 className="font-semibold text-white text-sm">Dashboard & Alert Stok Kritis</h5>
                  <p className="text-slate-300">
                    Kartu metrik menampilkan total varian, omzet harian, dan badge merah menyala otomatis ketika stok &lt; 10 bungkus.
                  </p>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-400 uppercase tracking-wider text-[10px]">Fitur 2</span>
                  <h5 className="font-semibold text-white text-sm">Manajemen Mutasi Masuk/Keluar</h5>
                  <p className="text-slate-300">
                    Input 2 klik untuk pengurangan stok saat kasir bertransaksi atau penambahan stok saat baru selesai menggoreng.
                  </p>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-400 uppercase tracking-wider text-[10px]">Fitur 3</span>
                  <h5 className="font-semibold text-white text-sm">Laporan Grafik Tren Penjualan</h5>
                  <p className="text-slate-300">
                    Grafik bar chart 7 hari interaktif yang memperlihatkan varian rasa terlaris agar perencanaan bahan baku singkong akurat.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </Slide>
  );
}

Slide14StudiKasusKeripik.notes = `
CATATAN DOSEN (SPEAKER NOTES):
- Relevansi Studi Kasus: UMKM Keripik Singkong di Gresik adalah contoh kasus nyata yang dekat dengan lingkungan mahasiswa UISI di Gresik dan Jawa Timur.
- Analisis Teori Manajemen (Laudon Bab 13 & 14):
  1. Identifikasi Masalah Organisasional: Bukan sekadar masalah ketiadaan software, melainkan proses bisnis yang lambat (high transaction costs) dan data opacity.
  2. Justifikasi Sistem Informasi: Aplikasi ini memberikan keunggulan kompetitif (Porter's Five Forces) melalui operational excellence dan customer intimacy karena produk favorit tidak pernah kehabisan stok.
- Ajak mahasiswa memperhatikan bagaimana satu dataset sederhana (5 varian keripik) dijadikan studi acuan di Google Stitch, Google AI Studio, hingga Antigravity.
`;
