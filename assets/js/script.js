var container = document.querySelector('.container');
var startButton = document.querySelector('#start-button');
var quizContainer = document.querySelector('#quiz-container');

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

startButton.addEventListener('click', function() {
  container.style.display = 'none';
  quizContainer.style.display = 'flex';
})