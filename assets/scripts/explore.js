// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;
function init() {
  const select = document.getElementById('voice-select');
  select.addEventListener('change', selectSound);
  const textIn = document.getElementById('text-to-speak');
  textIn.addEventListener('change', txtIn);

}
function selectSound() {
  const options = document.getElementById('voice-select')
  const voices = synth.getVoices();
  for (voice in voices) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    if(voice.default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    options.appendChild(option);
  }
}
