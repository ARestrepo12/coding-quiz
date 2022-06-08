const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

const shuffledQuestions, currentQuestionIndex

var colombia = "https://cdn.britannica.com/68/7668-004-08492AB7/Flag-Colombia.jpg"

startButton.addEventListener('click', startQuiz)



function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question

}

function selectAnswer() {

}

const question = [
    {
        question: 'what is this' ,
        answers: [
            {text: 'Colombia', correct: true},
            {text: 'Bolivia', correct: false}
        ]
    }
]
