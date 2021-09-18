console.log(this);
var startButton = document.querySelector('.start-button');
var header = document.querySelector('.header');

var question1 = {
    question: 'Commonly used data types DO NOT include:',
    choice1: 'strings',
    choice2: 'booleans',
    choice3: 'alerts',
    choice4: 'numbers'
};

var question2 = {
    question: 'The condition in an if/else statement is enclosed within',
    choice1: 'quotes',
    choice2: 'curly_brackets',
    chocie3: 'parantheses',
    choice4: 'square brackets'
};

var question3 = {
    question: 'Arrays in JavaScript can be used to store ____.',
    choice1: 'numbers and strings',
    choice2: 'other arrays',
    choice3: 'booleans',
    choice4: 'all of the above'
};

var question4 = {
    question: 'String values must be enclosed with ____ when being assigned to variables.',
    choice1: 'commas',
    choice2: 'curcly brackets',
    choice3: 'quotes',
    choice4: 'parantheses'
};

var question5 = {
    question: 'A very useful tool used during development and debugging for print content to the debugger is:',
    choice1: 'JavaScript',
    choice2: 'terminal/bash',
    choice3: 'for loops',
    choice4: 'console.log'
};

var questions = [question1, question2, question3, question4, question5];

//the function init will load the title and start button
function init() {
    header.textContent = 'Coding Quiz Challenge';
    header.setAttribute = 'style, text-align:center;'
}

// var timer = document.getElementById ('timer');

// function countdown() {
//     var timeLeft = 80;

//     //used a setInterval method to call the function to move in increments of 1000 milliseconds down
//     var timeInterval = setInterval(function() {
//         timeLeft--;
//         timer.textContent = 'Timer: ' + timeLeft;

//         if(timeLeft === 0) {
//             //this will end the game
//             clearInterval(timeInterval);
//             //reset the game back to original
//             //displayYouLostMessage();
//         }
//     }, 1000);
// }

//init will fire up the function on startup
init();