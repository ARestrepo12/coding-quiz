const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const opening = document.getElementById('opening')
const highscore = document.getElementById('high-score')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

highscore.classList.add('hide')

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    opening.classList.add('hide')
    highscore.classList.add('hide')
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
        highscore.classList.remove('hide')
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
        question: "Who was the Premier League Player of the 2021/2022 Season?" ,
        answers: [
            {text: 'Kevin DeBruyne', correct: true},
            {text: 'Mo Salah', correct: false},
            {text: 'Cristiano Ronaldo', correct: false},
            {text: 'Lionel Messi', correct: false},
        ]
    },
    {
        question: "Who were the 2021/2022 Premier League Champions?" ,
        answers: [
            {text: 'Tottenham', correct: false},
            {text: 'Manchester United', correct: false},
            {text: 'Liverpool', correct: false},
            {text: 'Manchester City', correct: true},
        ]
    },
    {
        question: "Which team won zero trophies in the 2021/2022 season?" ,
        answers: [
            {text: 'Manchester United', correct: true},
            {text: 'Manchester City', correct: false},
            {text: 'Liverpool', correct: false},
            {text: 'Real Madrid', correct: false},
        ]
    },
    {
        question: "Which player won the Premier League Young Player of the Season in 2021/2022" ,
        answers: [
            {text: 'Bukayo Saka', correct: false},
            {text: 'Phil Foden', correct: true},
            {text: 'Trent Alexander-Arnold', correct: false},
            {text: 'Mason Greenwood', correct: false},
        ]
    },
    {
        question: "How many goals did Man City score in a span of 5 minutes to win their last game of the season?" ,
        answers: [
            {text: '1', correct: false},
            {text: '2', correct: false},
            {text: '3', correct: true},
            {text: '7', correct: false},
        ]
    },
    {
        question: "How many goals did Man City score in the 2021/2022 season without a striker?" ,
        answers: [
            {text: '99', correct: true},
            {text: '76', correct: false},
            {text: '52', correct: false},
            {text: '66', correct: false},
        ]
    }
]

const startingMinutes = 5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');



function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

startButton.addEventListener('click', () => {
    setInterval(updateCountdown, 1000);
})