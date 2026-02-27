document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("difficultyModal");
    const buttons = document.querySelectorAll(".difficulty-btn");

    function hasDifficulty() {
        return !!localStorage.getItem("difficulty");
    }

    function openModal() {
        modal.classList.remove("hidden");
    }

    function closeModal() {
        modal.classList.add("hidden");
    }

    if (!hasDifficulty()) {
        openModal();
    }

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const map = {
            beginner: "easy",
            intermediate: "medium",
            expert: "hard"
        };

        localStorage.setItem("difficulty", map[btn.dataset.level]);
        closeModal();
    });
});

    window.openDifficultyModal = openModal;
    window.hasDifficulty = hasDifficulty;
});
