var menuBar = document.querySelector('#menu_bar');
var navLinks = document.querySelector('.nav_links');

navLinks.style.top = '-1450px'

menuBar.onClick = function () {
  if (navLinks.style.top == '-1450px') {
    navLinks.style.top = '50px';
  } else {
    navLinks.style.top = '-1450px';
  }
}
