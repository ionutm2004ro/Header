var header;
var sticky;
var nav;

window.onload = function() {
	header = document.getElementById("header");
	sticky = header.offsetTop;
	nav = document.getElementById("navUL");
	
};

window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
	header.opacity = 0.5;
  } else {
    header.classList.remove("sticky");
	header.opacity = 1;
  }
}

function fontResize(){
	if(window.width<1000){
		nav.style.fontSize = "10px";
		nav.innerHTML = "String";}
	else{
		nav.style.fontSize = "20px";
		nav.innerHTML = "String";}
}