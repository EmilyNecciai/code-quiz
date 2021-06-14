// QUESTIONS ARRAY
var questions = [
    {question: "What does HTML stand for?", 
    answers: [
        {text: "HyperText Markup Language", correct: true},
        {text: "HyperText Markup Logistics", correct: false},
        {text: "Hand Typed Markup Language", correct: false},
        {text: "HyperText Modal Language", correct: false}
    ]
}
];

// GET NEEDED ELEMENTS FOR MANIPULATION
var questionEl = document.getElementById("question");
var timerEl = document.getElementById("countdown");
var scoreEl = document.getElementById("score");
var quizContent = document.getElementById("quiz-content");
var startBtn = document.getElementById("start-btn");
var showBtn = document.getElementById("show-btn");


// START QUIZ FUNCTION
var startQuiz = function() {
    document.getElementById("start-btn").classList.add("hide");
    countdown();
}


//END QUIZ FUNCTIOn

var endQuiz = function() {
    quizContent.classList.toggle("hide");
    startBtn.classList.toggle("hide");
}


// START AND SHOW QUIZ SCORE AT 0
var quizScore = 0;
scoreEl.innerText = quizScore;

// timer - GOOD
var timerEl = document.getElementById("timer");

var countdown = function() {
    var timeLeft = 10;
    var timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timerEl.textContent = timeLeft + "s";
            timeLeft--;
        } else {
            timerEl.textContent = "Out of time!";
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}


var showHighScores = function() {
    console.log(score);
    //To do: Use Local Storage to show scores
}

//START QUIZ EVENT LISTENER - START BUTTON
startBtn.onclick = startQuiz;
showBtn.onclick = showHighScores;


