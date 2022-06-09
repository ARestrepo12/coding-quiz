const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

var colombia = document.createElement("img");
colombia.src ="https://cdn.britannica.com/68/7668-004-08492AB7/Flag-Colombia.jpg";

var portugal = document.createElement("img");
portugal.src ="https://media.istockphoto.com/photos/highly-detailed-flag-of-portugal-portugal-flag-high-detail-national-picture-id1309831191?b=1&k=20&m=1309831191&s=170667a&w=0&h=Go40zkob5UgWZZPtqr4tAhHZ7RHWyQB-dUqrD1TlLQg=";

var slovenia = document.createElement("img");
slovenia.src ="https://media.istockphoto.com/vectors/slovenia-flag-icon-in-flat-style-national-sign-vector-illustration-vector-id1141056883?k=20&m=1141056883&s=612x612&w=0&h=tr5EEJZPAyMsrp567xxkfn95CyvrpsFwxrMiEVGIeOo=";

var australia = document.createElement("img");
australia.src ="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png";

var norway = document.createElement("img");
norway.src ="https://cdn.britannica.com/01/3101-004-506325BB/Flag-Norway.jpg";

var guatemala = document.createElement("img");
guatemala.src ="https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg";

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
    questionElement.append(image)
    if (shuffledQuestions[currentQuestionIndex] = 0) {
        image.src = "https://cdn.britannica.com/68/7668-004-08492AB7/Flag-Colombia.jpg"
        }
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
        question: portugal ,
        answers: [
            {text: 'Serbia', correct: false},
            {text: 'Morocco', correct: false},
            {text: 'Mali', correct: false},
            {text: 'Portugal', correct: true},
        ]
    },
    {
        question: slovenia ,
        answers: [
            {text: 'Slovenia', correct: true},
            {text: 'Serbia', correct: false},
            {text: 'Croatia', correct: false},
            {text: 'Slovakia', correct: false},
        ]
    },
    {
        question: australia ,
        answers: [
            {text: 'New Zealand', correct: false},
            {text: 'Australia', correct: true},
            {text: 'Scotland', correct: false},
            {text: 'Seychelles', correct: false},
        ]
    },
    {
        question: norway ,
        answers: [
            {text: 'Denmark', correct: false},
            {text: 'Finland', correct: false},
            {text: 'Norway', correct: true},
            {text: 'Sweden', correct: false},
        ]
    },
    {
        question: guatemala ,
        answers: [
            {text: 'Guatemala', correct: true},
            {text: 'Honduras', correct: false},
            {text: 'Nicaragua', correct: false},
            {text: 'Haiti', correct: false},
        ]
    }
]
