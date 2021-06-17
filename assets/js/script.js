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
    }
]

// GET NEEDED ELEMENTS FOR MANIPULATION
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var quizBox = document.getElementById("quiz-box")
var startBtn = document.getElementById("start-btn");
var yourScore = document.getElementById("score");
var yourInitials = document.getElementById("your-initials");


// STARTING VARIABLES
var quizScore = scoreEl;
var currentQuestion;
var questionCounter;
var timeLeft = 1000;



// START QUIZ FUNCTION
var startQuiz = function() {
    document.getElementById("start-btn").classList.add("hide");
    questionCounter = 0;
    countdown();
    showQuestions();
    showAnswers();
}

//SHOW QUESTIONS

function placeholder() {
    quizBox.innerHTML = "";
  }
  

function showQuestions() {
    if (questionCounter >= questions.length) {
        quizBox.textContent = "You finished all the questions!";
        endQuiz();
        restartQuiz();
        clearInterval(timeLeft);
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

//   //CHOOSE ANSWER
  
quizBox.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.matches("button")) {
      var chosenAnswer = e.target.getAttribute("choices");
      correctAnswer(chosenAnswer);
      console.log(chosenAnswer);
    }
  });
  
// //   // COMPARE ANSWERS
  function correctAnswer(chosenAnswer) {
    if (chosenAnswer === currentQuestion.correct) {
        questionCounter++;
        showQuestions();
        showAnswers();
    } else {
        questionCounter++;  
        timeLeft = timeLeft - 100;
        showQuestions();
        showAnswers();
    }
  }


//END QUIZ FUNCTION

var endQuiz = function() {
    document.getElementById("quiz-box").classList.toggle("hide");
    document.getElementById("restart").classList.toggle("hide");
    quizScore = timeLeft;

}

//RESTART QUIZ
var restartQuiz = function() {
    countdown();
    startQuiz();
    document.getElementById("restart").classList.toggle("hide");
}



// TIMER FUNCTION

var countdown = function() {
    var timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timeLeft--;
            timerEl.textContent = timeLeft + "s";
        } else {
            timerEl.textContent = "Out of time!";
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}


//STORE YOUR SCORE FUNCTION
function storeScore(){

    localStorage.setItem("score", yourScore);  
    localStorage.setItem("your-initials", yourInitials);

    showHighScores();
   }

   // SHOW HIGH SCORES FUNCTION
var showHighScores = function() {

    for (var i = 0; i < localStorage.length; i++){

        // yourInitials = "EN";
        // yourScore = 100;

        localStorage.getItem("score");
        localStorage.getItem("your-initials");

        document.getElementById("high-scores").innerHTML = yourInitials + "&emsp;" + yourScore;

    }
    



    //To do: Use Local Storage to show scores
}


//START QUIZ EVENT LISTENER - START BUTTON
startBtn.addEventListener("click", function (e) {
    e.preventDefault();
    startQuiz();
  });
  

