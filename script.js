// Function to filter categories based on search input
function searchFunction() {
    // Get the search input value
    let input = document.getElementById("searchInput").value.toUpperCase();
    
    // Get the container that holds all the category cards
    let grid = document.getElementById("categoriesGrid");
    
    // Get all the category cards
    let cards = grid.getElementsByClassName("card");
    
    // Loop through all the cards and hide or show based on the search input
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName("h3")[0];
        let description = cards[i].getElementsByTagName("p")[0];
        
        // Check if the card title or description matches the search input
        if (title.innerHTML.toUpperCase().indexOf(input) > -1 || description.innerHTML.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
