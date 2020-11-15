var menu = document.querySelector('.menu');
var toggler = document.querySelector('.burger');

toggler.addEventListener('click', function(){
  menu.classList.toggle('menu--open');
  toggler.classList.toggle('burger--close');
})