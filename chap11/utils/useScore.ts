export const useScore = () => {
    let score: number = 0; // initialize the score to 0

// When the user answers a question correctly, increment the score by 1
    function updateScore() {
        score++;
    }

    return {
        score,
        updateScore
    }

}
