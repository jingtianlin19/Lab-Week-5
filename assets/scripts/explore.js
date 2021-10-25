// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;
var textToRead;
function init() {
  const select = document.getElementById('voice-select');
  select.addEventListener('change', selectSound);
  const textIn = document.getElementById('text-to-speak');
  textIn.addEventListener('change', (e)=>{textToRead = e.target.value});
  const read = document.querySelector('button');
  read.addEventListener('click', readTxt);
}
function selectSound() {
  const options = document.getElementById('voice-select')
  const voices = synth.getVoices();
  for (voice in voices) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voice.lang + ')';
    if(voice.default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    options.appendChild(option);
  }
}

function readTxt() {
  const icon = document.querySelector('img');
  var speaking = synth.speaking;
  icon.setAttribute('src', 'assets/images/smiling-open.png');
  synth.speak(textToRead);
  if (speaking == 0) {
    icon.setAttribute('src', 'assets/images/smiling.png');
  }
}