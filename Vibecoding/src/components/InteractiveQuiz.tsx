import { useState } from 'react';
import { IconCheck, IconX } from './LineIcons';

interface Question {
  id: number;
  topic: string;
  question: string;
  options: { id: string; label: string; isCorrect: boolean }[];
  explanation: string;
}

const quizData: Question[] = [
  {
    id: 1,
    topic: 'Pertemuan 1 · Definisi Algoritma',
    question: 'Urutan pemrosesan logika komputasi dalam model IPO yang benar adalah...',
    options: [
      { id: 'A', label: 'Output ➔ Process ➔ Input', isCorrect: false },
      { id: 'B', label: 'Input ➔ Process ➔ Output', isCorrect: true },
      { id: 'C', label: 'Process ➔ Input ➔ Output', isCorrect: false },
      { id: 'D', label: 'Output ➔ Input ➔ Process', isCorrect: false },
    ],
    explanation:
      'Model komputasi IPO selalu berawal dari menerima bahan mentah data masukan (Input), mengolah instruksi secara logis (Process), dan menghasilkan solusi informasi yang bermanfaat (Output).',
  },
  {
    id: 2,
    topic: 'Pertemuan 1 · Karakteristik Algoritma',
    question: 'Karakteristik algoritma yang menyatakan bahwa program harus memiliki batasan langkah dan pasti berhenti adalah...',
    options: [
      { id: 'A', label: 'Definiteness — Setiap instruksi bermakna tunggal', isCorrect: false },
      { id: 'B', label: 'Effectiveness — Langkah sederhana dan dapat dikerjakan', isCorrect: false },
      { id: 'C', label: 'Finiteness (Keterbatasan) — Pasti berhenti setelah sejumlah langkah', isCorrect: true },
      { id: 'D', label: 'Generality — Berlaku untuk semua kasus sejenis', isCorrect: false },
    ],
    explanation:
      'Finiteness mewajibkan suatu algoritma berhenti setelah menyelesaikan sejumlah langkah berhingga, tidak boleh mengalami perulangan abadi tanpa henti (infinite loop).',
  },
  {
    id: 3,
    topic: 'Pertemuan 2 · Simbol Flowchart',
    question: 'Simbol flowchart berbentuk belah ketupat (diamond) digunakan untuk melambangkan...',
    options: [
      { id: 'A', label: 'Terminal awal / akhir program (Start / End)', isCorrect: false },
      { id: 'B', label: 'Proses komputasi atau perhitungan aritmatika', isCorrect: false },
      { id: 'C', label: 'Pengambilan keputusan / percabangan kondisi logika (Decision)', isCorrect: true },
      { id: 'D', label: 'Operasi pembacaan data masukan atau pencetakan keluaran (I/O)', isCorrect: false },
    ],
    explanation:
      'Simbol belah ketupat (Decision) mengevaluasi kondisi logika dan memiliki dua atau lebih cabang arah alur keluar (misal Ya/Tidak atau True/False).',
  },
  {
    id: 4,
    topic: 'Pertemuan 3 · Tipe Data Dasar',
    question: 'Tipe data apa yang paling tepat di Python untuk menyimpan nilai konstanta percepatan gravitasi 9.81?',
    options: [
      { id: 'A', label: 'int (Integer / Bilangan Bulat)', isCorrect: false },
      { id: 'B', label: 'float (Floating Point / Bilangan Desimal/Pecahan)', isCorrect: true },
      { id: 'C', label: 'str (String / Teks)', isCorrect: false },
      { id: 'D', label: 'bool (Boolean / Logika)', isCorrect: false },
    ],
    explanation:
      'Nilai 9.81 memiliki titik desimal (pecahan), sehingga di Python secara otomatis diidentifikasi sebagai tipe data float.',
  },
  {
    id: 5,
    topic: 'Pertemuan 3 · Aturan Variabel',
    question: 'Manakah nama variabel Python yang VALID dan sesuai konvensi resmi PEP 8?',
    options: [
      { id: 'A', label: '2nd_output (Diawali angka)', isCorrect: false },
      { id: 'B', label: 'total biaya (Mengandung karakter spasi)', isCorrect: false },
      { id: 'C', label: 'total_biaya_produksi (Format standar snake_case)', isCorrect: true },
      { id: 'D', label: 'class (Merupakan reserved keyword bawaan Python)', isCorrect: false },
    ],
    explanation:
      'Variabel tidak boleh diawali angka, tidak boleh menggunakan spasi, dan tidak boleh memakai kata kunci bahasa (keyword). Format total_biaya_produksi adalah snake_case standar PEP 8.',
  },
  {
    id: 6,
    topic: 'Pertemuan 4 · Sintaks Python',
    question: 'Berapa jumlah spasi standar PEP 8 untuk setiap tingkatan blok indentasi di Python?',
    options: [
      { id: 'A', label: '2 spasi', isCorrect: false },
      { id: 'B', label: '4 spasi (Standar resmi PEP 8)', isCorrect: true },
      { id: 'C', label: '8 spasi', isCorrect: false },
      { id: 'D', label: 'Bebas suka-suka programmer', isCorrect: false },
    ],
    explanation:
      'Dokumentasi resmi gaya penulisan Python (PEP 8) menetapkan tepat 4 spasi untuk setiap blok kode (fungsi, percabangan if, perulangan for/while).',
  },
  {
    id: 7,
    topic: 'Pertemuan 4 · Fungsi input()',
    question: 'Tipe data apa yang selalu dihasilkan secara bawaan oleh fungsi input() di Python 3?',
    options: [
      { id: 'A', label: 'int (Otomatis menjadi angka jika diketik angka)', isCorrect: false },
      { id: 'B', label: 'float', isCorrect: false },
      { id: 'C', label: 'str (Selalu berupa teks karakter / string)', isCorrect: true },
      { id: 'D', label: 'Tergantung pengaturan di file python.ini', isCorrect: false },
    ],
    explanation:
      'Fungsi input() selalu mengembalikan data bertipe string (str). Untuk operasi matematika, wajib dikonversi (type casting) menggunakan int() atau float().',
  },
  {
    id: 8,
    topic: 'Pertemuan 5 · Prasyarat Binary Search',
    question: 'Apa syarat mutlak agar algoritma Binary Search dapat dijalankan pada suatu koleksi data?',
    options: [
      { id: 'A', label: 'Jumlah elemen data harus bernilai genap', isCorrect: false },
      { id: 'B', label: 'Koleksi data HARUS sudah dalam keadaan terurut (sorted)', isCorrect: true },
      { id: 'C', label: 'Data harus berukuran lebih dari 1.000 elemen', isCorrect: false },
      { id: 'D', label: 'Data tidak boleh mengandung angka negatif', isCorrect: false },
    ],
    explanation:
      'Binary Search memangkas separuh ruang pencarian berdasarkan perbandingan nilai tengah (mid). Prinsip ini hanya valid jika data sudah terurut rapi.',
  },
  {
    id: 9,
    topic: 'Pertemuan 5 · Kompleksitas Searching',
    question: 'Berapakah efisiensi kompleksitas waktu kasus terburuk (Worst-Case) pada Binary Search?',
    options: [
      { id: 'A', label: 'O(1) — Waktu Konstan', isCorrect: false },
      { id: 'B', label: 'O(n) — Waktu Linear', isCorrect: false },
      { id: 'C', label: 'O(log n) — Waktu Logaritmik', isCorrect: true },
      { id: 'D', label: 'O(n²) — Waktu Kuadratik', isCorrect: false },
    ],
    explanation:
      'Kompleksitas Worst-Case Binary Search adalah O(log n) karena ruang pencarian selalu dipangkas menjadi setengah di setiap iterasi. Untuk 1 juta data, hanya butuh ~20 langkah perbandingan!',
  },
  {
    id: 10,
    topic: 'Pertemuan 6 · Sorting Algorithms',
    question: 'Mengapa Insertion Sort lebih efisien dibanding Bubble Sort untuk data yang hampir terurut (nearly sorted)?',
    options: [
      { id: 'A', label: 'Karena Insertion Sort menggunakan pembagian memori biner', isCorrect: false },
      { id: 'B', label: 'Karena Best-Case alaminya O(n) dan hanya melakukan pergeseran searah (shift)', isCorrect: true },
      { id: 'C', label: 'Karena Insertion Sort tidak memerlukan perulangan while', isCorrect: false },
      { id: 'D', label: 'Karena Insertion Sort otomatis mengubah dirinya menjadi Quick Sort', isCorrect: false },
    ],
    explanation:
      'Insertion Sort bekerja adaptif: saat menyisipkan key pada data yang hampir terurut, pergeseran hanya terjadi sedikit dan loop while langsung berhenti, menghasilkan performa mendekati O(n).',
  },
];

