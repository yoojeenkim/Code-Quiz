console.log(this);
var header = document.querySelector('.header');
var body = document.querySelector('.body');

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
            chocie3: 'parantheses',
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

var questions = [question1, question2, question3, question4, question5];

//the function init will load the title and start button
function init() {
    header.textContent = 'Coding Quiz Challenge';
    header.setAttribute('style', 'text-align:center; background: #9A8194; color: #EBD8B7; border-bottom: 30px #C6A9A3; font-size: 300%');
    body.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
    body.setAttribute('style','text-align:center; background: #fff; color: #black; border-bottom: 30px #C6A9A3; font-size:200%');
    var startButton = document.createElement('button');
    startButton.appendChild(body);
    startButton.textContent = 'Start Quiz!';
    startButton.setAttribute('style','background-color:purple; color:gold');
}

function startQuiz(questions,quizContainer, resultsContainer, submitButton) {

    //should i use a for loop?
        function showQuestion(questions, quizContainer){
            //code for showing questions
        }

        function showResult(questions, quizContainer, resultsContainer){
            //code for showing the result in the footer
        }

        //show question
        showQuestion(questions,quizContainer);

        //when user clicks correct answer, show the result
        submitButton.onclick = function(){
            showResult(questions, quizContainer,resultsContainer);
        }
    //end of for loop
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