// QUESTIONS ARRAY
var questions = [
    {
        question: "What does HTML stand for?", 
        a: "HyperText Markup Language",
        b: "HyperText Markup Logistics", 
        c: "Hand Typed Markup Language",
        d: "HyperText Modal Language",
        correct: "a"
    },
    {
        question: "What does CSS stand for?", 
        a: "Cool Style Sheets",
        b: "Cascading Sheeted Style", 
        c: "Cassandra Style Sheets",
        d: "Cascading Style Sheets",
        correct: "d"
    },
    {
        question: "What does JS stand for?", 
        a: "JumpScript",
        b: "JavaScript", 
        c: "JuneScript",
        d: "JavaStyles",
        correct: "b"
    }
]

// GET NEEDED ELEMENTS FOR MANIPULATION
var questionEl = document.getElementById("question");
var timerEl = document.getElementById("countdown");
var scoreEl = document.getElementById("score");
var quizContent = document.getElementById("quiz-content").classList.add("hide");
var startBtn = document.getElementById("start-btn");
var showBtn = document.getElementById("show-btn");
var ansBtn = document.getElementsByClassName("btn");
var choiceA = document.getElementById("btnA");
var choiceB = document.getElementById("btnB");
var choiceC = document.getElementById("btnC");
var choiceD = document.getElementById("btnD");

// START AND SHOW QUIZ SCORE AT 0
var quizScore = 0;
scoreEl.innerText = quizScore;

for (var i = 0; i < questions.length; i++) {
    questionEl.innerHTML = questions[i].question;
    choiceA.innerHTML = "A: " + questions[i].a;
    choiceB.innerHTML = "B: " + questions[i].b;
    choiceC.innerHTML = "C: " + questions[i].c;
    choiceD.innerHTML = "D: " + questions[i].d;

}


// SHOW QUESTIONS

// var showQuestions = function() {
//     for (var i = 0; i < questions.length; i++) {

//         var userAnswer = document.addEventListener("click", function(){
//             choiceA.innerHTML = "Hello World";
//           });
          
//             // User answer is whatever button the user picks
//             console.log(userAnswer);
//         }
        
//         if (userAnswer === questions[i].correct) {
//             quizScore++;
//         } else {
//             timeLeft = timeLeft - 25;
//         }
//     } 





// START QUIZ FUNCTION
var startQuiz = function() {
    document.getElementById("start-btn").classList.add("hide");
    document.getElementById("quiz-content").classList.toggle("hide");
    countdown();
    // showQuestions();
}


//END QUIZ FUNCTIOn

var endQuiz = function() {
    document.getElementById("start-btn").classList.toggle("hide");
    document.getElementById("quiz-content").classList.toggle("hide");
}



// timer - GOOD
var timerEl = document.getElementById("timer");

var timeLeft = 1000;

var countdown = function() {
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


