// DATA SIPKOH 2025 - Complete Database
// File: assets/js/data.js

// Data Produk Berbahaya 2025
const produkData = [
  {
    id: 1,
    nama: "Vape Pod Disposable Tanpa Izin",
    merk: "Berbagai Merk China",
    kategori: "Rokok Elektrik",
    status: "Berbahaya - Belum Terdaftar BPOM",
    produsen: "Tidak Diketahui",
    tingkatBahaya: "Tinggi",
    alasan: "Mengandung nikotin tinggi, bahan kimia berbahaya, dan tidak memiliki izin edar",
    tanggal: "2025-01-15"
  },
  {
    id: 2,
    nama: "Permen Jelly Candy Berformalin",
    merk: "Sweet Chewy",
    kategori: "Makanan",
    status: "Berbahaya - Ditarik BPOM",
    produsen: "Import Ilegal",
    tingkatBahaya: "Sangat Tinggi",
    alasan: "Terdeteksi mengandung formalin dan pewarna tekstil berbahaya",
    tanggal: "2025-02-01"
  },
  {
    id: 3,
    nama: "Minuman Berenergi 'Power Max'",
    merk: "Power Max Energy",
    kategori: "Minuman",
    status: "Berbahaya - Kandungan Kafein Berlebih",
    produsen: "PT Energi Nusantara",
    tingkatBahaya: "Tinggi",
    alasan: "Kafein 320mg per botol, melebihi batas aman (150mg). Menyebabkan jantung berdebar",
    tanggal: "2025-01-28"
  },
  {
    id: 4,
    nama: "Snack Keripik Pedas 'Death Spicy'",
    merk: "Death Spicy",
    kategori: "Makanan",
    status: "Berbahaya - Capsaicin Ekstrem",
    produsen: "Import Korea",
    tingkatBahaya: "Tinggi",
    alasan: "Level capsaicin mencapai 8.8 juta SHU, dapat menyebabkan iritasi lambung serius",
    tanggal: "2025-02-10"
  },
  {
    id: 5,
    nama: "Susu UHT Premium",
    merk: "Indomilk",
    kategori: "Minuman",
    status: "Aman - Terdaftar BPOM",
    produsen: "PT Indolakto",
    tingkatBahaya: "Rendah",
    alasan: "Produk aman dengan sertifikasi lengkap dan nutrisi seimbang",
    tanggal: "2025-01-05"
  },
  {
    id: 6,
    nama: "Mie Instan Sehat Rendah Sodium",
    merk: "Lemonilo",
    kategori: "Makanan",
    status: "Direkomendasikan - BPOM & Halal",
    produsen: "PT Lemonilo Indonesia",
    tingkatBahaya: "Rendah",
    alasan: "Mie sehat dengan bahan alami, rendah sodium, tanpa MSG",
    tanggal: "2025-01-20"
  },
  {
    id: 7,
    nama: "Suplemen 'Muscle Booster X'",
    merk: "Muscle Booster",
    kategori: "Suplemen",
    status: "Berbahaya - Steroid Terlarang",
    produsen: "Import Ilegal Thailand",
    tingkatBahaya: "Sangat Tinggi",
    alasan: "Mengandung steroid anabolik terlarang, merusak liver dan ginjal",
    tanggal: "2025-02-05"
  },
  {
    id: 8,
    nama: "Es Krim Organik",
    merk: "Ben & Jerry's",
    kategori: "Makanan",
    status: "Direkomendasikan - Sertifikat Organik",
    produsen: "Unilever",
    tingkatBahaya: "Rendah",
    alasan: "Bahan organik berkualitas, tanpa pengawet berbahaya",
    tanggal: "2025-01-10"
  },
  {
    id: 9,
    nama: "Pil Diet 'Slim Fast Ultra'",
    merk: "Slim Fast",
    kategori: "Obat",
    status: "Berbahaya - Sibutramine Terlarang",
    produsen: "China (Ilegal)",
    tingkatBahaya: "Sangat Tinggi",
    alasan: "Mengandung sibutramine yang dilarang karena risiko serangan jantung",
    tanggal: "2025-02-15"
  },
  {
    id: 10,
    nama: "Teh Hijau Organik",
    merk: "Sariwangi Green Tea",
    kategori: "Minuman",
    status: "Direkomendasikan - BPOM",
    produsen: "PT Unilever Indonesia",
    tingkatBahaya: "Rendah",
    alasan: "Antioksidan tinggi, aman untuk konsumsi harian",
    tanggal: "2025-01-12"
  },
  {
    id: 11,
    nama: "Liquid Vape 'Cloud Beast'",
    merk: "Cloud Beast",
    kategori: "Rokok Elektrik",
    status: "Berbahaya - Nikotin Ilegal",
    produsen: "Malaysia (Tanpa Izin)",
    tingkatBahaya: "Tinggi",
    alasan: "Nikotin 50mg/ml, tidak terdaftar, potensi adiksi sangat tinggi",
    tanggal: "2025-02-08"
  },
  {
    id: 12,
    nama: "Yogurt Probiotik",
    merk: "Activia",
    kategori: "Makanan",
    status: "Direkomendasikan - Sertifikat Sehat",
    produsen: "PT Danone Indonesia",
    tingkatBahaya: "Rendah",
    alasan: "Probiotik untuk kesehatan pencernaan, terdaftar dan aman",
    tanggal: "2025-01-18"
  }
];

