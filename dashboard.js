// SIPKOH Dashboard Script - Complete
// File: assets/js/dashboard.js

// User Role Management
let currentUser = {
  role: 'admin', // Ubah ke 'public' untuk user biasa
  nama: 'Admin SIPKOH'
};

// Load Data saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  console.log('SIPKOH System Loading...');
  
  // Load Dashboard Stats
  loadDashboardStats();
  
  // Load Laporan Terbaru
  loadLaporanTerbaru();
  
  // Load Konsultasi Terbaru
  loadKonsultasiTerbaru();
  
  // Load data berdasarkan halaman
  if (document.getElementById('produk-table')) {
    loadProdukData();
  }
  
  if (document.getElementById('laporan-table')) {
    loadLaporanData();
  }
  
  if (document.getElementById('kasus-container')) {
    loadKasusData();
  }
  
  if (document.getElementById('konsultasi-table')) {
    loadKonsultasiData();
  }
  
  if (document.getElementById('news-container')) {
    loadBeritaData();
  }
  
  console.log('SIPKOH System Ready!');
});

// ============== DASHBOARD FUNCTIONS ==============

function loadDashboardStats() {
  if (typeof statistikData === 'undefined') return;
  
  const stats = statistikData;
  
  // Update cards dengan animasi
  updateStatCard('total-users', stats.totalUsers);
  updateStatCard('total-produk', stats.totalProduk);
  updateStatCard('total-laporan', stats.totalLaporan);
  updateStatCard('total-kasus', stats.totalKasus);
  
  console.log('✓ Dashboard statistics loaded');
}

function updateStatCard(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value.toLocaleString('id-ID');
  }
}

function loadLaporanTerbaru() {
  const container = document.getElementById('laporan-terbaru-list');
  if (!container || typeof laporanData === 'undefined') return;
  
  const laporan = laporanData.slice(0, 5).sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
  
  if (laporan.length === 0) {
    container.innerHTML = '<p class="text-center text-muted">Tidak ada laporan terbaru</p>';
    return;
  }
  
  let html = '<div class="list-group">';
  laporan.forEach(lap => {
    const produk = produkData.find(p => p.id === lap.produkId);
    const statusClass = lap.status === 'Darurat' ? 'danger' : lap.status === 'Diproses' ? 'warning' : 'success';
    
    html += `
      <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h6 class="mb-1">${produk ? produk.nama : 'Produk Tidak Diketahui'}</h6>
          <small class="text-muted">${formatTanggal(lap.tanggal)}</small>
        </div>
        <p class="mb-1 small">${lap.deskripsi}</p>
        <small>
          <span class="badge bg-${statusClass}">${lap.status}</span>
          <span class="text-muted ms-2"><i class="bi bi-geo-alt"></i> ${lap.lokasi}</span>
        </small>
      </div>
    `;
  });
  html += '</div>';
  
  container.innerHTML = html;
  console.log('✓ Laporan terbaru loaded');
}

function loadKonsultasiTerbaru() {
  const container = document.getElementById('konsultasi-terbaru-list');
  if (!container || typeof konsultasiData === 'undefined') return;
  
  const konsultasi = konsultasiData.slice(0, 5).sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
  
  if (konsultasi.length === 0) {
    container.innerHTML = '<p class="text-center text-muted">Tidak ada konsultasi terbaru</p>';
    return;
  }
  
  let html = '<div class="list-group">';
  konsultasi.forEach(kon => {
    const statusClass = kon.status === 'Menunggu' ? 'warning' : 'success';
    
    html += `
      <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h6 class="mb-1">${kon.topik}</h6>
          <small class="text-muted">${formatTanggal(kon.tanggal)}</small>
        </div>
        <p class="mb-1 small">${kon.pertanyaan}</p>
        <small>
          <span class="badge bg-${statusClass}">${kon.status}</span>
          <span class="text-muted ms-2"><i class="bi bi-person"></i> ${kon.nama}</span>
        </small>
      </div>
    `;
  });
  html += '</div>';
  
  container.innerHTML = html;
  console.log('✓ Konsultasi terbaru loaded');
}

