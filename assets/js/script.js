console.log(this);
var quiz = document.getElementById('#quiz');
var results = document.getElementsByClassName('.results');

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

//the function init will load on startup of webpage
function init() {
    quiz.textContent = 'Coding Quiz Challenge';
}

//sample code
// (function(){
//   // Functions
//   function buildQuiz(){
//     // variable to store the HTML output
//     const output = [];

//     // for each question...
//     myQuestions.forEach(
//       (currentQuestion, questionNumber) => {

//         // variable to store the list of possible answers
//         const answers = [];

//         // and for each available answer...
//         for(letter in currentQuestion.answers){

//           // ...add an HTML radio button
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }

//         // add this question and its answers to the output
//         output.push(
//           `<div class="slide">
//             <div class="question"> ${currentQuestion.question} </div>
//             <div class="answers"> ${answers.join("")} </div>
//           </div>`
//         );
//       }
//     );

//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join('');
//   }

//   function showResults(){

//     // gather answer containers from our quiz
//     const answerContainers = quizContainer.querySelectorAll('.answers');

//     // keep track of user's answers
//     let numCorrect = 0;

//     // for each question...
//     myQuestions.forEach( (currentQuestion, questionNumber) => {

//       // find selected answer
//       const answerContainer = answerContainers[questionNumber];
//       const selector = `input[name=question${questionNumber}]:checked`;
//       const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//       // if answer is correct
//       if(userAnswer === currentQuestion.correctAnswer){
//         // add to the number of correct answers
//         numCorrect++;

//         // color the answers green
//         answerContainers[questionNumber].style.color = 'lightgreen';
//       }
//       // if answer is wrong or blank
//       else{
//         // color the answers red
//         answerContainers[questionNumber].style.color = 'red';
//       }
//     });

//     // show number of correct answers out of total
//     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//   }

//   function showSlide(n) {
//     slides[currentSlide].classList.remove('active-slide');
//     slides[n].classList.add('active-slide');
//     currentSlide = n;
//     if(currentSlide === 0){
//       previousButton.style.display = 'none';
//     }
//     else{
//       previousButton.style.display = 'inline-block';
//     }
//     if(currentSlide === slides.length-1){
//       nextButton.style.display = 'none';
//       submitButton.style.display = 'inline-block';
//     }
//     else{
//       nextButton.style.display = 'inline-block';
//       submitButton.style.display = 'none';
//     }
//   }

//   function showNextSlide() {
//     showSlide(currentSlide + 1);
//   }

//   function showPreviousSlide() {
//     showSlide(currentSlide - 1);
//   }

//   // Variables
//   const quizContainer = document.getElementById('quiz');
//   const resultsContainer = document.getElementById('results');
//   const submitButton = document.getElementById('submit');
//   const myQuestions = [
//     {
//       question: "Who invented JavaScript?",
//       answers: {
//         a: "Douglas Crockford",
//         b: "Sheryl Sandberg",
//         c: "Brendan Eich"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Which one of these is a JavaScript package manager?",
//       answers: {
//         a: "Node.js",
//         b: "TypeScript",
//         c: "npm"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Which tool can you use to ensure code quality?",
//       answers: {
//         a: "Angular",
//         b: "jQuery",
//         c: "RequireJS",
//         d: "ESLint"
//       },
//       correctAnswer: "d"
//     }
//   ];

//   // Kick things off
//   buildQuiz();

//   // Pagination
//   const previousButton = document.getElementById("previous");
//   const nextButton = document.getElementById("next");
//   const slides = document.querySelectorAll(".slide");
//   let currentSlide = 0;

//   // Show the first slide
//   showSlide(currentSlide);

//   // Event listeners
//   submitButton.addEventListener('click', showResults);
//   previousButton.addEventListener("click", showPreviousSlide);
//   nextButton.addEventListener("click", showNextSlide);
// })();

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