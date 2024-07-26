function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
let score = 0;

ball.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = 'Score: ' + score;
    moveBall();
});

function moveBall() {
    const container = document.getElementById('game-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const newTop = Math.random() * (containerHeight - 50);
    const newLeft = Math.random() * (containerWidth - 50);

    ball.style.top = newTop + 'px';
    ball.style.left = newLeft + 'px';
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
