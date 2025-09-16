
    const params = new URLSearchParams(window.location.search);
    const iframe = document.getElementById("myIframe");
    iframe.src = params.get("url") || "/404.html";

    function refreshIframe() {
      iframe.src = iframe.src;
    }

    function goFullscreen() {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
