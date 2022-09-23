const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2')
}

const winningScoreSelect = document.querySelector('#ScoreSelect');
let winningScore = 3;
let isGameOver = false;

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
})

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.display.innerText = player.score += 1;

        if (player.score >= winningScore && player.score > opponent.score + 1) {
            isGameOver = true;
            player.display.classList.add('text-success');
            opponent.display.classList.add('text-danger');

            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

winningScoreSelect.addEventListener('change', function () {
    reset();
    winningScore = parseInt(this.value);
})

document.querySelector('#reset').addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.display.innerText = p.score = 0;
        p.button.disabled = false;
        p.display.classList.remove('text-success', 'text-danger');
    }
}