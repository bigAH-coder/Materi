# Materi Perkuliahan: Vibe Coding untuk Mahasiswa S1 Manajemen

Repository ini memuat materi presentasi interaktif dan modul praktikum untuk mata kuliah **Sistem Informasi Manajemen (SIM)** Program Studi S1 Manajemen Universitas Internasional Semen Indonesia (UISI).

---

## 🚀 Live Demo Presentasi Web

Materi presentasi berbasis web interaktif dapat diakses langsung melalui GitHub Pages:
- 🌐 **[https://bigAH-coder.github.io/Materi/](https://bigAH-coder.github.io/Materi/)**
- 🌐 **[https://bigAH-coder.github.io/Materi/Vibecoding/](https://bigAH-coder.github.io/Materi/Vibecoding/)**

---

## 📌 Topik Utama: Praktikum Vibe Coding untuk UMKM

### "Membangun Aplikasi UMKM dengan Google Stitch, Google AI Studio, dan Antigravity"

Presentasi ini membahas pergeseran paradigma pengembangan sistem informasi dari koding manual (*syntax-first*) ke *natural language specification* (*vibe coding*) yang sangat relevan bagi calon manajer bisnis dan wirausahawan:

1. **Bagian 1: Pengenalan Vibe Coding**
   - Definisi & filosofi vibe coding.
   - Analogi manajer bisnis vs tim developer AI.
   - Urgensi digitalisasi cepat bagi 65 juta UMKM Indonesia.
2. **Bagian 2: Arsitektur Workflow Tiga Tahap**
   - **Tahap 1 (Desain):** Google Stitch (Text/sketch to high-fidelity UI & design system).
   - **Tahap 2 (Build):** Google AI Studio (Gemini 3.0 Pro, live preview, CRUD React app, local storage).
   - **Tahap 3 (Deploy):** Antigravity (Autonomous development pipeline: PM, Frontend, QA, DevOps).
3. **Bagian 3: Praktik Google Stitch**
   - Standard Mode (Gemini 2.5 Flash) vs Experimental.
   - Template Prompt Universal UMKM & studi kasus Keripik Singkong.
   - Preview 3 layar antarmuka & ekspor ke Figma/Code.
4. **Bagian 4: Praktik Google AI Studio (Build Mode)**
   - Prompting aplikasi React terstruktur dengan skema data produk & mutasi stok.
   - Penggunaan Annotation Mode untuk revisi visual interaktif.
   - Penyimpanan data browser via `localStorage`.
5. **Bagian 5: Praktik Antigravity & Stitch MCP**
   - Konfigurasi MCP Server menghubungkan Antigravity ke Google Stitch via API Key.
   - Definisi tim AI pada `.agents/agents.md` dan kapabilitas teknis pada `skills/skills.md`.
   - Eksekusi pipeline otonom via konsol `/startcycle`.
6. **Bagian 6: Studi Kasus Lengkap UMKM Keripik Singkong "Rasa Nusantara" Gresik**
   - Profil bisnis, analisis 3 bottleneck operasional, dan arsitektur solusi sistem.
   - Matriks komparasi prompt 3 tahap *side-by-side*.
7. **Bagian 7: Rubrik Penilaian Praktikum (Skala 1-5, Bobot 100%)**
   - Kualitas Desain UI/UX (20%), Fungsionalitas Aplikasi (30%), Pipeline Antigravity (20%), Kesesuaian Kebutuhan UMKM (15%), Dokumentasi (15%).
8. **Bagian 8: Panduan Troubleshooting & Solusi Cepat**
   - Mengatasi kendala koneksi MCP, build error, syntax crash, dan persistensi data.
9. **Bagian 9: 6 Tips Sukses Mahasiswa Manajemen & Referensi Resmi Google**
   - Mindset Product Manager (PM), Modular Prompting, dan daftar link resmi Google Stitch, AI Studio, dan Antigravity.

---

## 🛠️ Menjalankan Presentasi di Lokal (Localhost)

Untuk menjalankan slide presentasi di komputer Anda:

```bash
# 1. Clone repository ini
git clone https://github.com/bigAH-coder/Materi.git

# 2. Masuk ke direktori Vibecoding
cd Materi/Vibecoding

# 3. Install dependensi
npm install

# 4. Jalankan development server
npm run dev
```

Buka browser di `http://localhost:5173` (atau port yang tertera di terminal).

### Tombol Pintas Presentasi (*Keyboard Shortcuts*):
- `→` / `Space` : Slide berikutnya
- `←` : Slide sebelumnya
- `T` : Tampilkan / sembunyikan thumbnail slide
- `N` : Buka catatan dosen (*Speaker Notes*)
- `F` : Layar penuh (*Fullscreen*)
- `D` : Beralih Dark / Light Mode

---

## 📚 Landasan Teoritis
- **Laudon, K.C. & Laudon, J.P. (2012).** *Management Information Systems: Managing the Digital Firm (12th ed.)*. Pearson.
  - Bab 13: *Building Information Systems* (Alternative Systems-Building Approaches: Prototyping, RAD, End-User Development).
  - Bab 14: *Managing Projects* (Project Risk Management, Scope, Time, Quality Control).

---

*Mata Kuliah Sistem Informasi Manajemen — Program Studi S1 Manajemen — Universitas Internasional Semen Indonesia (UISI)*
