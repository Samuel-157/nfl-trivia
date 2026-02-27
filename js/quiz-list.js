const quizListDiv = document.getElementById("quizList");

// ================= STATE =================

const difficulty = localStorage.getItem("difficulty");
const category = localStorage.getItem("category");

// ===== Dynamic Page Title =====

const categoryNames = {
  players: "Player Quizzes",
  draft: "Draft Quizzes",
  teams: "Team Quizzes"
};

if (categoryNames[category]) {
  document.title = categoryNames[category] + " | NFL Trivia";
}

const validCategories = ["players", "draft", "teams"];

if (!difficulty || !category || !validCategories.includes(category)) {
  window.location.href = "index.html";
}

// ================= BACK BUTTON =================

const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
  localStorage.removeItem("quizId");
  window.location.href = "index.html";
});

console.log("window.quizzes:", window.quizzes);

const filteredQuizzes = window.quizzes.filter(
  quiz =>
    quiz.difficulty === difficulty &&
    quiz.category === category
);

if (filteredQuizzes.length === 0) {
  quizListDiv.innerHTML = "<p>No quizzes available yet.</p>";
} else {

  const progress =
    JSON.parse(localStorage.getItem("completedQuizzes")) || {};

  filteredQuizzes.forEach(quiz => {
    const wrapper = document.createElement("div");
    wrapper.className = "quiz-item";

    const btn = document.createElement("button");
    btn.textContent = quiz.title;
    btn.className = "category-btn";

    btn.addEventListener("click", () => {
      localStorage.setItem("quizId", quiz.id);
      window.location.href = "quiz.html";
    });

    wrapper.appendChild(btn);

    if (progress[quiz.id]) {
      const badge = document.createElement("span");
      badge.className = "completed-badge";
      badge.textContent =
        `${progress[quiz.id].score}/${progress[quiz.id].total}`;
      wrapper.appendChild(badge);
    }

    quizListDiv.appendChild(wrapper);
  });

}
