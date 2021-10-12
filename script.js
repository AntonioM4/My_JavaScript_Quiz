var score = 0; 
var questions = [
        {
        question: "Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        correctAnswer: "c"
      },
         {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        correctAnswer: "c"
      },
        {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
     }
]
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');


// event listener waiting for user to click start
function startQuiz(){ 
startBtn.addEventListener('click', startQuiz); 
console.log('started')
}

// Building the quiz
function buildQuiz(){}

// after quiz results
function showResults(){}


 