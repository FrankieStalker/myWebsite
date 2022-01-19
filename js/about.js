let i = 0;
let txt = 'About me';
let speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("titlePage").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}