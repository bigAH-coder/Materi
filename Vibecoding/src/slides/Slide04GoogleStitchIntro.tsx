import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

export default function Slide04GoogleStitchIntro() {
  const [selectedFeature, setSelectedFeature] = useState<number>(0);

  const features = [
    {
      title: 'Vibe Design Engine',
      icon: '✨',
      color: '#6366f1',
      desc: 'Alih-alih menyusun kotak wireframe manual yang melelahkan, Anda cukup menjelaskan suasana, emosi, dan tujuan bisnis aplikasi.',
      detail: 'Model Gemini 2.5 Flash menafsirkan prompt teks santai menjadi struktur tata letak web dan mobile yang proporsional.',
    },
    {
      title: 'Multimodal Input (Sketsa & Foto)',
      icon: '📸',
      color: '#38bdf8',
      desc: 'Mendukung input visual: unggah coretan tangan di kertas atau foto etalase toko UMKM sebagai referensi desain.',
      detail: 'Stitch mengekstrak warna dominan brand UMKM dan mengubah sketsa kasar menjadi antarmuka modern yang tajam.',
    },
    {
      title: 'Front-End Code Generation',
      icon: '💻',
      color: '#34d399',
      desc: 'Bukan sekadar gambar mati! Stitch menghasilkan kode HTML, CSS modern, dan layer yang siap disalin ke Figma.',
      detail: 'Kode front-end yang dihasilkan bersih, menggunakan semantic HTML5, dan langsung siap dipakai di tahap berikutnya.',
    },
    {
      title: 'Browser-Based & Gratis (Google Labs)',
      icon: '🌐',
      color: '#f59e0b',
      desc: 'Dapat diakses instan melalui stitch.withgoogle.com tanpa perlu instalasi software berat di laptop mahasiswa.',
      detail: 'Cukup login dengan akun Google. Tersedia Standard Mode (cepat) dan Experimental Mode untuk eksplorasi lebih bebas.',
    },
  ];

  return (
    <Slide nav="Intro Google Stitch" notes={Slide04GoogleStitchIntro.notes}>
      <div style={{ padding: '24px 36px', height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid #6366f1', borderRadius: '20px', color: '#818cf8', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
              <span>🎨 Tahap 1 • Desain UI/UX Cerdas</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--fg)', margin: 0 }}>
              Tahap 1: Pengenalan Google Stitch (stitch.withgoogle.com)
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '2px 0 0 0' }}>
              Platform AI perintis dari Google Labs untuk mewujudkan konsep desain UI/UX berstandar profesional dalam hitungan detik.
            </p>
          </div>

          <div style={{ background: 'var(--surface)', padding: '6px 14px', borderRadius: '10px', border: '1px solid var(--hair)' }}>
            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Akses Web:</span>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#818cf8', marginLeft: '6px' }}>
              stitch.withgoogle.com
            </span>
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '16px' }}>
            {features.map((f, idx) => {
              const isSelected = selectedFeature === idx;
              return (
                <div
                  key={f.title}
                  onClick={() => setSelectedFeature(idx)}
                  style={{
                    background: isSelected ? 'rgba(255,255,255,0.07)' : 'var(--surface)',
                    border: isSelected ? `2px solid ${f.color}` : '1px solid var(--hair)',
                    borderRadius: '14px',
                    padding: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <span style={{ fontSize: '24px', display: 'block', marginBottom: '6px' }}>{f.icon}</span>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '13px', fontWeight: 800, color: 'var(--fg)' }}>
                    {f.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '10px', color: 'var(--muted)', lineHeight: 1.4 }}>
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Feature Deep Dive & Quick Start Box */}
        <Reveal delay={200}>
          <div style={{ background: 'var(--surface)', border: `2px solid ${features[selectedFeature].color}`, borderRadius: '16px', padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '22px' }}>{features[selectedFeature].icon}</span>
                <div>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: 'var(--fg)' }}>
                    Keunggulan: {features[selectedFeature].title}
                  </h3>
                  <span style={{ fontSize: '11px', color: features[selectedFeature].color, fontWeight: 700 }}>
                    Powered by Google Labs & Gemini 2.5
                  </span>
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '4px 10px', borderRadius: '6px', fontSize: '10px', color: 'var(--muted)' }}>
                Klik kartu di atas untuk navigasi fitur
              </div>
            </div>

            <p style={{ margin: 0, fontSize: '12px', color: 'var(--fg)', lineHeight: 1.5, background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: '8px' }}>
              {features[selectedFeature].detail}
            </p>

            {/* Quick Steps 1-2 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', paddingTop: '8px', borderTop: '1px solid var(--hair)' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '8px 10px', borderRadius: '8px' }}>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#818cf8', display: 'block' }}>LANGKAH 1</span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--fg)' }}>Buka stitch.withgoogle.com</span>
                <span style={{ fontSize: '10px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>Login dengan akun Google Anda</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '8px 10px', borderRadius: '8px' }}>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#38bdf8', display: 'block' }}>LANGKAH 2</span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--fg)' }}>Pilih Standard Mode</span>
                <span style={{ fontSize: '10px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>Didukung Gemini 2.5 Flash untuk iterasi kilat</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '8px 10px', borderRadius: '8px' }}>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#34d399', display: 'block' }}>LANGKAH 3</span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--fg)' }}>Tentukan Target Canvas</span>
                <span style={{ fontSize: '10px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>Pilih "Web" (desktop) atau "Mobile" (smartphone)</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}

Slide04GoogleStitchIntro.notes = "Dosen mengenalkan Google Stitch kepada mahasiswa. Jelaskan bahwa Stitch adalah platform berbasis Gemini yang merancang UI secara cerdas dari instruksi teks. Tekankan pemilihan 'Standard Mode' yang menggunakan Gemini 2.5 Flash karena memberikan respon sangat cepat dan hemat kuota untuk kebutuhan praktikum kelas.";
Slide04GoogleStitchIntro.nav = "Intro Stitch";
