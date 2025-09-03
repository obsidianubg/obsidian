fetch("/assets/g.json")
      .then(res => res.json())
      .then(games => {
        const grid = document.querySelector(".game-grid");

        games.forEach(game => {
          const a = document.createElement("a");
          a.href = `/iframe.html?url=${encodeURIComponent(game.dir)}`;

          const img = document.createElement("img");
          img.className = "gameimage";
          img.src = game.icon;
          img.alt = game.name;

          a.appendChild(img);
          grid.appendChild(a);
        });
      })
      .catch(err => console.error("Error loading games.json:", err));