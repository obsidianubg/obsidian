const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", function() {
    const searchText = this.value.toLowerCase();
    const games = document.querySelectorAll(".game-grid a"); 
    
    games.forEach(game => {
        const altText = game.querySelector("img").alt.toLowerCase();
        if (altText.includes(searchText)) {
            game.style.display = ""; 
        } else {
            game.style.display = "none";
        }
    });
});
