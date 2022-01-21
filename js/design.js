let i = 0;
let txt = 'Design Projects';
let speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("titlePage").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}