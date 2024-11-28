// Search Functionality
function searchFunction() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toUpperCase();
    let softwareItems = document.querySelectorAll(".software-item");

    softwareItems.forEach(item => {
        let title = item.querySelector("h3").textContent;
        if (title.toUpperCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

// OS Filter Functionality
function filterSoftware() {
    let filter = document.getElementById("os-filter").value;
    let softwareItems = document.querySelectorAll(".software-item");

    softwareItems.forEach(item => {
        let itemOS = item.getAttribute("data-os");
        if (filter === "all") {
            item.style.display = "";
        } else if (itemOS.indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById("darkModeToggle");

// Check and apply saved preference on page load
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "Disable Night Mode";
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        darkModeToggle.textContent = "Disable Night Mode";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        darkModeToggle.textContent = "Enable Night Mode";
    }
});
