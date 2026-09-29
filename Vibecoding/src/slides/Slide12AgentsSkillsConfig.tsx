import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

export default function Slide12AgentsSkillsConfig() {
  const [activeTab, setActiveTab] = useState<'agents' | 'skills'>('agents');
  const [copied, setCopied] = useState<boolean>(false);

  const agentsContent = `# Tim Pengembangan Aplikasi UMKM

## Product Manager
- Menganalisis kebutuhan UMKM dari dokumen SWOT
- Menyusun spesifikasi fitur aplikasi
- Memprioritaskan fitur berdasarkan nilai bisnis

## Frontend Developer
- Mengembangkan UI dengan React dan Tailwind CSS
- Mengimplementasikan komponen dari desain Stitch
- Memastikan responsive design untuk mobile

## QA Engineer
- Menguji fungsionalitas aplikasi
- Memvalidasi input dan output kalkulasi
- Melaporkan bug dan regression issues

## DevOps Engineer
- Mengelola deployment aplikasi
- Memastikan aplikasi berjalan stabil di cloud
- Mengatur environment variable & URL produksi`;

  const skillsContent = `# Kemampuan Teknis Tim

## React Development
- Membuat komponen fungsional dengan hooks (useState, useEffect)
- Mengelola state transaksi dan stok
- Routing antarmuka dengan React Router

## Tailwind CSS
- Styling dengan utility classes modern
- Responsive design dengan breakpoints mobile/desktop
- Custom theme dan palet warna UMKM

## Data Management
- localStorage untuk prototipe cepat
- Integrasi REST API & Google Sheets
- Validasi formulir input kasir

## Testing & Quality Assurance
- Component testing dengan React Testing Library
- Pengujian logika kalkulasi laba dan mutasi stok
- Validasi zero hallucination pada respon data`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Slide nav="agents.md & skills.md" notes={Slide12AgentsSkillsConfig.notes}>
      <div style={{ padding: '24px 36px', height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(6, 182, 212, 0.12)', border: '1px solid #06b6d4', borderRadius: '20px', color: '#22d3ee', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
              <span>⚙️ Konfigurasi Tim & Kemampuan AI</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--fg)', margin: 0 }}>
              Konfigurasi agents.md & skills.md dalam Antigravity
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '2px 0 0 0' }}>
              Mendefinisikan peran divisi tim AI dan kapabilitas teknis yang mereka kuasai dalam berkas markdown.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '6px', background: 'var(--surface)', padding: '4px', borderRadius: '10px', border: '1px solid var(--hair)' }}>
            <button
              onClick={() => setActiveTab('agents')}
              style={{
                background: activeTab === 'agents' ? '#06b6d4' : 'transparent',
                color: activeTab === 'agents' ? '#000' : 'var(--muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              .agents/agents.md
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              style={{
                background: activeTab === 'skills' ? '#38bdf8' : 'transparent',
                color: activeTab === 'skills' ? '#000' : 'var(--muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              skills/skills.md
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', alignItems: 'start' }}>
          {/* Left Column: Markdown Code Box */}
          <Reveal>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--hair)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: activeTab === 'agents' ? '#22d3ee' : '#38bdf8', textTransform: 'uppercase' }}>
                  {activeTab === 'agents' ? 'File: .agents/agents.md' : 'File: skills/skills.md'}
                </span>
                <button
                  onClick={() => handleCopy(activeTab === 'agents' ? agentsContent : skillsContent)}
                  style={{
                    background: copied ? 'var(--success)' : 'rgba(255,255,255,0.06)',
                    color: copied ? '#fff' : 'var(--fg)',
                    border: '1px solid var(--hair)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '10px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>{copied ? '✔ Tersalin!' : '📋 Salin Isi File'}</span>
                </button>
              </div>

              <pre
                style={{
                  margin: 0,
                  padding: '12px',
                  background: 'rgba(0,0,0,0.35)',
                  borderRadius: '10px',
                  fontSize: '11px',
                  color: 'var(--fg)',
                  fontFamily: 'monospace',
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.45,
                  maxHeight: '260px',
                  overflowY: 'auto',
                }}
              >
                {activeTab === 'agents' ? agentsContent : skillsContent}
              </pre>
            </div>
          </Reveal>

          {/* Right Column: Architectural Explanation */}
          <Reveal delay={200}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--hair)', borderRadius: '14px', padding: '14px 16px' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  Mengapa Format Ini Sangat Berdaya Guna?
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px', color: 'var(--fg)' }}>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', borderLeft: '3px solid #22d3ee' }}>
                    <strong>agents.md (Siapa Melakukan Apa):</strong> Memberikan identitas peran (*persona*) dan batas wewenang agar agen PM tidak mencampuri urusan koding Frontend.
                  </div>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', borderLeft: '3px solid #38bdf8' }}>
                    <strong>skills.md (Keahlian yang Dikuasai):</strong> Bertindak sebagai pedoman teknis yang dibaca oleh agen saat mereka membutuhkan panduan penulisan kode.
                  </div>
                  <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', borderLeft: '3px solid #34d399' }}>
                    <strong>Fleksibilitas Tanpa Batas:</strong> Anda dapat menambahkan agen baru (misal: Copywriter / Financial Auditor) cukup dengan mengetik 1 paragraf baru!
                  </div>
                </div>
              </div>

              <div style={{ background: 'rgba(6, 182, 212, 0.08)', border: '1px solid #06b6d4', borderRadius: '12px', padding: '10px 14px' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#22d3ee', display: 'block' }}>
                  💡 Lokasi Penempatan File di Proyek:
                </span>
                <code style={{ fontSize: '10px', color: 'var(--fg)', display: 'block', marginTop: '4px', fontFamily: 'monospace' }}>
                  📁 workspace/<br />
                  &nbsp;&nbsp;├── .agents/agents.md<br />
                  &nbsp;&nbsp;└── skills/skills.md
                </code>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Slide>
  );
}

Slide12AgentsSkillsConfig.notes = "Dosen membedah dua berkas konfigurasi kunci di Antigravity: agents.md dan skills.md. Jelaskan bahwa Antigravity menggunakan berkas markdown manusia biasa untuk mengontrol perilaku kecerdasan buatan. Mahasiswa manajemen dapat dengan leluasa menambahkan peran baru cukup dengan menuliskan deskripsi tanggung jawabnya dalam bahasa Indonesia atau Inggris.";
Slide12AgentsSkillsConfig.nav = "agents.md & skills.md";
