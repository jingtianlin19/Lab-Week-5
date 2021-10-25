// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;
var textToRead;
var options = document.getElementById('voice-select');
var voices;
function init() {
  soundList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = soundList;
  }
  const textIn = document.getElementById('text-to-speak');
  textIn.addEventListener('change', (e)=>{textToRead = e.target.value});
  const read = document.querySelector('button');
  read.addEventListener('click', readTxt);
}

function soundList() {
  voices = synth.getVoices();
  for (var i = 0; i < voices.length; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if (voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    options.appendChild(option);
  }
}

function readTxt() {
  const icon = document.querySelector('img');
  icon.setAttribute('src', 'assets/images/smiling-open.png');
  var toSpeak = new SpeechSynthesisUtterance(textToRead);
  var voiceSelected = options.selectedOptions[0].getAttribute('data-name');
  for (var i = 0; i < voices.length; i++) {
    if (voices[i].name == voiceSelected) {
      toSpeak.voice = voices[i];
      break;
    }
  }
  synth.speak(toSpeak);
  toSpeak.onend = function() {
    icon.setAttribute('src', 'assets/images/smiling.png')
  }
}