// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectHorn = document.getElementsByName('horn');
  var image = document.querySelector('section img');
  selectHorn.addEventListener('select', imgSelector(image))
}
function imgSelector(image) {
    console.log(this.value);
    switch(this.value) {
      default : return;
      case 'air-horn' : image = '../images/air-horn.svg';
      case 'car-horn' : image = '../images/car-horn.svg';
      case 'party-horn' : image = '../imagesparty-horn.svg';  
    }
}