// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var selectHorn = document.getElementsById('horn-select');
  var image = document.querySelector('section img');
  selectHorn.addEventListener('select', imgSelector(image))
  var selectSound = document.getElementById('volume');
  var soundIcon = document.querySelector('div img');
  // selectSound.addEventListener('input', soundSelector(this.value));
}
function imgSelector(image) {
    switch(image) {
      default : return;
      case 'air-horn' : image = '../images/air-horn.svg';
      case 'car-horn' : image = '../images/car-horn.svg';
      case 'party-horn' : image = '../imagesparty-horn.svg';  
    }
    return;
}
// function soundSelector(vol) {
//   switch(vol) {
//     default : return;
//     case 1 < vol < 33 : 
//   }
// }