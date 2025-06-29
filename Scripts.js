// Toggle del menú móvil - CORREGIDO Y FUNCIONAL
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const body = document.body;
    
    // Función para abrir/cerrar el menú
    function toggleMenu() {
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            navToggle.innerHTML = '<i class="fas fa-times"></i>';
            body.style.overflow = 'hidden'; // Deshabilitar scroll
        } else {
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            body.style.overflow = 'auto'; // Habilitar scroll
        }
    }
    
    // Evento para el botón de toggle
    navToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Evita que el evento se propague al documento
        toggleMenu();
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', function(e) {
        const isClickInsideMenu = navMenu.contains(e.target);
        const isClickOnToggle = navToggle.contains(e.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Prevenir que el menú se cierre al hacer clic dentro del menú
    navMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