// Data Laporan
const laporanData = [
  {
    id: 1,
    produkId: 1,
    pelapor: "Ahmad Ridwan",
    tanggal: "2025-02-20",
    lokasi: "Jakarta Selatan",
    deskripsi: "Menemukan vape disposable dijual bebas di sekolah tanpa verifikasi umur",
    status: "Diproses"
  },
  {
    id: 2,
    produkId: 2,
    pelapor: "Siti Nurhaliza",
    tanggal: "2025-02-18",
    lokasi: "Bandung",
    deskripsi: "Anak mengalami keracunan setelah mengonsumsi permen jelly",
    status: "Darurat"
  },
  {
    id: 3,
    produkId: 7,
    pelapor: "Budi Santoso",
    tanggal: "2025-02-15",
    lokasi: "Surabaya",
    deskripsi: "Suplemen dijual online tanpa resep dokter, ada efek samping serius",
    status: "Diverifikasi"
  },
  {
    id: 4,
    produkId: 9,
    pelapor: "Dewi Kartika",
    tanggal: "2025-02-12",
    lokasi: "Medan",
    deskripsi: "Pil diet menyebabkan jantung berdebar dan sesak nafas",
    status: "Darurat"
  },
  {
    id: 5,
    produkId: 3,
    pelapor: "Rudi Hermawan",
    tanggal: "2025-02-10",
    lokasi: "Yogyakarta",
    deskripsi: "Minuman energi membuat siswa SMA pingsan",
    status: "Diproses"
  }
];

// Data Kasus
const kasusData = [
  {
    id: 1,
    judul: "Keracunan Massal Permen Jelly di Sekolah",
    produkId: 2,
    tanggal: "2025-02-01",
    lokasi: "SD Harapan Bangsa, Bandung",
    korban: 15,
    status: "Ditangani Dinkes",
    keterangan: "15 siswa SD dirawat di RS karena keracunan formalin dari permen jelly impor ilegal"
  },
  {
    id: 2,
    judul: "Penyalahgunaan Vape di Kalangan Pelajar",
    produkId: 1,
    tanggal: "2025-01-25",
    lokasi: "SMA Negeri 5 Jakarta",
    korban: 8,
    status: "Proses Hukum",
    keterangan: "8 siswa tertangkap menggunakan vape ilegal di lingkungan sekolah"
  },
  {
    id: 3,
    judul: "Kematian Akibat Suplemen Steroid Ilegal",
    produkId: 7,
    tanggal: "2025-02-05",
    lokasi: "Fitness Center, Surabaya",
    korban: 1,
    status: "Investigasi Polisi",
    keterangan: "Seorang atlet meninggal akibat gagal ginjal setelah konsumsi suplemen steroid ilegal"
  },
  {
    id: 4,
    judul: "Overdosis Kafein dari Minuman Energi",
    produkId: 3,
    tanggal: "2025-01-28",
    lokasi: "Universitas Indonesia, Depok",
    korban: 3,
    status: "Ditangani Medis",
    keterangan: "3 mahasiswa mengalami aritmia jantung setelah mengonsumsi minuman energi berlebih"
  }
];

// Data Konsultasi
const konsultasiData = [
  {
    id: 1,
    nama: "Ibu Ratna",
    email: "ratna@email.com",
    tanggal: "2025-02-22",
    topik: "Keamanan Snack Anak",
    pertanyaan: "Bagaimana cara memilih snack yang aman untuk anak usia 5 tahun?",
    status: "Dijawab",
    jawaban: "Pilih produk dengan label BPOM, hindari yang mengandung pewarna berlebih"
  },
  {
    id: 2,
    nama: "Pak Andi",
    email: "andi@email.com",
    tanggal: "2025-02-21",
    topik: "Vape dan Kesehatan",
    pertanyaan: "Apakah vape lebih aman dari rokok konvensional?",
    status: "Dijawab",
    jawaban: "Tidak. Vape tetap mengandung nikotin dan bahan kimia berbahaya untuk paru-paru"
  },
  {
    id: 3,
    nama: "Sinta Dewi",
    email: "sinta@email.com",
    tanggal: "2025-02-20",
    topik: "Suplemen Fitness",
    pertanyaan: "Suplemen apa yang aman untuk program gym?",
    status: "Menunggu",
    jawaban: ""
  },
  {
    id: 4,
    nama: "Bambang",
    email: "bambang@email.com",
    tanggal: "2025-02-19",
    topik: "Minuman Energi",
    pertanyaan: "Berapa batas aman konsumsi minuman energi per hari?",
    status: "Dijawab",
    jawaban: "Maksimal 1 kaleng (150mg kafein) per hari untuk orang dewasa sehat"
  }
];