export default function InteractiveQuiz() {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: string }>({});

  const currentQ = quizData[currentQIndex];
  const selectedOptionId = selectedAnswers[currentQ.id];
  const selectedOption = currentQ.options.find((opt) => opt.id === selectedOptionId);

  const handleSelect = (optionId: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: optionId }));
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = Object.entries(selectedAnswers).filter(([qId, ansId]) => {
    const q = quizData.find((item) => item.id === Number(qId));
    const opt = q?.options.find((o) => o.id === ansId);
    return opt?.isCorrect;
  }).length;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        width: '100%',
        maxWidth: '920px',
        marginInline: 'auto',
      }}
    >
      {/* Quiz Progress & Question Selector Tabs 1-10 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {quizData.map((q, idx) => {
            const isAnswered = !!selectedAnswers[q.id];
            const isCurrent = currentQIndex === idx;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentQIndex(idx)}
                type="button"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  border: isCurrent ? '2px solid var(--primary)' : '1px solid var(--hair)',
                  background: isCurrent
                    ? 'rgba(0, 212, 255, 0.25)'
                    : isAnswered
                    ? 'rgba(16, 185, 129, 0.15)'
                    : 'var(--surface)',
                  color: isCurrent ? 'var(--primary)' : isAnswered ? '#10b981' : 'var(--fg-muted)',
                  fontSize: '12px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {q.id}
              </button>
            );
          })}
        </div>

        <div style={{ fontSize: '12.5px', color: 'var(--fg-muted)', fontFamily: 'var(--font-mono)' }}>
          Terjawab: <strong style={{ color: 'var(--primary)' }}>{answeredCount}/10</strong> · Benar:{' '}
          <strong style={{ color: '#10b981' }}>{correctCount}</strong>
        </div>
      </div>

      {/* Topic Kicker & Question Text */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid var(--hair-2)',
          borderRadius: 'var(--radius-sm)',
          padding: '14px 18px',
          textAlign: 'left',
        }}
      >
        <div style={{ fontSize: '11px', color: 'var(--primary-orange)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
          SOAL {currentQ.id} OF 10 · {currentQ.topic}
        </div>
        <div
          style={{
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            fontWeight: 700,
            color: 'var(--fg)',
            lineHeight: 1.4,
          }}
        >
          {currentQ.question}
        </div>
      </div>

      {/* 4 Options Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
          gap: '10px',
        }}
      >
        {currentQ.options.map((opt) => {
          const isSelected = selectedOptionId === opt.id;
          const showSuccess = isSelected && opt.isCorrect;
          const showError = isSelected && !opt.isCorrect;

          let bg = 'var(--surface)';
          let border = '1px solid var(--hair)';
          let shadow = 'none';

          if (showSuccess) {
            bg = 'rgba(16, 185, 129, 0.16)';
            border = '2px solid #10b981';
            shadow = '0 0 25px rgba(16, 185, 129, 0.35)';
          } else if (showError) {
            bg = 'rgba(239, 68, 68, 0.16)';
            border = '2px solid #ef4444';
            shadow = '0 0 25px rgba(239, 68, 68, 0.35)';
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              type="button"
              style={{
                background: bg,
                border: border,
                borderRadius: 'var(--radius-sm)',
                padding: '12px 16px',
                color: 'var(--fg)',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: shadow,
                transform: isSelected ? 'scale(1.01)' : 'none',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  backgroundColor: showSuccess
                    ? '#10b981'
                    : showError
                    ? '#ef4444'
                    : 'rgba(255, 255, 255, 0.08)',
                  color: showSuccess || showError ? '#fff' : 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '13px',
                  flexShrink: 0,
                }}
              >
                {opt.id}
              </div>
              <div style={{ flex: 1, fontSize: '13.5px', fontWeight: 500, lineHeight: 1.4 }}>
                {opt.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanatory Feedback Box */}
      {selectedOption && (
        <div
          style={{
            background: selectedOption.isCorrect
              ? 'rgba(16, 185, 129, 0.12)'
              : 'rgba(239, 68, 68, 0.12)',
            border: selectedOption.isCorrect
              ? '1px solid rgba(16, 185, 129, 0.4)'
              : '1px solid rgba(239, 68, 68, 0.4)',
            borderRadius: 'var(--radius-sm)',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            textAlign: 'left',
            animation: 'slideUp 0.3s ease both',
          }}
        >
          <div style={{ color: selectedOption.isCorrect ? '#10b981' : '#ef4444', marginTop: 2 }}>
            {selectedOption.isCorrect ? (
              <IconCheck width={20} height={20} />
            ) : (
              <IconX width={20} height={20} />
            )}
          </div>
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: '14px',
                color: selectedOption.isCorrect ? '#10b981' : '#ef4444',
                marginBottom: '2px',
              }}
            >
              {selectedOption.isCorrect
                ? 'Tepat Sekali! (Jawaban Benar)'
                : 'Kurang Tepat, Silakan Coba Opsi Lain!'}
            </div>
            <div style={{ color: 'var(--fg-muted)', fontSize: '13px', lineHeight: 1.45 }}>
              {currentQ.explanation}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
