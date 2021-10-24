// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = Document.getElementById("horn-select")
  select.addEventListener('select', ()=>{console.log(select)});
}