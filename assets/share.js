document.getElementById("copyButton").addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            alert("Copied!"); 
        })
        .catch(err => console.error("Failed to copy: ", err));
});