// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var selectHorn = document.getElementsById('horn-select');
  selectHorn.addEventListener('select', imgSelector())
  // var selectSound = document.getElementById('volume');
  // var soundIcon = document.querySelector('div img');
  // selectSound.addEventListener('input', soundSelector(this.value));
}
function imgSelector(e) {
    var image = document.querySelector('section img');
    switch(e.target.value) {
      default : return;
      case 'air-horn' : 
      image.setAttribute('src', 'assets/images/air-horn.svg'); 
      break;
      case 'car-horn' : 
      image.setAttribute('src', 'assets/images/car-horn.svg'); 
      break;
      case 'party-horn' : 
      image.setAttribute('src', 'assets/imagesparty-horn.svg');
      break;   
    }
    return;
}
// function soundSelector(vol) {
//   switch(vol) {
//     default : return;
//     case 1 < vol < 33 : 
//   }
// }