// script.js - Authentication Handler for All Pages

// Cek status login untuk halaman yang membutuhkan autentikasi
function checkAuth() {
    const publicPages = ['index.html', 'login.html', 'register.html', 'tentang.html', 'kontak.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    // Jika belum login dan mencoba akses halaman terproteksi
    if (localStorage.getItem('isLoggedIn') !== 'true' && !publicPages.includes(currentPage)) {
        window.location.href = 'login.html';
        return false;
    }
    
    // Jika sudah login dan mencoba akses halaman login/register
    if (localStorage.getItem('isLoggedIn') === 'true' && 
        (currentPage === 'login.html' || currentPage === 'register.html')) {
        window.location.href = 'index.html';
        return false;
    }
    
    return true;
}

// Logout functionality
function setupLogout() {
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hapus data login dari localStorage
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userRole');
            
            // Redirect ke halaman login
            window.location.href = 'login.html';
        });
    }
}

// Hamburger menu functionality
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    setupLogout();
    setupHamburgerMenu();
    
    // Update active nav link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});