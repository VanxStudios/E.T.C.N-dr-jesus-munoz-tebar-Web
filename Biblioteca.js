// Archivo js/scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('ul li');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});
