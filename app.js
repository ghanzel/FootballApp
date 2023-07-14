// existing elements
let section = document.querySelector("section");
let createBtn = document.querySelector(".create-match");
let joinBtn = document.querySelector(".join-match");

// new elements
let createMatchElement =
  '<p>Complete the details about your match:</p> <form><label for="match-place">Place:</label><br>   <input type="text" id="match-place" name="match-place" value="Cassiobury Park"`><br>  <label for="match-date">Date:</label><br>  <input type="text" id="match-date" name="match-date" value="dd-mm-yyyy"><br>  <label for="match-date">Time:</label><br>  <input type="text" id="match-time" name="match-time" value="10:00"><br></br>  <input type="submit" value="Submit"></form> ';
let joinMatchElement =
  '<p>Enter your match code to join the game:</p><input type="text" id="match-code" name="match-code">';

// functions
function createMatch() {
  const newMatchWindow = document.createElement("div");
  newMatchWindow.innerHTML = createMatchElement;
  newMatchWindow.classList.add("match-popup");
  section.appendChild(newMatchWindow);
}
function joinMatch() {
  const joinMatchWindow = document.createElement("div");
  joinMatchWindow.innerHTML = joinMatchElement;
  joinMatchWindow.classList.add("match-popup");
  section.appendChild(joinMatchWindow);
}

// event listeners
createBtn.addEventListener("click", createMatch);
joinBtn.addEventListener("click", joinMatch);