// ============== PRODUK FUNCTIONS ==============

function loadProdukData() {
  const tbody = document.querySelector('#produk-table tbody');
  if (!tbody || typeof produkData === 'undefined') return;
  
  tbody.innerHTML = '';
  
  produkData.forEach(produk => {
    const statusClass = produk.status.includes('Berbahaya') ? 'danger' : 
                       produk.status.includes('Direkomendasikan') ? 'success' : 'info';
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${produk.nama}</td>
      <td>${produk.merk}</td>
      <td>${produk.kategori}</td>
      <td><span class="badge bg-${statusClass}">${produk.status}</span></td>
      <td>${produk.produsen}</td>
      <td>
        ${currentUser.role === 'admin' ? `
          <button class="btn btn-sm btn-primary" onclick="editProduk(${produk.id})" title="Edit">
            <i class="bi bi-pencil"></i>
          </button>
          <button class="btn btn-sm btn-danger" onclick="hapusProduk(${produk.id})" title="Hapus">
            <i class="bi bi-trash"></i>
          </button>
        ` : ''}
        <button class="btn btn-sm btn-info" onclick="lihatDetail(${produk.id})" title="Detail">
          <i class="bi bi-eye"></i>
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
  
  console.log('✓ Produk data loaded:', produkData.length, 'items');
}

function filterProduk() {
  const searchTerm = document.getElementById('search-produk')?.value.toLowerCase() || '';
  const statusFilter = document.getElementById('filter-status')?.value || 'Semua Status';
  const kategoriFilter = document.getElementById('filter-kategori')?.value || 'Semua Kategori';
  
  let filtered = produkData;
  
  if (searchTerm) {
    filtered = filtered.filter(p => 
      p.nama.toLowerCase().includes(searchTerm) || 
      p.merk.toLowerCase().includes(searchTerm)
    );
  }
  
  if (statusFilter !== 'Semua Status') {
    filtered = filtered.filter(p => p.status.includes(statusFilter));
  }
  
  if (kategoriFilter !== 'Semua Kategori') {
    filtered = filtered.filter(p => p.kategori === kategoriFilter);
  }
  
  // Render filtered data
  const tbody = document.querySelector('#produk-table tbody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  filtered.forEach(produk => {
    const statusClass = produk.status.includes('Berbahaya') ? 'danger' : 
                       produk.status.includes('Direkomendasikan') ? 'success' : 'info';
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${produk.nama}</td>
      <td>${produk.merk}</td>
      <td>${produk.kategori}</td>
      <td><span class="badge bg-${statusClass}">${produk.status}</span></td>
      <td>${produk.produsen}</td>
      <td>
        ${currentUser.role === 'admin' ? `
          <button class="btn btn-sm btn-primary" onclick="editProduk(${produk.id})">
            <i class="bi bi-pencil"></i>
          </button>
          <button class="btn btn-sm btn-danger" onclick="hapusProduk(${produk.id})">
            <i class="bi bi-trash"></i>
          </button>
        ` : ''}
        <button class="btn btn-sm btn-info" onclick="lihatDetail(${produk.id})">
          <i class="bi bi-eye"></i>
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
  
  console.log('✓ Filter applied:', filtered.length, 'results');
}

// ============== LAPORAN FUNCTIONS ==============

function loadLaporanData() {
  const tbody = document.querySelector('#laporan-table tbody');
  if (!tbody || typeof laporanData === 'undefined') return;
  
  tbody.innerHTML = '';
  
  laporanData.forEach(laporan => {
    const produk = produkData.find(p => p.id === laporan.produkId);
    const statusClass = laporan.status === 'Darurat' ? 'danger' : 
                       laporan.status === 'Diverifikasi' ? 'success' : 'warning';
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${laporan.id}</td>
      <td>${produk ? produk.nama : 'N/A'}</td>
      <td>${laporan.pelapor}</td>
      <td>${formatTanggal(laporan.tanggal)}</td>
      <td>${laporan.lokasi}</td>
      <td><span class="badge bg-${statusClass}">${laporan.status}</span></td>
      <td>
        <button class="btn btn-sm btn-info" onclick="lihatLaporan(${laporan.id})" title="Lihat">
          <i class="bi bi-eye"></i>
        </button>
        ${currentUser.role === 'admin' ? `
          <button class="btn btn-sm btn-success" onclick="prosesLaporan(${laporan.id})" title="Proses">
            <i class="bi bi-check-circle"></i>
          </button>
        ` : ''}
      </td>
    `;
    tbody.appendChild(row);
  });
  
  console.log('✓ Laporan data loaded');
}

function lihatLaporan(id) {
  const laporan = laporanData.find(l => l.id === id);
  const produk = produkData.find(p => p.id === laporan.produkId);
  
  const detail = `
=== DETAIL LAPORAN #${laporan.id} ===

Produk: ${produk ? produk.nama : 'N/A'}
Pelapor: ${laporan.pelapor}
Tanggal: ${formatTanggal(laporan.tanggal)}
Lokasi: ${laporan.lokasi}
Status: ${laporan.status}

Deskripsi:
${laporan.deskripsi}
  `;
  
  alert(detail);
}

function prosesLaporan(id) {
  if (currentUser.role !== 'admin') {
    alert('Akses ditolak! Hanya admin yang dapat memproses laporan.');
    return;
  }
  alert(`Memproses laporan #${id}...\n(Fitur dalam pengembangan)`);
}

// ============== KASUS FUNCTIONS ==============

function loadKasusData() {
  const container = document.getElementById('kasus-container');
  if (!container || typeof kasusData === 'undefined') return;
  
  container.innerHTML = '';
  
  kasusData.forEach(kasus => {
    const produk = produkData.find(p => p.id === kasus.produkId);
    const statusClass = kasus.status.includes('Polisi') ? 'danger' : 
                       kasus.status.includes('Dinkes') ? 'warning' : 'info';
    
    const card = document.createElement('div');
    card.className = 'col-md-6 mb-4';
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title text-danger">
            <i class="bi bi-exclamation-triangle-fill"></i> ${kasus.judul}
          </h5>
          <p class="card-text">${kasus.keterangan}</p>
          <div class="mb-2">
            <small class="text-muted">
              <i class="bi bi-calendar"></i> ${formatTanggal(kasus.tanggal)} •
              <i class="bi bi-geo-alt"></i> ${kasus.lokasi}
            </small>
          </div>
          <div class="mb-2">
            <span class="badge bg-danger"><i class="bi bi-person-x"></i> Korban: ${kasus.korban} orang</span>
            <span class="badge bg-${statusClass}">${kasus.status}</span>
          </div>
          ${produk ? `<small class="text-muted">Produk Terkait: <strong>${produk.nama}</strong></small>` : ''}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  
  console.log('✓ Kasus data loaded');
}

// ============== KONSULTASI FUNCTIONS ==============

function loadKonsultasiData() {
  const tbody = document.querySelector('#konsultasi-table tbody');
  if (!tbody || typeof konsultasiData === 'undefined') return;
  
  tbody.innerHTML = '';
  
  konsultasiData.forEach(konsul => {
    const statusClass = konsul.status === 'Menunggu' ? 'warning' : 'success';
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${konsul.id}</td>
      <td>${konsul.nama}</td>
      <td>${konsul.topik}</td>
      <td>${konsul.pertanyaan.substring(0, 50)}...</td>
      <td>${formatTanggal(konsul.tanggal)}</td>
      <td><span class="badge bg-${statusClass}">${konsul.status}</span></td>
      <td>
        <button class="btn btn-sm btn-info" onclick="lihatKonsultasi(${konsul.id})" title="Lihat">
          <i class="bi bi-eye"></i>
        </button>
        ${currentUser.role === 'admin' && konsul.status === 'Menunggu' ? `
          <button class="btn btn-sm btn-success" onclick="jawabKonsultasi(${konsul.id})" title="Jawab">
            <i class="bi bi-reply"></i>
          </button>
        ` : ''}
      </td>
    `;
    tbody.appendChild(row);
  });
  
  console.log('✓ Konsultasi data loaded');
}

function lihatKonsultasi(id) {
  const konsul = konsultasiData.find(k => k.id === id);
  
  const detail = `
=== KONSULTASI #${konsul.id} ===

Nama: ${konsul.nama}
Email: ${konsul.email}
Topik: ${konsul.topik}
Tanggal: ${formatTanggal(konsul.tanggal)}
Status: ${konsul.status}

Pertanyaan:
${konsul.pertanyaan}

${konsul.jawaban ? `Jawaban:\n${konsul.jawaban}` : 'Belum ada jawaban.'}
  `;
  
  alert(detail);
}

function jawabKonsultasi(id) {
  if (currentUser.role !== 'admin') {
    alert('Akses ditolak! Hanya admin yang dapat menjawab konsultasi.');
    return;
  }
  
  const konsul = konsultasiData.find(k => k.id === id);
  const jawaban = prompt(`Jawab konsultasi dari ${konsul.nama}:\n\nPertanyaan: ${konsul.pertanyaan}\n\nJawaban Anda:`);
  
  if (jawaban) {
    alert('Jawaban berhasil dikirim!\n(Fitur dalam pengembangan)');
  }
}

// ============== BERITA FUNCTIONS ==============

function loadBeritaData() {
  const container = document.getElementById('news-container');
  if (!container || typeof beritaData === 'undefined') return;
  
  container.innerHTML = '';
  
  beritaData.forEach(berita => {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-4 mb-4';
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${berita.gambar}" class="card-img-top" alt="${berita.judul}" 
             onerror="this.src='https://via.placeholder.com/400x250?text=Berita+SIPKOH'" 
             style="height: 200px; object-fit: cover;">
        <div class="card-body">
          <span class="badge bg-primary mb-2">${berita.kategori}</span>
          <h5 class="card-title">${berita.judul}</h5>
          <p class="card-text">${berita.ringkasan}</p>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <small class="text-muted">
              <i class="bi bi-calendar"></i> ${formatTanggal(berita.tanggal)}
            </small>
            <small class="text-muted">
              <i class="bi bi-eye"></i> ${berita.views.toLocaleString('id-ID')}
            </small>
          </div>
        </div>
        <div class="card-footer bg-white">
          <button class="btn btn-sm btn-primary" onclick="bacaBerita(${berita.id})">
            <i class="bi bi-book"></i> Baca Selengkapnya
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  
  console.log('✓ Berita data loaded');
}

function bacaBerita(id) {
  const berita = beritaData.find(b => b.id === id);
  
  alert(`${berita.judul}\n\n${berita.isi}\n\n— ${berita.penulis}`);
}

// ============== ADMIN FUNCTIONS ==============

function tambahProduk() {
  if (currentUser.role !== 'admin') {
    alert('❌ Akses Ditolak!\n\nAnda tidak memiliki izin untuk menambah produk.\nHanya ADMIN yang dapat menambah produk berbahaya ke database.');
    return;
  }
  alert('✓ Akses Admin Terverifikasi\n\nForm tambah produk akan dibuka.\n(Fitur dalam pengembangan)');
}

function editProduk(id) {
  if (currentUser.role !== 'admin') {
    alert('❌ Akses Ditolak!\n\nHanya ADMIN yang dapat mengedit produk.');
    return;
  }
  
  const produk = produkData.find(p => p.id === id);
  alert(`✓ Edit Produk (Admin Only)\n\nProduk: ${produk.nama}\n(Fitur dalam pengembangan)`);
}

function hapusProduk(id) {
  if (currentUser.role !== 'admin') {
    alert('❌ Akses Ditolak!\n\nHanya ADMIN yang dapat menghapus produk.');
    return;
  }
  
  const produk = produkData.find(p => p.id === id);
  
  if (confirm(`⚠️ PERHATIAN!\n\nApakah Anda yakin ingin menghapus produk ini?\n\nNama: ${produk.nama}\nStatus: ${produk.status}\n\nTindakan ini tidak dapat dibatalkan!`)) {
    alert('✓ Produk berhasil dihapus!\n(Demo Mode - Data tidak benar-benar dihapus)');
  }
}

// ============== PUBLIC FUNCTIONS ==============

function lihatDetail(id) {
  const produk = produkData.find(p => p.id === id);
  
  const detail = `
═══ DETAIL PRODUK ═══

📦 Nama: ${produk.nama}
🏷️ Merk: ${produk.merk}
📂 Kategori: ${produk.kategori}
⚠️ Status: ${produk.status}
🏭 Produsen: ${produk.produsen}
🔴 Tingkat Bahaya: ${produk.tingkatBahaya}

📋 Alasan:
${produk.alasan}

📅 Tanggal Data: ${formatTanggal(produk.tanggal)}
  `;
  
  alert(detail);
}

// ============== HELPER FUNCTIONS ==============

function formatTanggal(tanggal) {
  const date = new Date(tanggal);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('id-ID', options);
}

// Event Listeners
if (document.getElementById('btn-filter')) {
  document.getElementById('btn-filter').addEventListener('click', filterProduk);
}

if (document.getElementById('search-produk')) {
  document.getElementById('search-produk').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
      filterProduk();
    }
  });
}

console.log('✓ SIPKOH Dashboard Script Loaded Successfully!');
// ============== ADDITIONAL FUNCTIONS FOR COMPATIBILITY ==============
// Tambahkan di PALING BAWAH file dashboard.js yang sudah ada

// Override loadLaporanTerbaru dengan styling baru
function loadLaporanTerbaru() {
  const container = document.getElementById('laporan-terbaru-list');
  if (!container || typeof laporanData === 'undefined') return;
  
  const laporan = laporanData.slice(0, 5).sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
  
  if (laporan.length === 0) {
    container.innerHTML = '<p class="text-center text-muted">Tidak ada laporan terbaru</p>';
    return;
  }
  
  let html = '';
  laporan.forEach(lap => {
    const produk = produkData.find(p => p.id === lap.produkId);
    const statusClass = lap.status === 'Darurat' ? 'danger' : lap.status === 'Diproses' ? 'warning' : 'success';
    
    html += `
      <div class="list-item">
        <h6>${produk ? produk.nama : 'Produk Tidak Diketahui'}</h6>
        <p>${lap.deskripsi}</p>
        <div>
          <span class="badge bg-${statusClass}">${lap.status}</span>
          <span class="text-muted-custom ms-2">
            <i class="bi bi-geo-alt"></i> ${lap.lokasi}
          </span>
          <span class="text-muted-custom ms-2">
            <i class="bi bi-calendar"></i> ${formatTanggal(lap.tanggal)}
          </span>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
  console.log('✓ Laporan terbaru loaded (new style)');
}

// Override loadKonsultasiTerbaru dengan styling baru
function loadKonsultasiTerbaru() {
  const container = document.getElementById('konsultasi-terbaru-list');
  if (!container || typeof konsultasiData === 'undefined') return;
  
  const konsultasi = konsultasiData.slice(0, 5).sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
  
  if (konsultasi.length === 0) {
    container.innerHTML = '<p class="text-center text-muted">Tidak ada konsultasi terbaru</p>';
    return;
  }
  
  let html = '';
  konsultasi.forEach(kon => {
    const statusClass = kon.status === 'Menunggu' ? 'warning' : 'success';
    
    html += `
      <div class="list-item">
        <h6>${kon.topik}</h6>
        <p>${kon.pertanyaan}</p>
        <div>
          <span class="badge bg-${statusClass}">${kon.status}</span>
          <span class="text-muted-custom ms-2">
            <i class="bi bi-person"></i> ${kon.nama}
          </span>
          <span class="text-muted-custom ms-2">
            <i class="bi bi-calendar"></i> ${formatTanggal(kon.tanggal)}
          </span>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
  console.log('✓ Konsultasi terbaru loaded (new style)');
}

// Auto-reload data setelah 500ms untuk memastikan DOM ready
setTimeout(function() {
  if (typeof statistikData !== 'undefined') {
    loadDashboardStats();
    loadLaporanTerbaru();
    loadKonsultasiTerbaru();
    console.log('✓ Auto-reload triggered successfully');
  }
}, 500);

console.log('✓ Dashboard compatibility layer loaded');