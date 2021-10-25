// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;
var textToRead;
var options = document.getElementById('voice-select');
var voices;
function init() {
  soundList();
  const textIn = document.getElementById('text-to-speak');
  textIn.addEventListener('change', (e)=>{textToRead = e.target.value});
  const read = document.querySelector('button');
  read.addEventListener('click', readTxt);
}
function soundList() {
  voices = synth.getVoices();
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
  icon.setAttribute('src', 'assets/images/smiling-open.png');
  var toSpeak = new SpeechSynthesisUtterance(textToRead);
  var voiceSelected = options.selectedOptions[0].getAttribute('data-name');
  for (voice in voices) {
    if (voice.name == voiceSelected) {
      toSpeak.voice = voice;
      break;
    }
  }
  synth.speak(toSpeak);
  toSpeak.onend = function() {
    icon.setAttribute('src', 'assets/images/smiling.png')
  }
}