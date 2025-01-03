let score = 0;

const cookie = document.getElementById('cookie');
const scoreDisplay = document.getElementById('score');

cookie.onclick  = () => {
    score++;
    scoreDisplay.textContent = score;
};