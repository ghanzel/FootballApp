// Player Selection:

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
  e.target.parentElement.classList.remove("selected");
}

function allowDrop(e) {
  e.preventDefault();
}
function drop(e) {
  e.preventDefault();
  let data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
  e.target.classList.add("selected");
}
