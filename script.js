const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

var colombia = "https://cdn.britannica.com/68/7668-004-08492AB7/Flag-Colombia.jpg";

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})



function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
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


}

const questions = [
    {
        question: colombia ,
        answers: [
            {text: 'Colombia', correct: true},
            {text: 'Bolivia', correct: false},
            {text: 'Ecuador', correct: false},
            {text: 'Spain', correct: false},
        ]
    },
    {
        question: colombia ,
        answers: [
            {text: 'Serbia', correct: false},
            {text: 'Morocco', correct: false},
            {text: 'Mali', correct: false},
            {text: 'Portugal', correct: true},
        ]
    },
    {
        question: colombia ,
        answers: [
            {text: 'Slovenia', correct: true},
            {text: 'Serbia', correct: false},
            {text: 'Croatia', correct: false},
            {text: 'Slovakia', correct: false},
        ]
    },
    {
        question: colombia ,
        answers: [
            {text: 'New Zealand', correct: false},
            {text: 'Australia', correct: true},
            {text: 'Scotland', correct: false},
            {text: 'Seychelles', correct: false},
        ]
    },
    {
        question: colombia ,
        answers: [
            {text: 'Denmark', correct: false},
            {text: 'Finland', correct: false},
            {text: 'Norway', correct: true},
            {text: 'Sweden', correct: false},
        ]
    },
    {
        question: colombia ,
        answers: [
            {text: 'Guatemala', correct: true},
            {text: 'Honduras', correct: false},
            {text: 'Nicaragua', correct: false},
            {text: 'Haiti', correct: false},
        ]
    }
]
