// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;
var textToRead;
function init() {
  soundList();
  const textIn = document.getElementById('text-to-speak');
  textIn.addEventListener('change', (e)=>{textToRead = e.target.value});
  const read = document.querySelector('button');
  read.addEventListener('click', readTxt);
}
function soundList() {
  const options = document.getElementById('voice-select')
  const voices = synth.getVoices();
  for (voice in voices) {
    var option = document.createElement('option');
    option.textContent = voices.name + ' (' + voice.lang + ')';
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