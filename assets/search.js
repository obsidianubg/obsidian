const searchBar = document.getElementById("searchBar");
const games = document.querySelectorAll(".game-grid a");

searchBar.addEventListener("keyup", function() {
    const searchText = this.value.toLowerCase();
    games.forEach(game => {
        const altText = game.querySelector("img").alt.toLowerCase();
        if (altText.includes(searchText)) {
            game.style.display = "inline-block";
        } else {
            game.style.display = "none";
        }
    });
});