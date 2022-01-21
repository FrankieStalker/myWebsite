let i = 0;
let txt = 'Other Programming Projects';
let speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("titlePage").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var myIndex1 = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex1++;
  if (myIndex1 > x.length) {myIndex1 = 1}    
  x[myIndex1-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}