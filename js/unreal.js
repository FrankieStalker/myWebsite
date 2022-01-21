let i = 0;
let txt = 'Unreal Engine Projects';
let speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("titlePage").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var myIndex1 = 0;
carousel1();

function carousel1() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex1++;
  if (myIndex1 > x.length) {myIndex1 = 1}    
  x[myIndex1-1].style.display = "block";  
  setTimeout(carousel1, 5000); // Change image every 2 seconds
}

var myIndex2 = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex2++;
  if (myIndex2 > x.length) {myIndex2 = 1}    
  x[myIndex2-1].style.display = "block";  
  setTimeout(carousel2, 5000); // Change image every 2 seconds
}