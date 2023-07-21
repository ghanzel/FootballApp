// Player Selection:

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  let data = e.dataTransfer.getData("text");
  if (
    e.target.classList.contains("empty") && // to only allow to create divs in team-position boxes rather than sub-divs of players
    e.target.children.length == 0 // to only allow one player in each box
  ) {
    document
      .getElementById(data)
      .parentElement.classList.remove("selected-green");
    document
      .getElementById(data)
      .parentElement.classList.remove("selected-red");

    e.preventDefault();
    e.target.appendChild(document.getElementById(data));
    if (e.target.classList.contains("red"))
      e.target.classList.add("selected-red");
    else if (e.target.classList.contains("green")) {
      e.target.classList.add("selected-green");
    }
  }
}
