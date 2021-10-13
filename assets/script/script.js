var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('questions-container')
var questionElement = document.getElementById('questions')
var answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', ()=>{
  currentQuestionIndex++;
  setNextQuestion();
})

function startQuiz() { 
  startButton.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  shuffledQuestions = question.sort(()=> Math.random()- .5);
  currentQuestionIndex = 0;
  setNextQuestion(); 
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answers => {
    var button = document.createElement('button');
    button.innerText = answers.text;
    button.classList.add('btn')
    if (answers.correct){
      button.dataset.correct = answers.correct
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  })

}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide');
  while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  }else{
    nextButton.innerText = 'Results';
    nextButton.classlist.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
      }
} 

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
  
}


var question = [
  {
    question: 'Which of the following is an advantage of using JavaScript?',
    answers: [
      {text: 'Less server interaction', correct: false },
      {text: 'Immediate feedback to the visitors', correct: false },
      {text: 'Increased interactivity', correct: false },
      {text: 'All of the above.', correct: true},
    ] 
  }
  ,{
    question: 'Which of the following is the correct syntax to print a page using JavaScript?', 
    answers: [
    {text: 'window.print();', correct: true},
    {text: 'browser.print();', correct: false },
    {text: 'browser.print();', correct: false },
    {text: 'browser.print();', correct: false },
    ]
  }
  ,{
    question: 'Which of the following is the correct syntax to print a page using JavaScript?', 
    answers: [
    {text: 'window.print();', correct: true},
    {text: 'browser.print();', correct: false },
    {text: 'browser.print();', correct: false },
    {text: 'browser.print();', correct: false },
    ]
  }
]