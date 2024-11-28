// Search Functionality
function searchFunction() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toUpperCase();
    let softwareItems = Array.from(document.querySelectorAll(".software-item"));
    let container = document.querySelector(".software-container");

    // If search input is empty, display all items
    if (filter === "") {
        softwareItems.forEach(item => {
            item.style.display = ""; // Reset display to show all items
        });
        return; // Exit the function as no further filtering is needed
    }

    // Separate items into title matches and description matches
    let titleMatches = [];
    let descriptionMatches = [];

    softwareItems.forEach(item => {
        let title = item.querySelector("h3").textContent; // Get the title
        let description = item.querySelector("p").textContent; // Get the description

        if (title.toUpperCase().indexOf(filter) > -1) {
            titleMatches.push(item); // Title match
        } else if (description.toUpperCase().indexOf(filter) > -1) {
            descriptionMatches.push(item); // Description match
        } else {
            item.style.display = "none"; // Hide items that don't match
        }
    });

    // Display matching items
    titleMatches.concat(descriptionMatches).forEach(item => {
        item.style.display = ""; // Show title and description matches
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

 // If no items were found, show the "No results found" message
    if (foundItems === 0 && input.value !== "") {
        noResultsMessage.style.display = "block";  // Show the message
    } else {
        noResultsMessage.style.display = "none";  // Hide the message
    }

}

// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById("darkModeToggle");

// Check and apply saved preference on page load
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode"); // Enable dark mode by default if saved preference exists
    darkModeToggle.checked = true; // Set the toggle to checked if dark mode was enabled previously
} else {
    document.body.classList.remove("dark-mode"); // Ensure the light mode is applied by default
    darkModeToggle.checked = false; // Make sure the toggle is off by default
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode"); // Enable dark mode
        localStorage.setItem("dark-mode", "enabled"); // Save preference to localStorage
    } else {
        document.body.classList.remove("dark-mode"); // Disable dark mode
        localStorage.setItem("dark-mode", "disabled"); // Save preference to localStorage
    }
});
