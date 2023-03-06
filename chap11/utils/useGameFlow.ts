import {Question} from "~/types/question";

export const useGameFlow = () => {


    let currentQuestionIndex = 0;
    let timeLeft = 120; // 2 minutes in seconds
    let timerId; // stores the setInterval ID

// Start the game
    function startGame() {
        startTimer();
    }


// Check the user's answer and update the score
    function checkAnswer(answer) {
        const currentQuestion = questions[currentQuestionIndex];

        if (answer === currentQuestion.answer) {
            updateScore();
        }

        // Move to the next question or end the game if all questions have been answered
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            endGame();
        }
    }

// Start the timer
    function startTimer() {
        timerId = setInterval(() => {
            timeLeft--;
            updateTimer();

            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
    }

// Update the timer display
    function updateTimer() {
        const timerEl = document.getElementById("timer");
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

// End the game and display the final score
    function endGame() {
        clearInterval(timerId); // stop the timer
        const gameEl = document.getElementById("game");
        gameEl.innerHTML = `<h2>Game Over!</h2><p>Your score is ${score}.</p>`;
    }

}
