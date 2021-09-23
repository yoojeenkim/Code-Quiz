//variables used for function to display high scores
var list = document.querySelector('.list');

//function that is called upon start up to display high scores
function displayScore() {
    //retrieves object and converts to array from local storage
    var storedHighScores = JSON.parse(localStorage.getItem('high scores'));

    if (storedHighScores !== null) {
        //runs through a for loop to create an list item for each score in the array
        for (var i=0; i < storedHighScores.length; i++) {
            storedHighScores.sort((a,b) => parseFloat(b.score) - parseFloat(a.score));
            var newLine = document.createElement("li");
            newLine.textContent = storedHighScores[i].initials + ' - ' + storedHighScores[i].score;
            list.appendChild(newLine);
        }
    } else return;
}

//function that clears scores
function clearScore() {
    //clears local storage
    localStorage.clear();
    //runs through display function again to make sure no items are printed
    displayScore();
    //reloads page to refresh the list of items
    location.reload();
}

//if the clear highscores button is pressed, call function to clear the scores
if(clearButton){
    clearButton.addEventListener('click', clearScore);
}

//displays score upon arrival of high scores html
displayScore();