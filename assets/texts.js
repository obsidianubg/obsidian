const phrases = [
      "Over 100 unblocked games!",
      "Now better than ever!",
      "Join the discord community!",
      "Follow our tiktok @obsidianubg!",
      "New games added weekly.",
      "Dexterity, Skill, Fun.",
    ];

    const textElement = document.getElementById("random-text");

    function setRandomText() {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      textElement.textContent = phrases[randomIndex];
    }

    setRandomText();

    textElement.addEventListener("click", setRandomText);