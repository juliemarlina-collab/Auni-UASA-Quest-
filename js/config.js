/* =====================================================================
   TETAPAN APP UASA QUEST
   Ubah fail ini sahaja untuk menukar murid, sekolah dan jadual ujian.
   ===================================================================== */
const CONFIG = {
  studentName: 'Auni Nabilah Idzme',      // nama penuh (halaman utama & sijil)
  shortName:   'Auni',                    // nama panggilan
  keycaps:     'AUNI',                    // huruf pada butang papan kekunci (maks 6 huruf)
  parentTitle: 'Ibu',                     // panggilan ibu/bapa di dalam app
  heroWord:    'srikandi',                // "Selamat datang, srikandi!"
  form:        'Tingkatan 1',
  school:      'SMK Warisan Puteri, Seremban',
  year:        2026,

  // WAJIB unik bagi setiap app yang di-host pada domain GitHub yang sama,
  // supaya kemajuan Auni tidak bercampur dengan app murid lain.
  storageKey:  'auni2026_',

  // Gambar (pilihan). Letak fail dalam folder assets/ dan tulis laluannya.
  // Kosong = avatar huruf berwarna dipaparkan.
  photo:       '',                        // contoh: 'assets/auni.jpg'      (potret)
  photoWide:   '',                        // contoh: 'assets/auni-wide.jpg' (landskap)

  // PIN untuk ibu/bapa memasukkan markah sebenar di halaman Raikan.
  // Kosong = sesiapa yang buka app boleh memasukkan markah.
  parentPin:   '',

  tz: '+08:00',                           // zon masa Malaysia

  /* ---------------- JADUAL UASA ----------------
     date    : 'YYYY-MM-DD'
     papers  : [ ['mula HH:MM', 'tamat HH:MM', 'Nama subjek'], ... ]
               (kod subjek dikesan automatik daripada nama)
     ulangan : teks bebas (pilihan), dipaparkan di bawah ujian hari itu
  ------------------------------------------------ */
  exams: [
    { date: '2026-10-26', papers: [['07:50', '09:50', 'Sains']],               ulangan: 'BM, BI, SEJ' },
    { date: '2026-10-28', papers: [['07:50', '09:50', 'Geografi']],            ulangan: 'PSV, RBT' },
    { date: '2026-10-29', papers: [['07:50', '09:50', 'Matematik']],           ulangan: 'SN, GEO' },
    { date: '2026-10-30', papers: [['08:10', '09:10', 'PJPK'],
                                   ['09:55', '11:55', 'Pendidikan Islam']] },
    { date: '2026-11-03', papers: [],                                          ulangan: 'MM, PI/PM, PJPK' }
  ],
  timetableNote: 'Jadual UASA Tingkatan 1, SMK Warisan Puteri Seremban (Pindaan Murid v2). Sesi "Ulangan" mengikut jadual sekolah.',

  // Subjek di halaman Raikan (markah sebenar daripada guru)
  resultSubjects: [
    ['BM', 'Bahasa Melayu'], ['BI', 'English'], ['SEJ', 'Sejarah'], ['GEO', 'Geografi'],
    ['MT', 'Matematik'], ['SN', 'Sains'], ['PJK', 'PJPK'], ['PI', 'Pendidikan Islam'],
    ['PSV', 'Pendidikan Seni Visual'], ['RBT', 'Reka Bentuk dan Teknologi']
  ]
};
