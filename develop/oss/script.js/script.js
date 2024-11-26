document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const cards = document.querySelectorAll(".card");

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        cards.forEach((card) => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? "block" : "none";
        });
    });
});
