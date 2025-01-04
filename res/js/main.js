let score = 0;
let upgradeCost = 10;
let cookiesPerClick = 1;

const cookie = document.getElementById('cookie');
const scoreDisplay = document.getElementById('score');
const upgradeButton = document.getElementById("upgrade");

cookie.onclick = () => {
    score += cookiesPerClick;
    scoreDisplay.textContent = score;
};

upgradeButton.onclick = () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        cookiesPerClick += 2;
        upgradeCost += 50;
        scoreDisplay.textContent = score;
        upgradeButton.textContent = `Upgrade: ${upgradeCost}`;
    }
};