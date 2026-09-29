import { useState } from 'react';
import Slide from '../deck/Slide';
import Reveal from '../deck/Reveal';

interface AgentRole {
  role: string;
  badge: string;
  icon: string;
  color: string;
  responsibility: string;
  outputArtifact: string;
}

export default function Slide10AntigravityIntro() {
  const [selectedRole, setSelectedRole] = useState<number>(0);

  const roles: AgentRole[] = [
    {
      role: 'Product Manager (PM)',
      badge: 'Analisis & Spesifikasi',
      icon: '📋',
      color: '#60a5fa',
      responsibility: 'Menganalisis kebutuhan bisnis UMKM dari dokumen SWOT, memprioritaskan fitur bernilai tinggi, dan menyusun spesifikasi teknis.',
      outputArtifact: 'Dokumen Spesifikasi Fitur, User Stories, dan Pembagian Milestone.',
    },
    {
      role: 'Frontend Developer',
      badge: 'Implementasi UI/UX',
      icon: '💻',
      color: '#38bdf8',
      responsibility: 'Mengambil desain dari Stitch via MCP, mengimplementasikan komponen React fungsional, dan menata style Tailwind CSS responsif.',
      outputArtifact: 'Komponen React terstruktur di folder src/components dan halaman App.tsx.',
    },
    {
      role: 'QA Engineer',
      badge: 'Pengujian Mutu',
      icon: '🧪',
      color: '#34d399',
      responsibility: 'Menguji seluruh fungsionalitas tombol, validasi form, simulasi kalkulasi stok, dan melaporkan bug secara otomatis.',
      outputArtifact: 'Laporan Pengujian Otomatis (Test Suite Results) & Bug Fix Recommendations.',
    },
    {
      role: 'DevOps Engineer',
      badge: 'Deployment & Rilis',
      icon: '🚀',
      color: '#f59e0b',
      responsibility: 'Mengelola proses build produksi, mengatur environment variable, dan men-deploy aplikasi ke cloud agar online.',
      outputArtifact: 'Live Deployment URL yang dapat dibuka di smartphone pemilik toko.',
    },
  ];

  return (
    <Slide nav="Intro Antigravity" notes={Slide10AntigravityIntro.notes}>
      <div style={{ padding: '24px 36px', height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(6, 182, 212, 0.12)', border: '1px solid #06b6d4', borderRadius: '20px', color: '#22d3ee', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
              <span>⚡ Tahap 3 • Agentic Development Platform</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--fg)', margin: 0 }}>
              Tahap 3: Pengenalan Google Antigravity & Tim AI Otonom
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '2px 0 0 0' }}>
              Platform revolusioner Google DeepMind yang menyediakan tim developer AI otonom untuk menyelesaikan siklus rekayasa sistem.
            </p>
          </div>

          <div style={{ background: 'var(--surface)', padding: '6px 14px', borderRadius: '10px', border: '1px solid var(--hair)' }}>
            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Unduh IDE:</span>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#22d3ee', marginLeft: '6px' }}>
              antigravity.google
            </span>
          </div>
        </div>

        {/* 4 Agent Roles Grid */}
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '16px' }}>
            {roles.map((r, idx) => {
              const isSelected = selectedRole === idx;
              return (
                <div
                  key={r.role}
                  onClick={() => setSelectedRole(idx)}
                  style={{
                    background: isSelected ? 'rgba(255,255,255,0.07)' : 'var(--surface)',
                    border: isSelected ? `2px solid ${r.color}` : '1px solid var(--hair)',
                    borderRadius: '14px',
                    padding: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '22px' }}>{r.icon}</span>
                    <span style={{ fontSize: '9px', fontWeight: 800, color: r.color, background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: '4px' }}>
                      {r.badge}
                    </span>
                  </div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '13px', fontWeight: 800, color: 'var(--fg)' }}>
                    {r.role}
                  </h4>
                  <p style={{ margin: 0, fontSize: '10px', color: 'var(--muted)', lineHeight: 1.4 }}>
                    {r.responsibility.substring(0, 75)}...
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Selected Role Deep Dive */}
        <Reveal delay={200}>
          <div style={{ background: 'var(--surface)', border: `2px solid ${roles[selectedRole].color}`, borderRadius: '16px', padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '24px' }}>{roles[selectedRole].icon}</span>
                <div>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: 'var(--fg)' }}>
                    {roles[selectedRole].role}
                  </h3>
                  <span style={{ fontSize: '11px', color: roles[selectedRole].color, fontWeight: 700 }}>
                    Fungsi Spesifik dalam Tim Pengembang AI Antigravity
                  </span>
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '4px 10px', borderRadius: '6px', fontSize: '10px', color: 'var(--muted)' }}>
                Klik kartu peran di atas untuk berpindah
              </div>
            </div>

            <p style={{ margin: 0, fontSize: '12px', color: 'var(--fg)', lineHeight: 1.5, background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: '8px' }}>
              {roles[selectedRole].responsibility}
            </p>

            <div style={{ background: 'rgba(56, 161, 105, 0.08)', padding: '8px 12px', borderRadius: '8px', borderLeft: '3px solid var(--success)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase' }}>
                Deliverable Otomatis yang Dihasilkan:
              </span>
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--fg)' }}>
                📦 {roles[selectedRole].outputArtifact}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}

Slide10AntigravityIntro.notes = "Dosen mengenalkan Google Antigravity. Jelaskan lompatan besar dari era chatbot tunggal menuju Agentic Development: Antigravity memungkinkan mahasiswa mengelola satu tim software developer lengkap yang terdiri dari Product Manager, Frontend Developer, QA Tester, dan DevOps Engineer secara otonom dalam satu workspace.";
Slide10AntigravityIntro.nav = "Intro Antigravity";
