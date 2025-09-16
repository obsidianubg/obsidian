function runCode() {
  const html = document.getElementById('html').value;
  const css = "<style>" + document.getElementById('css').value + "</style>";
  const js = "<script>" + document.getElementById('js').value + "<\/script>";
  const code = html + css + js;
  const output = document.getElementById('output').contentWindow.document;
  output.open();
  output.write(code);
  output.close();
}

function exportCode() {
  const html = document.getElementById('html').value;
  const css = "<style>" + document.getElementById('css').value + "</style>";
  const js = "<script>" + document.getElementById('js').value + "<\/script>";
  const code = html + css + js;
  const blob = new Blob([code], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "myCode.html";
  link.click();
}

function importCode(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    const htmlMatch = text.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const cssMatch = text.match(/<style[^>]*>([\s\S]*)<\/style>/i);
    const jsMatch = text.match(/<script[^>]*>([\s\S]*)<\/script>/i);
    document.getElementById('html').value = htmlMatch ? htmlMatch[1].trim() : text;
    document.getElementById('css').value = cssMatch ? cssMatch[1].trim() : "";
    document.getElementById('js').value = jsMatch ? jsMatch[1].trim() : "";
  };
  reader.readAsText(file);
}