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
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('checkbox');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        toggleSwitch.checked = currentTheme === 'dark';
    }

    toggleSwitch.addEventListener('change', function(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});
