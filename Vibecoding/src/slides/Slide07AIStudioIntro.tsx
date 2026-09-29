import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

export default function Slide07AIStudioIntro() {
  const [activeTab, setActiveTab] = useState<'build' | 'gemini'>('build');

  return (
    <Slide nav="Intro AI Studio" notes={Slide07AIStudioIntro.notes}>
      <div style={{ padding: '24px 36px', height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(26, 115, 232, 0.12)', border: '1px solid #1a73e8', borderRadius: '20px', color: '#60a5fa', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
              <span>🧠 Tahap 2 • Full-Stack App Prototyping</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--fg)', margin: 0 }}>
              Tahap 2: Build Aplikasi Web dengan Google AI Studio
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '2px 0 0 0' }}>
              Memanfaatkan Build Mode pada aistudio.google.com untuk mengubah spesifikasi manajerial menjadi aplikasi React utuh.
            </p>
          </div>

          <div style={{ background: 'var(--surface)', padding: '6px 14px', borderRadius: '10px', border: '1px solid var(--hair)' }}>
            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Portal Web:</span>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#60a5fa', marginLeft: '6px' }}>
              aistudio.google.com
            </span>
          </div>
        </div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', alignItems: 'start' }}>
          {/* Left Column: What is AI Studio Build Mode */}
          <Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--hair)', borderRadius: '16px', padding: '16px 18px' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 800, color: '#60a5fa', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>⚡</span> Apa Itu Google AI Studio "Build Mode"?
                </h4>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--fg)', lineHeight: 1.6 }}>
                  Google AI Studio adalah lingkungan resmi pengembang dari Google. Dalam fitur <strong>Build Mode</strong>, Anda tidak hanya mendapatkan jawaban teks, melainkan platform yang secara otonom menyusun <strong>aplikasi web React lengkap</strong>: antarmuka interaktif, penanganan state (useState/useEffect), logika perhitungan otomatis, dan penyimpanan data lokal.
                </p>
              </div>

              {/* 3 Steps in AI Studio */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--hair)', borderRadius: '10px', padding: '10px' }}>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: '#60a5fa', display: 'block' }}>LANGKAH 1</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--fg)', display: 'block', marginTop: '2px' }}>Akses Tab "Build"</span>
                  <span style={{ fontSize: '10px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>Pilih menu Build di sidebar kiri aistudio.google.com</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--hair)', borderRadius: '10px', padding: '10px' }}>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: '#38bdf8', display: 'block' }}>LANGKAH 2</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--fg)', display: 'block', marginTop: '2px' }}>Pilih Gemini 3.0 Pro</span>
                  <span style={{ fontSize: '10px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>Model penalaran mendalam untuk kode React kompleks</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--hair)', borderRadius: '10px', padding: '10px' }}>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: '#34d399', display: 'block' }}>LANGKAH 3</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--fg)', display: 'block', marginTop: '2px' }}>Tulis Build Prompt</span>
                  <span style={{ fontSize: '10px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>Jelaskan fitur CRUD, entitas data, dan style Tailwind</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: AI Studio Interface Visualizer */}
          <Reveal delay={200}>
            <div style={{ background: 'var(--surface)', border: '2px solid #1a73e8', borderRadius: '16px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '10px', fontWeight: 800, color: '#60a5fa', textTransform: 'uppercase' }}>
                Anatomi Layar Google AI Studio (Build Mode):
              </span>

              <div style={{ background: '#0a1120', border: '1px solid var(--hair)', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '8px' }}>
                  {/* Chat Panel Box */}
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '8px', borderRadius: '8px', border: '1px dashed #60a5fa' }}>
                    <span style={{ fontSize: '9px', fontWeight: 800, color: '#60a5fa', display: 'block', marginBottom: '4px' }}>
                      💬 CHAT & PROMPT PANEL
                    </span>
                    <div style={{ fontSize: '9px', color: 'var(--fg)', lineHeight: 1.4 }}>
                      Tempat Anda memasukkan build prompt, merevisi fitur, dan memberikan instruksi perbaikan bug.
                    </div>
                  </div>

                  {/* Live Preview Box */}
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '8px', borderRadius: '8px', border: '1px dashed #34d399' }}>
                    <span style={{ fontSize: '9px', fontWeight: 800, color: '#34d399', display: 'block', marginBottom: '4px' }}>
                      🖥️ LIVE PREVIEW PANEL
                    </span>
                    <div style={{ fontSize: '9px', color: 'var(--fg)', lineHeight: 1.4 }}>
                      Aplikasi React berjalan langsung di browser! Mahasiswa bisa mengklik tombol, input form, dan cek data.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '6px', borderTop: '1px solid var(--hair)', fontSize: '9px', color: 'var(--muted)' }}>
                  <span>Fitur Tambahan:</span>
                  <span style={{ color: '#38bdf8', fontWeight: 700 }}>Annotation Mode • Code View • Deploy Cloud Run</span>
                </div>
              </div>

              <div style={{ background: 'rgba(26, 115, 232, 0.08)', padding: '10px', borderRadius: '8px', borderLeft: '3px solid #1a73e8' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#60a5fa', display: 'block' }}>
                  💡 Keunggulan bagi Mahasiswa
                </span>
                <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: 'var(--fg)', lineHeight: 1.4 }}>
                  Tidak perlu mengatur Node.js, npm, atau compiler lokal. Semua proses kompilasi kode React berlangsung di cloud Google.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Slide>
  );
}

Slide07AIStudioIntro.notes = "Dosen mengenalkan Google AI Studio Build Mode. Jelaskan perbedaannya dengan Google Stitch: jika Stitch berfokus pada desain visual antarmuka, AI Studio bertugas merakit aplikasi React yang hidup secara fungsional—lengkap dengan logika bisnis, simulasi database lokal, dan interaktivitas tombol.";
Slide07AIStudioIntro.nav = "Intro AI Studio";
