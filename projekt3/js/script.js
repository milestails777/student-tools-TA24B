const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const quesionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container")


const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "numbrid";
let numberOfQuestions = 15;
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswersCount = 0;

const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `You answered <b>${correctAnswersCount}</b> out of <b>${numberOfQuestions}</b> questions correctly.
      Great try!`;
    document.querySelector(".result-message").innerHTML = resultText;

    const lastResult = {
        category: quizCategory,
        total: numberOfQuestions,
        correct: correctAnswersCount,
        date: new Date().toLocaleString()
    };
    localStorage.setItem("lastQuizResult", JSON.stringify(lastResult));

    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push(lastResult);
    highScores.sort((a, b) => b.correct - a.correct); 
    highScores = highScores.slice(0, 5); 
    localStorage.setItem("highScores", JSON.stringify(highScores));

    displayLastResult();
};

const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;
}

const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;

        if(currentTime <= 0) {
            clearInterval(timer);
            highlightCorrectAnswer();
            nextQuestionBtn.style.visibility = "visible";
            quizContainer.querySelector(".quiz-timer").style.background = "#c31402";

            answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

        }
    }, 1000);
}

const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    if(questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
        return showQuizResult();
    }

    const availableQuestion = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
    const randomQuestion = availableQuestion[Math.floor(Math.random() * categoryQuestions.length)];
    
    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;

    
}

const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);

    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');
    !isCorrect ? highlightCorrectAnswer() : correctAnswersCount++;

    const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

    nextQuestionBtn.style.visibility = "visible";
}

const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if(!currentQuestion) return;
    
    resetTimer();
    startTimer();

    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = "hidden";
    quizContainer.querySelector(".quiz-timer").style.background = "#3d3b3be3";
    document.querySelector(".quiz-question").textContent = currentQuestion.question;
    quesionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index));
    })
}

const startQuiz = () => {
    configContainer.style.display = "none";
    quizContainer.style.display = "block";

    //I cannot solve problem with this part of code, it literally doesn't work!

    quizCategory = configContainer.querySelector(".category-option.active").textContent;
    numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);

    renderQuestion();

}

document.querySelectorAll(".category-option, .question-option").forEach(option => {
    option.addEventListener("click", () => {
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
})

const resetQuiz = () => {
    resetTimer();
    correctAnswersCount = 0;
    questionsIndexHistory.length = 0;
    configContainer.style.display = "block";
    resultContainer.style.display = "none";
}

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);

//andmebaasid
const displayLastResult = () => {
    const resultData = localStorage.getItem("lastQuizResult");
    if (!resultData) return;

    const result = JSON.parse(resultData);
    const resultText = `
      The Last Result: <b>${result.correct}</b> из <b>${result.total}</b><br>
      Category: <b>${result.category}</b><br>
      Date: ${result.date}
    `;
    document.querySelector(".last-result-text").innerHTML = resultText;
};

const displayHighScores = () => {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    const list = document.querySelector(".highscores-list");
    list.innerHTML = "";

    highScores.forEach((entry, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <b>${index + 1}.</b> ${entry.correct}/${entry.total} - <i>${entry.category}</i> <br><small>${entry.date}</small>
        `;
        list.appendChild(li);
    });
};

window.addEventListener("DOMContentLoaded", () => {
    displayLastResult();
    displayHighScores();
});

document.querySelector(".erase-result-btn").addEventListener("click", () => {
    localStorage.removeItem("lastQuizResult");
    document.querySelector(".last-result-text").innerHTML = "Result is erased";
});

const music = document.getElementById("background-music");
const musicBtn = document.querySelector(".music-toggle-btn");
const musicIcon = musicBtn.querySelector("span");

const isMusicOn = localStorage.getItem("musicOn") === "true";
if (isMusicOn) {
    music.play().catch(() => {});
    musicIcon.textContent = "pause";
}

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicIcon.textContent = "pause";
        localStorage.setItem("musicOn", "true");
    } else {
        music.pause();
        musicIcon.textContent = "music_note";
        localStorage.setItem("musicOn", "false");
    }
});
//55:13