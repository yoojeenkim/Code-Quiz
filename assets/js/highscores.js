var list = document.querySelector('.list');

function displayScore() {
    var storedHighScores = JSON.parse(localStorage.getItem('high scores'));

    if (storedHighScores !== null) {
        for (var i=0; i < storedHighScores.length; i++) {
            storedHighScores.sort((a,b) => parseFloat(b.score) - parseFloat(a.score));
            var newLine = document.createElement("li");
            newLine.textContent = storedHighScores[i].initials + ' - ' + storedHighScores[i].score;
            list.appendChild(newLine);
        }
    } else return;
}

function clearScore() {
    localStorage.clear();
    displayScore();
    location.reload();
}

if(clearButton){
    clearButton.addEventListener('click', clearScore);
}

displayScore();