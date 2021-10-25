// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.getElementById('voice-select');
  select.addEventListener('change', selectSound)
}
function selectSound() {
  const options = document.getElementById('voice-select')
  for (child in SpeechSynthesis.getVoices()) {
    const option = document.createElement('option');
    option.textContent = child.name + '(' + child.lang + ')';
    options.appendChild(option);
  }
}
