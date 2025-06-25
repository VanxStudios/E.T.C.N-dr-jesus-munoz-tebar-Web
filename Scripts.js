// Gestión del menú móvil - Solución robusta
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

navToggle.addEventListener('click', function() {
    const isOpen = navMenu.classList.toggle('active');
    body.classList.toggle('menu-open', isOpen);
    
    // Cambiar ícono
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-bars', !isOpen);
    icon.classList.toggle('fa-times', isOpen);
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu .nav-link').forEach(anchor => {
    anchor.addEventListener('click', function() {
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
        navToggle.querySelector('i').classList.remove('fa-times');
        navToggle.querySelector('i').classList.add('fa-bars');
    });
});

// Cerrar el menú al hacer scroll
window.addEventListener('scroll', function() {
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
        navToggle.querySelector('i').classList.remove('fa-times');
        navToggle.querySelector('i').classList.add('fa-bars');
    }
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);
    
    if (navMenu.classList.contains('active') && !isClickInsideMenu && !isClickOnToggle) {
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
        navToggle.querySelector('i').classList.remove('fa-times');
        navToggle.querySelector('i').classList.add('fa-bars');
    }
});

// Prevenir el cierre al hacer clic dentro del menú
navMenu.addEventListener('click', function(event) {
    event.stopPropagation();
});

// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.elegant-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});