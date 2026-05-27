const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 60px 18px rgba(13,59,110,0.3)';
        card.style.transition = 'all 0.2s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 2px 60px rgba(0,0,0,0.08)';
    });
});

const box = document.getElementById('titulo-box');
const h1 = document.getElementById('titulo-h1');
const ro = new ResizeObserver(() => {
    const largura = box.offsetWidth;
    const novo = Math.max(14, Math.min(72, largura / 10));
    h1.style.fontSize = novo + "px";
});
ro.observe(box);
