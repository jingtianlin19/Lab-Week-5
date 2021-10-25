// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var selectHorn = document.getElementById('horn-select');
  selectHorn.addEventListener('input', imgSelector)
  var selectSound = document.getElementById('volume');
  selectSound.addEventListener('change', soundSelector);
}
function imgSelector(e) {
  var image = document.querySelector('img');
  var sound = document.querySelector('audio');
  switch (e.target.value) {
    default: return;
    case 'air-horn':
      image.setAttribute('src', 'assets/images/air-horn.svg');
      sound.setAttribute('src', 'assets/audio/air-horn.mp3');
      break;
    case 'car-horn':
      image.setAttribute('src', 'assets/images/car-horn.svg');
      sound.setAttribute('src', 'assets/audio/car-horn.mp3');
      break;
    case 'party-horn':
      image.setAttribute('src', 'assets/images/party-horn.svg');
      sound.setAttribute('src', 'assets/audio/party-horn.mp3');
      break;
  }
}
function soundSelector(e) {
  var soundIcon = document.querySelector('div img');
  var audio = document.getElementById('volume');
  const vol = e.target.value;
  audio.setAttribute('value', vol);
  switch (vol) {
    default: return;
    case 0 == vol: 
      soundIcon.setAttribute('src', 'assets/icons/volume-level-0.svg');
    case 1 <= vol < 33:
      soundIcon.setAttribute('src', 'assets/icons/volume-level-1.svg');
      break;
    case 33 <= vol < 67:
      soundIcon.setAttribute('src', 'assets/icons/volume-level-2.svg');
      break;
    case 67 <= vol: 
    soundIcon.setAttribute('src', 'assets/icons/volume-level-3.svg');
  }
}