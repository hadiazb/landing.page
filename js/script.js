const menu = document.querySelector('.menu');
const ipad = window.matchMedia('screen and (max-width:800px)')
const burgerButton = document.querySelector('#burger-menu');
const slidesDos = document.querySelector('.flexslider');

console.log(changue);
ipad.addListener(validation)
put()
function validation(event){
  console.log(event.matches);
  if (event.matches) {
    burgerButton.addEventListener('click', hideShow);
  }else {
    burgerButton.removeEventListener('click', hideShow);
  }
}

function hideShow(){
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  }else {
    menu.classList.add('is-active');
  }
}
function put(event){
  if (event.matches) {
    flexslider.classList.remove('flexslider');
  }else {
    flexslider.classList.add('flexslider');
  }
}
