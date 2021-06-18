// QUESTIONS ARRAY
var questions = [
    {
        question: "What does HTML stand for?", 
        choices: [
            "HyperText Markup Language",
            "HyperText Markup Logistics", 
            "Hand Typed Markup Language",
            "HyperText Modal Language"],
        correct: "HyperText Markup Language"
    },
    {
        question: "What does CSS stand for?", 
        choices: [
            "Cool Style Sheets",
            "Cascading Sheeted Style", 
            "Cassandra Style Sheets",
            "Cascading Style Sheets"],
        correct: "Cascading Style Sheets"
    },
    {
        question: "What does JS stand for?", 
        choices: [
            "JumpScript",
            "JavaScript", 
            "JuneScript",
            "JavaStyles"],
        correct: "JavaScript"
    },
    {
        question: "What is the first element in an array?", 
        choices: [
            "1",
            "0", 
            "null"],
        correct: "0"
    },
    {
        question: "What does the array property of .length do?", 
        choices: [
            "Returns the function that created the Array object's prototype.",
            "Joins two or more arrays, and returns a copy of the joined arrays.", 
            "Sets or returns the number of elements in an array.",
            "Creates a new array with the result of calling a function for each array element."],
        correct: "Sets or returns the number of elements in an array."
    }
]

// GET NEEDED ELEMENTS FOR MANIPULATION
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var quizBox = document.getElementById("quiz-box")
var startBtn = document.getElementById("start-btn");
var restartBtn = document.getElementById("restart");
var yourScore = document.getElementById("score");
var highScores = document.getElementById("high-scores");
var yourInitials = document.querySelector("#your-initials");


// STARTING VARIABLES
var yourScore;
var currentQuestion;
var questionCounter;
var timeLeft;


// TIMER FUNCTION

var countdown = function() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.textContent = timeLeft + "s";
        } else {
            clearInterval(timeInterval);
            endQuiz();
            document.getElementById("restart").classList.remove("hide");
        }
    }, 1000);
}


// START QUIZ FUNCTION
var startQuiz = function() {
    document.getElementById("start-btn").classList.add("hide");
    document.getElementById("main").classList.remove("hide");
    timeLeft = 100;
    yourScore = 0;
    questionCounter = 0;
    countdown();
    showQuestions();
    showAnswers();
}

//SHOW QUESTIONS AND EMPTY DIV

function placeholder() {
    quizBox.innerHTML = "";
  }
  
function showQuestions() {
    if (questionCounter > questions.length - 1) {
        endQuiz();
        document.getElementById("restart").classList.remove("hide");
    } else {
        placeholder();
        currentQuestion = questions[questionCounter];
        var questionSpace = document.createElement("h3");
        questionSpace.textContent = currentQuestion.question;
        quizBox.appendChild(questionSpace);
    }
  }

  //SHOW ANSWERS
  
  function showAnswers() {
    for (let i = 0; i < currentQuestion.choices.length; i++) {
      var answerSpace = document.createElement("button");
      answerSpace.setAttribute("choices", currentQuestion.choices[i]);
      answerSpace.textContent = currentQuestion.choices[i];
      quizBox.appendChild(answerSpace);
    }
  }

  //CHOOSE ANSWER AND GET VALUE OF THAT ANSWER FOR COMPARE ANSWERS FUNCTION
  
quizBox.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.matches("button")) {
      var chosenAnswer = e.target.getAttribute("choices");
      correctAnswer(chosenAnswer);
      console.log(chosenAnswer);
    }
  });
  
  // COMPARE ANSWERS
  function correctAnswer(chosenAnswer) {
    if (chosenAnswer === currentQuestion.correct) {
        questionCounter++;
        yourScore++;
        document.getElementById("score").innerHTML = yourScore;

        showQuestions();
        showAnswers();
    } else {
        questionCounter++;  
        timeLeft = timeLeft - 10;
        showQuestions();
        showAnswers();
    }
  }


//END QUIZ FUNCTION

var endQuiz = function() {
    document.getElementById("main").classList.add("hide");
    document.getElementById("restart").classList.add("hide");
    clearInterval(timeLeft);
    
    if (timeLeft === 0 || timeLeft === null) {
        timerEl.textContent = "Out of time!";

    } else {
        var endQuiz = document.createElement("h3");
        endQuiz.textContent = "You completed the questions!";
        document.getElementById("main").classList.add("hide");
        quizBox.appendChild(endQuiz);
    }
}

//STORE YOUR SCORE FUNCTION
function storeScore(){
    if (score.innerHTML === undefined || yourInitials.value === undefined) {
        alert("You must input your initials or score above 0 to save your score.")
    } else {
        // console.log(score.innerHTML);
        // console.log(yourInitials.value);
    
        localStorage.setItem("score", JSON.stringify(score.innerHTML));  
        // Element.setAttribute("your-initials", yourInitials.textContent);
        localStorage.setItem("your-initials", JSON.stringify(yourInitials.value));
    
    }
   }

   // SHOW HIGH SCORES FUNCTION
var showHighScores = function() {

        var storedScores = JSON.parse(localStorage.getItem("score"));
        var storedInitials = JSON.parse(localStorage.getItem("your-initials"));

        highScores.innerHTML = storedInitials + "&emsp;" + storedScores;

}

//START QUIZ EVENT LISTENER - START BUTTON
startBtn.addEventListener("click", function (e) {
    e.preventDefault();
    startQuiz();
  });
  
  restartBtn.addEventListener("click", function (e) {
    e.preventDefault();
    startQuiz();
  });


//CODE GRAVEYARD
//MAY USE FOR LOOPING HIGH SCORES LATER.
//     // for (var i = 0; i < localStorage.length; i++){

//         // yourInitials = "EN";
//         // yourScore = 100;

//         // document.getElementById("high-scores").innerHTML = storedInitials + "&emsp;" + storedScores;
//         // var li = document.createElement("high-scores");

//         // highScores.appendChild(li);
//         // li.innerHTML = storedInitials[i] + "&emsp;" + storedScores[i];

//     // }
