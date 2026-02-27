// =================== DOM ELEMENTS ===================

const statsSummary = document.getElementById("statsSummary");

// =================== SAFETY GUARDS ===================

// Ensure quizzes exist
if (!window.quizzes || window.quizzes.length === 0) {
  statsSummary.innerHTML = "<p>No quiz data available.</p>";
  throw new Error("Quizzes not loaded.");
}

// Ensure difficulty is set
const difficulty = localStorage.getItem("difficulty");

if (!difficulty) {
  window.location.href = "index.html";
  throw new Error("No difficulty selected.");
}

// =================== LABELS ===================

const difficultyLabel = {
  easy: "Easy",
  medium: "Intermediate",
  hard: "Expert"
}[difficulty] || difficulty;

document.title = "Your Stats (" + difficultyLabel + ") | NFL Trivia";
// =================== DATA ===================

// All quizzes
const allQuizzes = window.quizzes;

// Completed quizzes from localStorage
let completedQuizzes = {};

try {
  completedQuizzes =
    JSON.parse(localStorage.getItem("completedQuizzes")) || {};
} catch (e) {
  localStorage.removeItem("completedQuizzes");
  completedQuizzes = {};
}

// =================== RANDOM QUIZ STATS ===================

const randomStats =
  JSON.parse(localStorage.getItem("randomQuizStats")) || {
    count: 0,
    totalPercentSum: 0
  };

const randomCount = randomStats.count;

const randomAverage = randomCount
  ? Math.round(randomStats.totalPercentSum / randomCount)
  : 0;

// =================== DIFFICULTY-SPECIFIC STATS ===================

// Quizzes for current difficulty
const difficultyQuizzes = allQuizzes.filter(
  quiz => quiz.difficulty === difficulty
);

const difficultyTotal = difficultyQuizzes.length;

const difficultyCompleted = difficultyQuizzes.filter(
  quiz => completedQuizzes[quiz.id]
).length;

const difficultyMissing = difficultyTotal - difficultyCompleted;

// Average score for current difficulty
let difficultyScoreSum = 0;
let difficultyScoreCount = 0;

difficultyQuizzes.forEach(quiz => {
  const completed = completedQuizzes[quiz.id];
  if (completed && completed.total > 0) {
    difficultyScoreSum += (completed.score / completed.total) * 100;
    difficultyScoreCount++;
  }
});

const difficultyAverageScore = difficultyScoreCount
  ? Math.round(difficultyScoreSum / difficultyScoreCount)
  : 0;

// =================== ALL-TIME STATS (ALL DIFFICULTIES) ===================

const allTimeTotal = allQuizzes.length;

const allTimeCompleted = allQuizzes.filter(
  quiz => completedQuizzes[quiz.id]
).length;

const allTimeMissing = allTimeTotal - allTimeCompleted;

// All-time average score
let allTimeScoreSum = 0;
let allTimeScoreCount = 0;

allQuizzes.forEach(quiz => {
  const completed = completedQuizzes[quiz.id];
  if (completed && completed.total > 0) {
    allTimeScoreSum += (completed.score / completed.total) * 100;
    allTimeScoreCount++;
  }
});

const allTimeAverageScore = allTimeScoreCount
  ? Math.round(allTimeScoreSum / allTimeScoreCount)
  : 0;

// =================== RENDER ===================

statsSummary.innerHTML = `
  <div class="stats-card">
    <h3>📊 Progress (${difficultyLabel} Difficulty)</h3>

    <div class="stat-row">
      <span>Completed Quizzes</span>
      <strong>${difficultyCompleted} / ${difficultyTotal}</strong>
    </div>

    <div class="stat-row">
      <span>Missing Quizzes</span>
      <strong>${difficultyMissing}</strong>
    </div>

    <div class="stat-row highlight">
      <span>Average Score</span>
      <strong>${difficultyAverageScore}%</strong>
    </div>
  </div>

  <div class="stats-card" style="margin-top: 30px;">
    <h3>🌍 All-Time Progress (All Difficulties)</h3>

    <div class="stat-row">
      <span>Completed Quizzes</span>
      <strong>${allTimeCompleted} / ${allTimeTotal}</strong>
    </div>

    <div class="stat-row">
      <span>Missing Quizzes</span>
      <strong>${allTimeMissing}</strong>
    </div>

    <div class="stat-row highlight">
      <span>Average Score</span>
      <strong>${allTimeAverageScore}%</strong>
    </div>
  </div>
    <div class="stats-card" style="margin-top: 30px;">
    <h3>🎲 Random Quiz Stats</h3>

    <div class="stat-row">
      <span>Random Quizzes Played</span>
      <strong>${randomCount}</strong>
    </div>

    <div class="stat-row highlight">
      <span>Average Score</span>
      <strong>${randomAverage}%</strong>
    </div>
  </div>
`;
