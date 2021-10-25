// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectHorn = document.getElementById('horn-select');
  selectHorn.addEventListener('input', imgSelector)
  const selectSound = document.getElementById('volume');
  selectSound.addEventListener('change', soundSelector);
  const playSound = document.querySelector('button');
  playSound.addEventListener('change', playsound);
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
  var audio = document.querySelector('audio')
  const vol = e.target.value;
  audio.volume = vol;
  if (vol == 0) {
    soundIcon.setAttribute('src', 'assets/icons/volume-level-0.svg');
    soundIcon.setAttribute('alt', 'Volume level 0');
  }
  else if (vol >= 1 && vol < 33) {
    soundIcon.setAttribute('src', 'assets/icons/volume-level-1.svg');
    soundIcon.setAttribute('alt', 'Volume level 1');
  }
  else if (vol >= 33 && vol < 67) {
    soundIcon.setAttribute('src', 'assets/icons/volume-level-2.svg');
    soundIcon.setAttribute('alt', 'Volume level 2');
  }
  else if (vol >= 67) {
    soundIcon.setAttribute('src', 'assets/icons/volume-level-3.svg');
    soundIcon.setAttribute('alt', 'Volume level 3');
  }
}
function playsound() {
  const sound = document.querySelector('audio');
  sound.play();
}