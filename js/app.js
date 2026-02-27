const randomQuizBtn = document.getElementById("randomQuizBtn");
const categoryButtons = document.querySelectorAll(".category-btn");
const changeDifficultyBtn = document.getElementById("changeDifficultyBtn");

// RANDOM QUIZ
randomQuizBtn.addEventListener("click", () => {
    localStorage.setItem("quizType", "random");

    if (!hasDifficulty()) {
        openDifficultyModal();
        return;
    }

    window.location.href = "quiz.html";
});

// CATEGORY QUIZ
categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        localStorage.setItem("quizType", "category");
        localStorage.setItem("category", btn.dataset.category);

        if (!hasDifficulty()) {
            openDifficultyModal();
            return;
        }

        window.location.href = "quiz-list.html";
    });
});

// CHANGE DIFFICULTY
changeDifficultyBtn.addEventListener("click", () => {
    openDifficultyModal();
});

const statsBtn = document.getElementById("statsBtn");

if (statsBtn) {
  statsBtn.addEventListener("click", () => {
    window.location.href = "stats.html";
  });
}
