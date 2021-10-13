var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('questions-container');
var questionElement = document.getElementById('questions');
var answerButtonsElement = document.getElementById('answer-buttons');
var resultsButton = document.getElementById('results-btn')
var score = 0; 
var userAnswers = [];

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', ()=> {
  currentQuestionIndex++;
  setNextQuestion();
})
// resultsButton.addEventListener('click', results);

function startQuiz() { 
  startButton.classList.add('hide');
  console.log(shuffledQuestions)
  shuffledQuestions = question.sort(()=> Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
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
      score ++;
      console.log(score)
    }else{
      (score - 1)
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
    resultsButton.classList.remove('hide');
  }
}



function results() {
 console.log('Results here')
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
    {text: 'navigator.print();', correct: false },
    {text: 'document.print();', correct: false },
    ]
  }
  ,{
    question: 'Which of the following is correct about callbacks?', 
    answers: [
    {text: 'A callback is a plain JavaScript function passed to some method as an argument or option.', correct: false},
    {text: 'Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.', correct: false },
    {text: 'Both of the above.', correct: true },
    {text: 'None of the above.', correct: false },
    ]
  }
  ,{
    question: 'Which built-in method returns the string representation of the numbers value?',
    answers: [
    {text: 'toValue()', correct: false},
    {text: 'toNumber()', correct: false },
    {text: 'toString()', correct: true },
    {text: 'None of the above.', correct: false },
    ]
  }
  ,{
    question: 'Which of the following function of Boolean object returns the primitive value of the Boolean object?',
    answers: [
    {text: 'toSource()', correct: false},
    {text: 'valueOf()', correct: true },
    {text: 'toString()', correct: false },
    {text: 'None of the above.', correct: false },
    ]
  }
]