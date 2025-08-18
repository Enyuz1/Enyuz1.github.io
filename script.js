const text = "Welcome to my neon realm — glowing in cyberspace...";
const typewriter = document.getElementById("typewriter");
let i = 0;

function typing() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();