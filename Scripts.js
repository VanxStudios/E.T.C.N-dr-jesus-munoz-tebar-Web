// Toggle del menú móvil
document.querySelector('.nav-toggle').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
    
    // Cambiar ícono
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            document.querySelector('.nav-toggle i').classList.remove('fa-times');
            document.querySelector('.nav-toggle i').classList.add('fa-bars');
        }
    });
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

// Cerrar el menú al hacer scroll (nueva función)
window.addEventListener('scroll', function() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        document.querySelector('.nav-toggle i').classList.remove('fa-times');
        document.querySelector('.nav-toggle i').classList.add('fa-bars');
    }
});
