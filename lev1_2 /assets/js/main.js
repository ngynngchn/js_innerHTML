let info = document.getElementById("info");
info.innerHTML += "<h1>Hello World</h1>" + "<h2>How are you?</h2>";
// info.innerHTML += "<h2>How are you?</h2>";

console.log(info);

let container = document.getElementById("container");
container.innerHTML = "<p>start of the element</p>";

document.write("end of the element"); // document.write() fügt immer am Ende des HTML Dokuments die Inhalte hinzu
