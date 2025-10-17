const container = document.querySelector('.container');
const card = document.querySelector('.card');

container.addEventListener('mousemove', (e) => {
    card.style.transition = 'transform 0.1s ease';

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * 40;
    const rotateY = (x / rect.width) * 40;

    card.style.transform = `rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`;
});

container.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.6s ease';
    card.style.transform = 'rotateY(0) rotateX(0)';
});