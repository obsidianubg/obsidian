document.getElementById("copyButton").addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            alert("Copied!, Paste it anywhere to share."); 
        })
        .catch(err => console.error("Failed to copy: ", err));
});