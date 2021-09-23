function displayScore() {
    var storedHighScores = JSON.parse(localStorage.getItem('high scores'));

    for (var i=0; i < storedHighScores.length; i++) {
        storedHighScores.sort((a,b) => parseFloat(b.score) - parseFloat(a.score));
        var newLine = document.createElement("li");
        newLine.textContent = storedHighScores[i] + ' - ' + storedHighScores[i];
        list.appendChild(newLine);
    }
}