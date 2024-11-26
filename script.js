document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("#search");
    const categories = document.querySelectorAll(".categories li");

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        categories.forEach((category) => {
            const text = category.textContent.toLowerCase();
            category.style.display = text.includes(query) ? "block" : "none";
        });
    });
});
