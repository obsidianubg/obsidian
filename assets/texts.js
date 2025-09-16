const phrases = [
      "Over 100 unblocked games!",
      "W Obsidian ❤️‍🩹",
      "Join the discord community!",
      "Verion 2.0 released!",
      "New games added weekly.",
      "Тотя. ❤️",
    ];

    const textElement = document.getElementById("random-text");

    function setRandomText() {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      textElement.textContent = phrases[randomIndex];
    }

    setRandomText();

    textElement.addEventListener("click", setRandomText);