// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
var timerDisplay = document.querySelector("#timer")
var startButton = document.querySelector("#start-button")
var highScores = document.querySelector("#high-scores")
var section = document.querySelector("#section-container")
var timerCount = 50;

var questions = [
    {
        text: "What is my favorite sport to watch?",
        choices: ["Lacrosse", "Football", "Volleyball", "Basketball"],
        correctAnswers: "Lacrosse"
    },
    {
        text: "Which sport is my favoite to play?",
        choices: ["Lacrosse", "Football", "Volleyball", "Basketball"],
        correctAnswers: "Volleyball"
    },
    {
        text: "What is my favorite means of travel?",
        choices: ["Boat", "Car", "Plane", "Bike"],
        correctAnswers: "Plane"
    },
    {
        text: "I have how many fingers?",
        choices: ["2", "10", "11", "9"],
        correctAnswers: "10"
    },
    {
        text: "How much money have I given to Riot games?",
        choices: ["25", "50", "100", "Too much to mention"],
        correctAnswers: "Too much to mention"
    }
]

var arrayPosition = 0

startButton.addEventListener("click", function () {
    section.innerHTML = ("");
    countdown();
    qfunction();
})

function qfunction() {
    section.innerHTML = ("");
    var divEl = document.createElement("div");
    var ulEl = document.createElement("ul");
    divEl.textContent = questions[arrayPosition].text;
    ulEl.setAttribute("class", "answers");
    document.getElementById("section-container").appendChild(divEl);
    for (let i = 0; i < questions[arrayPosition].choices.length; i++) {
        var answerChoices = document.createElement("button");
        answerChoices.textContent = questions[arrayPosition].choices[i];
        ulEl.appendChild(answerChoices)
    }
    document.getElementById("section-container").appendChild(ulEl)
    ulEl.addEventListener("click", function (event) {
        if (event.target.matches("button")) {
            if (event.target.textContent !== questions[arrayPosition].correctAnswers) {
                minusTime();
                arrayPosition++
                qfunction()
            } else {
                arrayPosition++
                qfunction()
            }
        }
    })
}

function scores() {
    var yourScore = document.createElement()
    var initials = document.createElement()
}

function minusTime() {
    timerCount -= 10
    timerDisplay.textContent = timerCount
}

function countdown() {
    var timeInterval = setInterval(function () {
        timerCount--
        timerDisplay.textContent = timerCount
        if (timerCount <= 0 || arrayPosition === 5) {
            clearInterval(timeInterval)
        }
    }, 1000);
}

