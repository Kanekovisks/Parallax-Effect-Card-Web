/*
LINKS PARA CONSULTA:
https://www.w3schools.com/js/default.asp - W3S School JavaScript
https://developer.mozilla.org/en-US/docs/Web/JavaScript - MDN Web Docs JavaScript
*/

// Definição de constantes das classes
const container = document.querySelector('.container'); // Definição de "container"
const card = document.querySelector('.card'); // Definição de "card"

// Detector de sobreposição do mouse
container.addEventListener('mousemove', (e) => {
    // Definição de suavidade durante sobreposição
    card.style.transition = 'transform 0.1s ease';

    // Dados de área do card
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2; // Definição de área X
    const y = e.clientY - rect.top - rect.height / 2; // Definição de área Y

    // Movimento de sobreposição do cursor
    const rotateX = (y / rect.height) * 40; // Intensidade do movimento Y
    const rotateY = (x / rect.width) * 40; // Instensidade do movimento X

    // Angulação de rotação do card
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`; // Ângulo de rotação de interação com o cursor
});


container.addEventListener('mouseleave', () => {
    // Definição de suavidade após retirada do mouse
    card.style.transition = 'transform 0.6s ease'; 

    // Redefinição do posicionamento do card
    card.style.transform = 'rotateY(0) rotateX(0)';
});


