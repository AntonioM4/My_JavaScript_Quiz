var startButton = document.getElementById('start-btn');
var questionContainerElement = document.getElementById('questions-container')
var shuffledQuestions, currentQuestionsIndex


startButton.addEventListener('click', startQuiz)

function startQuiz(){
  console.log('started')
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
}

function setNextQuestion(){

}

function selectAnswer(){

}

var questions = [
  {
    question: 'Which of the following is an advantage of using JavaScript?',
    answers: [
      {text: 'Less server interaction', correct: false },
      {text: 'Immediate feedback to the visitors', correct: false },
      {text: 'Increased interactivity', correct: false },
      {text: 'All of the above.', correct: true},
    ] 
  }
]