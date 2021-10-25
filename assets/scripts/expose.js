// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectHorn = document.getElementsByName('horn');
  const image = document.querySelector('img');
  selectHorn.addEventListener('selectHorn', () => {
    console.log(this.value);
    switch(this.value) {
      default : return;
      case 'air-horn' : image = 'air-horn.svg';
      case 'car-horn' : image = 'car-horn.svg';
      case 'party-horn' : image = 'party-horn.svg';
    }
  })
}