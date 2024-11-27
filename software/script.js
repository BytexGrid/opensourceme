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
