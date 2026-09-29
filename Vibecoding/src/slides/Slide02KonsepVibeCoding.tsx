import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

export default function Slide02KonsepVibeCoding() {
  const [viewMode, setViewMode] = useState<'manager' | 'comparison'>('manager');

  return (
    <Slide nav="Konsep Vibe Coding" notes={Slide02KonsepVibeCoding.notes}>
      <div style={{ padding: '24px 36px', height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid #6366f1', borderRadius: '20px', color: '#818cf8', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
              <span>💡 Bagian 1 • Paradigma Baru Rekayasa Sistem</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--fg)', margin: 0 }}>
              Apa Itu Vibe Coding? Dari Bahasa Natural Menjadi Perangkat Lunak
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '2px 0 0 0' }}>
              Mengubah deskripsi kebutuhan bisnis (vibe) menjadi kode fungsional tanpa menghafal sintaks pemrograman.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '6px', background: 'var(--surface)', padding: '4px', borderRadius: '10px', border: '1px solid var(--hair)' }}>
            <button
              onClick={() => setViewMode('manager')}
              style={{
                background: viewMode === 'manager' ? '#6366f1' : 'transparent',
                color: viewMode === 'manager' ? '#fff' : 'var(--muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Analogi Manajer
            </button>
            <button
              onClick={() => setViewMode('comparison')}
              style={{
                background: viewMode === 'comparison' ? '#38bdf8' : 'transparent',
                color: viewMode === 'comparison' ? '#000' : 'var(--muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Komparasi Koding vs Vibe
            </button>
          </div>
        </div>

        {/* Content View */}
        {viewMode === 'manager' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', alignItems: 'start' }}>
            {/* Left: Analogi Box & Definition */}
            <Reveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--hair)', borderRadius: '16px', padding: '18px' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 800, color: '#818cf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>🧠</span> Definisi Vibe Coding
                  </h4>
                  <p style={{ margin: 0, fontSize: '12px', color: 'var(--fg)', lineHeight: 1.6 }}>
                    Vibe coding adalah pendekatan pengembangan aplikasi di mana pengguna mendeskripsikan apa yang diinginkan dalam <strong>bahasa natural (Bahasa Indonesia atau Inggris)</strong>, dan AI menuliskan kode program secara langsung. Anda tidak perlu menghafal tag HTML, CSS flexbox, atau fungsi database — cukup jelaskan suasana, tata letak, dan alur kerja bisnis yang Anda inginkan.
                  </p>
                </div>

                {/* Manager Analogy Quote */}
                <div style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(56, 189, 248, 0.1) 100%)', border: '1px solid #6366f1', borderRadius: '16px', padding: '16px 18px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#a5b4fc', textTransform: 'uppercase', marginBottom: '4px' }}>
                    👔 Analogi untuk Mahasiswa Manajemen:
                  </div>
                  <blockquote style={{ margin: 0, fontSize: '12px', color: 'var(--fg)', fontStyle: 'italic', lineHeight: 1.5 }}>
                    "Bayangkan Anda adalah seorang manajer yang memberikan <strong>brief proyek</strong> kepada tim desainer dan pengembang software. Anda tidak perlu bisa melukis atau coding — Anda cukup menjelaskan kebutuhan bisnis, batasan anggaran, dan target pengguna. Dalam vibe coding, <strong>AI bertindak sebagai tim desainer dan developer otonom Anda</strong>."
                  </blockquote>
                </div>
              </div>
            </Reveal>

            {/* Right: Mengapa Penting bagi Mahasiswa Manajemen */}
            <Reveal delay={200}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--hair)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase' }}>
                  Mengapa Ini Sangat Penting bagi S1 Manajemen?
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ padding: '10px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '3px solid #34d399' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--fg)' }}>1. Menjawab Kebutuhan Riil UMKM Indonesia</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px', lineHeight: 1.4 }}>
                      Jutaan UMKM membutuhkan digitalisasi pencatatan stok dan kasir, namun terkendala tingginya tarif jasa konsultan IT.
                    </div>
                  </div>

                  <div style={{ padding: '10px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '3px solid #38bdf8' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--fg)' }}>2. Menghapus Hambatan Teknis (No Coding Barrier)</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px', lineHeight: 1.4 }}>
                      Mahasiswa manajemen tidak perlu menempuh 4 tahun kuliah ilmu komputer hanya untuk membuat prototipe Minimum Viable Product (MVP).
                    </div>
                  </div>

                  <div style={{ padding: '10px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '3px solid #818cf8' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--fg)' }}>3. Fokus pada Masalah Bisnis (Problem-First)</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px', lineHeight: 1.4 }}>
                      Energi mahasiswa difokuskan untuk menganalisis titik kebocoran kas, relasi pelanggan, dan efisiensi rantai pasok UMKM.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        ) : (
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--hair)', borderRadius: '16px', padding: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '20px' }}>⌨️</span>
                  <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: 'var(--muted)' }}>
                    Koding Tradisional (Syntax-Centric)
                  </h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px', color: 'var(--fg)' }}>
                  <div style={{ padding: '8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                    <strong>Fokus:</strong> Sintaks bahasa (semicolon, kurung kurawal, importing libraries).
                  </div>
                  <div style={{ padding: '8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                    <strong>Hambatan:</strong> Menghabiskan 80% waktu membetulkan pesan error/bug kompilasi.
                  </div>
                  <div style={{ padding: '8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                    <strong>Kecepatan:</strong> Butuh berminggu-minggu hanya untuk menyusun form login dan tabel sederhana.
                  </div>
                </div>
              </div>

              <div style={{ background: 'rgba(56, 189, 248, 0.08)', border: '2px solid #38bdf8', borderRadius: '16px', padding: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '20px' }}>✨</span>
                  <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#38bdf8' }}>
                    Vibe Coding (Intent & Business-Centric)
                  </h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px', color: 'var(--fg)' }}>
                  <div style={{ padding: '8px', background: 'rgba(255,255,255,0.04)', borderRadius: '6px', borderLeft: '3px solid #38bdf8' }}>
                    <strong>Fokus:</strong> Niat bisnis (*intent*), kenyamanan pengguna, dan visualisasi operasional.
                  </div>
                  <div style={{ padding: '8px', background: 'rgba(255,255,255,0.04)', borderRadius: '6px', borderLeft: '3px solid #38bdf8' }}>
                    <strong>Eksekusi:</strong> Menulis prompt seperti instruksi rapat: "Buat form input stok dengan alert merah jika &lt; 10".
                  </div>
                  <div style={{ padding: '8px', background: 'rgba(255,255,255,0.04)', borderRadius: '6px', borderLeft: '3px solid #38bdf8' }}>
                    <strong>Kecepatan:</strong> Prototipe interaktif siap dites langsung di browser dalam hitungan menit!
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </Slide>
  );
}

Slide02KonsepVibeCoding.notes = "Dosen menguraikan filosofi vibe coding. Tekankan analogi manajer: mahasiswa manajemen dipersiapkan sebagai pengambil keputusan bisnis, bukan kuli ketik kode. Vibe coding memberdayakan mahasiswa untuk menjadi manajer produk yang tangkas: memberikan arahan yang tepat kepada AI agar menghasilkan aplikasi bernilai bisnis bagi UMKM.";
Slide02KonsepVibeCoding.nav = "Konsep Vibe Coding";