// Data Berita
const beritaData = [
  {
    id: 1,
    judul: "BPOM Sita 10 Ton Permen Jelly Berformalin",
    kategori: "Penarikan Produk",
    tanggal: "2025-02-20",
    gambar: "assets/img/news/permen-sitaan.jpg",
    ringkasan: "BPOM berhasil menyita 10 ton permen jelly import ilegal yang mengandung formalin dari gudang di Jakarta Utara.",
    isi: "Badan POM RI berhasil melakukan penertiban terhadap peredaran permen jelly import ilegal yang mengandung bahan berbahaya formalin. Operasi yang dilakukan bersama Polda Metro Jaya ini menyita lebih dari 10 ton produk dari sebuah gudang di kawasan Jakarta Utara. Dari hasil uji laboratorium, produk ini terbukti mengandung formalin yang sangat berbahaya bagi kesehatan, terutama anak-anak. BPOM mengimbau masyarakat untuk selalu memeriksa label BPOM sebelum membeli produk makanan.",
    penulis: "Tim Investigasi BPOM",
    views: 1250
  },
  {
    id: 2,
    judul: "Vape Ilegal Marak di Kalangan Pelajar SMA",
    kategori: "Investigasi",
    tanggal: "2025-02-18",
    gambar: "assets/img/news/vape-sekolah.jpg",
    ringkasan: "Survei menunjukkan 35% pelajar SMA di Jakarta pernah mencoba vape dengan kandungan nikotin tinggi tanpa pengawasan.",
    isi: "Hasil survei terbaru dari Kementerian Kesehatan mengungkapkan fakta mengkhawatirkan tentang penyalahgunaan rokok elektrik (vape) di kalangan pelajar. Sebanyak 35% siswa SMA di Jakarta mengaku pernah mencoba vape, dengan 18% di antaranya menjadi pengguna aktif. Yang lebih mengkhawatirkan, sebagian besar vape yang beredar adalah produk ilegal tanpa izin edar BPOM dengan kandungan nikotin sangat tinggi hingga 50mg/ml.",
    penulis: "Redaksi Kesehatan",
    views: 2100
  },
  {
    id: 3,
    judul: "Atlet Meninggal Akibat Suplemen Steroid Ilegal",
    kategori: "Kesehatan",
    tanggal: "2025-02-15",
    gambar: "assets/img/news/steroid-bahaya.jpg",
    ringkasan: "Seorang binaragawan muda meninggal dunia akibat gagal ginjal setelah mengonsumsi suplemen mengandung steroid terlarang.",
    isi: "Dunia fitness Indonesia berduka setelah meninggalnya Ricky (28), seorang binaragawan amatir dari Surabaya, akibat gagal ginjal akut. Hasil autopsi menunjukkan korban mengonsumsi suplemen yang mengandung steroid anabolik terlarang. BPOM memperingatkan bahaya suplemen fitness ilegal yang banyak dijual online dengan janji hasil instan.",
    penulis: "Koresponden Surabaya",
    views: 3400
  },
  {
    id: 4,
    judul: "Minuman Energi Sebabkan 3 Mahasiswa Dirawat",
    kategori: "Peringatan",
    tanggal: "2025-02-12",
    gambar: "assets/img/news/energi-drink.jpg",
    ringkasan: "Tiga mahasiswa UI mengalami gangguan jantung setelah mengonsumsi minuman energi berlebihan saat mengerjakan tugas akhir.",
    isi: "Tiga mahasiswa Universitas Indonesia harus dirawat di UGD setelah mengalami jantung berdebar tidak normal (aritmia) akibat mengonsumsi minuman energi secara berlebihan. Ketiga mahasiswa tersebut mengaku meminum 4-5 kaleng minuman energi dalam sehari untuk tetap terjaga mengerjakan skripsi. Batas aman konsumsi kafein untuk orang dewasa adalah maksimal 400mg per hari.",
    penulis: "Tim Liputan Kampus",
    views: 1890
  },
  {
    id: 5,
    judul: "Daftar Produk Aman dan Direkomendasikan BPOM 2025",
    kategori: "Edukasi",
    tanggal: "2025-02-10",
    gambar: "assets/img/news/produk-aman.jpg",
    ringkasan: "BPOM merilis daftar produk makanan dan minuman yang aman dikonsumsi dan memiliki nilai gizi baik.",
    isi: "Badan POM merilis daftar produk makanan dan minuman yang direkomendasikan untuk konsumsi sehari-hari karena memiliki sertifikasi lengkap dan kandungan gizi yang baik. Konsumen harus cerdas memilih produk. Selalu periksa label BPOM, tanggal kedaluwarsa, dan komposisi bahan. Masyarakat dapat mengecek keaslian produk melalui aplikasi BPOM Mobile atau website cekbpom.pom.go.id",
    penulis: "Desk Edukasi BPOM",
    views: 5600
  }
];

// Statistik Dashboard
const statistikData = {
  totalUsers: 1247,
  totalProduk: 12,
  totalLaporan: 5,
  totalKasus: 4,
  totalKonsultasi: 4,
  produkBerbahaya: 7,
  produkAman: 5,
  laporanBaru: 2
};