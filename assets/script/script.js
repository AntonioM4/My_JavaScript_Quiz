var questions = [{
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
]; 
var score = 0;
var startBtn = document.getElementById('start');
var submitBtn = document.getElementById('submit');
var quiz = document.getElementById('quiz');
var timer = document.getElementById('timer');
var timeLimit = 10; 



// start button to start quiz
startBtn.addEventListener('click', startQuiz)
  function startQuiz() {
    console.log('started'); 
    startTimer();
    buildQuiz();
  }

    
  

// submitting the quiz
submitBtn.addEventListener('click', submitQuiz)
  function submitQuiz() {
    stopTimer();
    console.log('submitted no going back now')
  }

 
// building the quiz   
function startTimer(){
  var interval = setInterval(function (){
    document.getElementById('timer').innerHTML=timeLimit;
    timeLimit--; 
    if (timeLimit == 0){
      clearInterval(interval);
      alert('you are out of time!')
    }
  }, 1000);
}

function buildQuiz(){
  
}

function stopTimer(){
  clearInterval(timeLimit);
}

