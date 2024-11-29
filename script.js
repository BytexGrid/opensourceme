// Search Functionality
function searchFunction() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const grid = document.getElementById('categoriesGrid');
    const cards = Array.from(grid.getElementsByClassName('card'));
    const noResults = document.getElementById('noResults');
    
    let hasVisibleCards = false;
    let titleMatches = [];
    let descriptionMatches = [];

    // Remove search animation class from all cards
    cards.forEach(card => {
        card.classList.remove('search-animation');
    });

    // Sort cards based on where the match is found
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(filter)) {
            titleMatches.push(card);
            hasVisibleCards = true;
        } else if (description.includes(filter)) {
            descriptionMatches.push(card);
            hasVisibleCards = true;
        } else {
            card.style.display = "none";
        }
    });

    // Show title matches first, then description matches
    titleMatches.forEach(card => {
        card.style.display = "";
        card.classList.add('search-animation');
        grid.appendChild(card);
    });

    descriptionMatches.forEach(card => {
        card.style.display = "";
        card.classList.add('search-animation');
        grid.appendChild(card);
    });

    // Show/hide no results message
    noResults.classList.toggle('hidden', hasVisibleCards);
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

// Dark Mode Toggle
const toggleSwitch = document.querySelector('#checkbox');
const body = document.body;

// Check for saved dark mode preference
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', function(e) {
    if (e.target.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});
