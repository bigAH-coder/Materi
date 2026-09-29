import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

interface WorkflowStage {
  id: string;
  stepNumber: string;
  title: string;
  tool: string;
  tagline: string;
  color: string;
  icon: string;
  inputDescription: string;
  outputDescription: string;
  outputs: string[];
  roleDescription: string;
}

export default function Slide03WorkflowTigaTahap() {
  const [activeStage, setActiveStage] = useState<string>('stage1');

  const stages: WorkflowStage[] = [
    {
      id: 'stage1',
      stepNumber: 'Tahap 1',
      title: 'Desain UI / UX Antarmuka',
      tool: 'Google Stitch',
      tagline: 'Visual Blueprint & Vibe Prototyping',
      color: '#6366f1',
      icon: '🎨',
      inputDescription: 'Deskripsi bahasa natural mengenai jenis UMKM, skema warna, dan daftar halaman yang dibutuhkan.',
      outputDescription: 'Prototipe visual berfidelitas tinggi yang bisa di-preview langsung dan diekspor ke Figma/HTML.',
      outputs: ['Wireframe Interaktif', 'Design System (Palet & Font)', 'Export Front-end Code', 'Shareable Prototype Link'],
      roleDescription: 'Mahasiswa bertindak sebagai UI Designer & Brand Strategist yang menetapkan identitas visual toko.',
    },
    {
      id: 'stage2',
      stepNumber: 'Tahap 2',
      title: 'Build Aplikasi Web Fungsional',
      tool: 'Google AI Studio (Build Mode)',
      tagline: 'Interactive React & Business Logic',
      color: '#1a73e8',
      icon: '🧠',
      inputDescription: 'Prompt build terstruktur berisi spesifikasi CRUD produk, kalkulasi stok, dan form validasi.',
      outputDescription: 'Aplikasi web React utuh dengan state management, simulasi penyimpanan localStorage, dan live preview.',
      outputs: ['Kode Komponen React', 'Live Browser Preview', 'Interaktivitas CRUD & Filter', 'Simulasi Database LocalStorage'],
      roleDescription: 'Mahasiswa bertindak sebagai Software Architect yang merumuskan aturan logika dan entitas data bisnis.',
    },
    {
      id: 'stage3',
      stepNumber: 'Tahap 3',
      title: 'Otonomisasi & Deployment Sistem',
      tool: 'Google Antigravity',
      tagline: 'Autonomous AI Developer Pipeline',
      color: '#06b6d4',
      icon: '⚡',
      inputDescription: 'Perintah /startcycle yang mengorkestrasi file agents.md dan skills.md secara otonom.',
      outputDescription: 'Aplikasi produksi yang telah diuji oleh AI QA, terintegrasi database awan, dan siap digunakan pemilik toko.',
      outputs: ['Aplikasi Siap Produksi', 'Pipeline Otomatis (agents.md)', 'Laporan Pengujian Otomatis', 'Live Cloud URL Deployment'],
      roleDescription: 'Mahasiswa bertindak sebagai Chief Executive Officer (CEO) / Product Manager yang menyetujui rilis sistem.',
    },
  ];

  const current = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <Slide nav="Alur 3 Tahap" notes={Slide03WorkflowTigaTahap.notes}>
      <div style={{ padding: '24px 36px', height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid #38bdf8', borderRadius: '20px', color: '#38bdf8', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
              <span>🔄 Bagian 2 • Arsitektur Workflow</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--fg)', margin: 0 }}>
              Alur Kerja Tiga Tahap: Dari Ide Menuju Aplikasi Siap Pakai
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '2px 0 0 0' }}>
              Siklus berkesinambungan: Google Stitch (Desain) ➔ Google AI Studio (Build) ➔ Google Antigravity (Deploy).
            </p>
          </div>

          <div style={{ background: 'var(--surface)', padding: '6px 14px', borderRadius: '10px', border: '1px solid var(--hair)' }}>
            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Pipeline Status:</span>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#34d399', marginLeft: '6px' }}>
              End-to-End Seamless
            </span>
          </div>
        </div>

        {/* 3 Steps Pipeline Visualizer */}
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
            {stages.map((stage) => {
              const isSelected = activeStage === stage.id;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  style={{
                    background: isSelected ? 'rgba(255,255,255,0.07)' : 'var(--surface)',
                    border: isSelected ? `2px solid ${stage.color}` : '1px solid var(--hair)',
                    borderRadius: '14px',
                    padding: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: stage.color, background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: '4px' }}>
                      {stage.stepNumber}
                    </span>
                    <span style={{ fontSize: '20px' }}>{stage.icon}</span>
                  </div>

                  <h3 style={{ margin: '0 0 2px 0', fontSize: '15px', fontWeight: 800, color: 'var(--fg)' }}>
                    {stage.tool}
                  </h3>
                  <div style={{ fontSize: '11px', color: stage.color, fontWeight: 700, marginBottom: '6px' }}>
                    {stage.title}
                  </div>
                  <div style={{ fontSize: '10px', color: 'var(--muted)', lineHeight: 1.3 }}>
                    {stage.tagline}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Selected Stage Detail Panel */}
        <Reveal delay={200}>
          <div style={{ background: 'var(--surface)', border: `2px solid ${current.color}`, borderRadius: '16px', padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '22px' }}>{current.icon}</span>
                <div>
                  <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 800, color: 'var(--fg)' }}>
                    {current.stepNumber}: {current.title} ({current.tool})
                  </h3>
                  <span style={{ fontSize: '11px', color: current.color, fontWeight: 700 }}>
                    {current.roleDescription}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: '10px', borderLeft: `3px solid ${current.color}` }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: current.color, textTransform: 'uppercase', display: 'block' }}>
                  Input dari Mahasiswa:
                </span>
                <p style={{ margin: '4px 0 0 0', fontSize: '11px', color: 'var(--fg)', lineHeight: 1.4 }}>
                  {current.inputDescription}
                </p>
              </div>

              <div style={{ background: 'rgba(56, 161, 105, 0.08)', padding: '10px 14px', borderRadius: '10px', borderLeft: '3px solid var(--success)' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase', display: 'block' }}>
                  Output Nyata yang Dihasilkan:
                </span>
                <p style={{ margin: '4px 0 0 0', fontSize: '11px', color: 'var(--fg)', lineHeight: 1.4 }}>
                  {current.outputDescription}
                </p>
              </div>
            </div>

            {/* Output Deliverables Badges */}
            <div style={{ paddingTop: '8px', borderTop: '1px solid var(--hair)' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Deliverables Siap Pakai pada Tahap Ini:
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                {current.outputs.map((out, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.04)', padding: '6px 10px', borderRadius: '6px', fontSize: '10px', color: 'var(--fg)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: current.color }}>✔</span>
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}

Slide03WorkflowTigaTahap.notes = "Dosen memaparkan arsitektur workflow 3 tahap vibe coding. Setiap tahap memiliki pembagian peran yang tegas: Google Stitch fokus pada keindahan dan ergonomi antarmuka pengguna, Google AI Studio mengubah visual tersebut menjadi aplikasi React fungsional dengan logika data, dan Google Antigravity mengotomasi siklus pengujian hingga deployment.";
Slide03WorkflowTigaTahap.nav = "Alur 3 Tahap";
