// Header Scroll Effect
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('py-0');
                header.classList.remove('py-4');
            } else {
                header.classList.remove('py-0');
            }
        });
    }

    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        const icon = btn.querySelector('i');
        
        btn.addEventListener('click', () => {
            menu.classList.toggle('translate-x-full');
            if(menu.classList.contains('translate-x-full')){
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        });
    }

    // Set active nav link based on current page
    function setActiveNav(pageName) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        const navLink = document.getElementById('nav-' + pageName);
        if (navLink) {
            navLink.classList.add('active');
        }
    }

    // Get current page from URL
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    setActiveNav(currentPage);
});
