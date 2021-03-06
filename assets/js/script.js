// all variables listed at the top, is this hoisting?
var container = document.querySelector('.container');
var startButton = document.querySelector('#start-button');
var quizContainer = document.querySelector('#quiz-container');
var quizQuestion = document.querySelector('#question');
var choice1 = document.querySelector('.choice-text1');
var choice2 = document.querySelector('.choice-text2');
var choice3 = document.querySelector('.choice-text3');
var choice4 = document.querySelector('.choice-text4');
var choiceButton1 = document.querySelector('.choice-button1');
var choiceButton2 = document.querySelector('.choice-button2');
var choiceButton3 = document.querySelector('.choice-button3');
var choiceButton4 = document.querySelector('.choice-button4');
var results = document.querySelector('.results');
var finalScore = document.querySelector('#final-score-container');
var timeEl = document.querySelector('#timer');
var inputInitials = document.querySelector('#input-score');
var submitButton = document.querySelector('#submit-button');
var backButton = document.querySelector('#back-button');
var clearButton = document.querySelector('#clear-button');
var secondsLeft = 75;
var i = 0;
var timerInterval = '';

//all questions and choices into one object
var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        choices: {
            choice1: 'strings',
            choice2: 'booleans',
            choice3: 'alerts',
            choice4: 'numbers'
        },
        correctAnswer: 'choice3'
    },
    {
        question: 'The condition in an if/else statement is enclosed within',
        choices: {
            choice1: 'quotes',
            choice2: 'curly_brackets',
            choice3: 'parantheses',
            choice4: 'square brackets'
        },
        correctAnswer: 'choice3'
    },
    {
        question: 'Arrays in JavaScript can be used to store ____.',
        choices: {
            choice1: 'numbers and strings',
            choice2: 'other arrays',
            choice3: 'booleans',
            choice4: 'all of the above'
        },
        correctAnswer: 'choice4'
    },
    {
        question: 'String values must be enclosed with ____ when being assigned to variables.',
        choices: {
            choice1: 'commas',
            choice2: 'curly brackets',
            choice3: 'quotes',
            choice4: 'parantheses'
        },
        correctAnswer: 'choice3'
    },

    {
        question: 'A very useful tool used during development and debugging for print content to the debugger is:',
        choices: {
            choice1: 'JavaScript',
            choice2: 'terminal/bash',
            choice3: 'for loops',
            choice4: 'console.log'
        },
        correctAnswer: 'choice4'
    }
];

//function that runs to submit the score
function submitScore (event) {
    event.preventDefault();

    //detects if no initals are put in
    if (inputInitials.value === '') {
        alert('Please enter your intials!');
        return;
    }

    //grabs local array of scores
    var highScores = localStorage.getItem('high scores');
    var scoresArray;

    if (highScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(highScores)
    }

    var userScore = {
        initials: inputInitials.value.trim(),
        score: secondsLeft
    };

    console.log(userScore);
    scoresArray.push(userScore);

    var scoresArrayString = JSON.stringify(scoresArray);
    localStorage.setItem('high scores', scoresArrayString);

    //directs user to highscores html
    window.location.href = './highscores.html';
}

//this function ends the quiz and stops the timer
function showResults () {
    clearInterval(timerInterval);
    questions.textContent = 'All done!';
    quizContainer.style.display = 'none';
    finalScore.style.display = 'flex';
}

//each of these functions checks if the answer that the user select is correct and directs the user to a new generation of a question
function checkAnswer1 () {
    if (questions[i].correctAnswer == 'choice1') {
        results.textContent = 'Correct!';
    } else {
        results.textContent = 'Wrong!'
        secondsLeft = secondsLeft - 10;
    }
    i++;
    generateNewQuestion();
}

function checkAnswer2 () {
    if (questions[i].correctAnswer == 'choice2') {
        results.textContent = 'Correct!';
    }  else {
        results.textContent = 'Wrong!';
        secondsLeft = secondsLeft - 10;
    }
    i++;
    generateNewQuestion();
}

function checkAnswer3 () {
    if (questions[i].correctAnswer == 'choice3') {
        results.textContent = 'Correct!';
    }  else {
        results.textContent = 'Wrong!';
        secondsLeft = secondsLeft - 10;
    }
    i++;
    generateNewQuestion();
}

function checkAnswer4 () {
    if (questions[i].correctAnswer == 'choice4') {
        results.textContent = 'Correct!';
    }  else {
        results.textContent = 'Wrong!';
        secondsLeft = secondsLeft - 10;
    }

    i++;
    generateNewQuestion();
}

//generates and displays contents of a new question
function generateNewQuestion () {
    if(i < questions.length) {
        quizQuestion.textContent = questions[i].question;
        choice1.textContent = questions[i].choices.choice1;
        choice2.textContent = questions[i].choices.choice2;
        choice3.textContent = questions[i].choices.choice3;
        choice4.textContent = questions[i].choices.choice4;
        
        choiceButton1.addEventListener('click', checkAnswer1);
        choiceButton2.addEventListener('click', checkAnswer2);
        choiceButton3.addEventListener('click', checkAnswer3);
        choiceButton4.addEventListener('click', checkAnswer4);
    } else if (i === questions.length) {
        showResults();
    }

}

//timer
function setTime() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = 'Timer: ' + secondsLeft;
    }, 1000);

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        showResults();
    }
}

function startQuiz () {
    generateNewQuestion(); 
}

if(startButton){
    startButton.addEventListener('click', function() {
        container.style.display = 'none';
        quizContainer.style.display = 'flex';
        startQuiz();
        setTime();
    });
}

if(submitButton){
    submitButton.addEventListener('click', submitScore);
}

if(backButton){
    backButton.addEventListener('click', function() {
        window.location.href = './index.html';
    });
}