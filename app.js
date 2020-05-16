let cells = document.querySelectorAll(".row > div");
let activePlayer = "X";
let turnCounter = 0;
let winningMsg = document.getElementById('data-winning-message-text')
let restart = document.getElementById('restartButton')
let nonActivePlayer = "O";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}
restart.addEventListener('click', 
function () {window.location.reload()})  // function() = callback function-calling a function inside a function

function cellClicked() {
  if (event.target.textContent === "") {
    turnCounter++; //goes up by one every time a turn is taken
    event.target.textContent = activePlayer;
    togglePlayer();
    checkWin();
  } //if the box isn't empty, it can't be changed.
  /*placeMark(cells, activePlayer)

swapActivePlayer()*/
}
function togglePlayer() {
  if (activePlayer === "X") {
    activePlayer = "O";
    nonActivePlayer ="X";
  } else {
    activePlayer = "X";
    nonActivePlayer = "O";
  } //if active player is x then it changegs to O & vice versa
}

/*function placeMark(cells, activePlayer){
    cells.activePlayer.(activePlayer, activePlayer2)
}

function swapActivePlayer() {
    activePlayer = activePlayer
  }*/
function checkWin() {
  if (
    cells[0].textContent === cells[1].textContent &&
    cells[1].textContent === cells[2].textContent &&
    cells[0].textContent === cells[2].textContent &&
    cells[0].textContent !== ""
  ) {
    return winningMsg.innerText = nonActivePlayer + " won!";  
} else if (turnCounter === 9) {
    return winningMsg.innerText = "It's a draw"; 
  
  } else if (
    cells[3].textContent === cells[4].textContent &&
    cells[4].textContent === cells[5].textContent &&
    cells[3].textContent === cells[5].textContent &&
    cells[3].textContent !== ""
  ) {
    return winningMsg.innerText = nonActivePlayer + " won!"; 
    } else if (turnCounter === 9) {
    return winningMsg.innerText = "It's a draw";
  }
  // all other win combos
  else if (
    cells[6].textContent === cells[7].textContent &&
    cells[7].textContent === cells[8].textContent &&
    cells[6].textContent === cells[8].textContent &&
    cells[6].textContent !== ""
  ) {
    return winningMsg.innerText = nonActivePlayer + " won!";  
   } else if (turnCounter === 9) {
    return winningMsg.innerText = "It's a draw";
  } else if (
    cells[0].textContent === cells[3].textContent &&
    cells[3].textContent === cells[6].textContent &&
    cells[0].textContent === cells[6].textContent &&
    cells[0].textContent !== ""
  ) {
    return winningMsg.innerText = nonActivePlayer + " won!";  
  } else if (turnCounter === 9) {
   return winningMsg.innerText = "It's a draw";
  } else if (
    cells[1].textContent === cells[4].textContent &&
    cells[4].textContent === cells[7].textContent &&
    cells[1].textContent === cells[7].textContent &&
    cells[1].textContent !== ""
  ) {
    return winningMsg.innerText = nonActivePlayer + " won!";  
  } else if (turnCounter === 9) {
   return winningMsg.innerText = "It's a draw";
  } else if (
    cells[2].textContent === cells[5].textContent &&
    cells[5].textContent === cells[8].textContent &&
    cells[2].textContent === cells[8].textContent &&
    cells[2].textContent !== ""
  ) {
    return winningMsg.innerText = nonActivePlayer + " won!";  
  } else if (turnCounter === 9) {
   return winningMsg.innerText = "It's a draw";
  } else if (
    cells[0].textContent === cells[4].textContent &&
    cells[4].textContent === cells[8].textContent &&
    cells[4].textContent === cells[8].textContent &&
    cells[0].textContent !== ""
  ) {
    return winningMsg.innerText = nonActivePlayer + " won!";  
  } else if (turnCounter === 9) {
   return winningMsg.innerText = "It's a draw";
  } else if (
    cells[2].textContent === cells[4].textContent &&
    cells[4].textContent === cells[6].textContent &&
    cells[2].textContent === cells[6].textContent &&
    cells[2].textContent !== ""
  ) {
    return winningMsg.innerText = nonActivePlayer + " won!";  
  } else if (turnCounter === 9) {
   return winningMsg.innerText = "It's a draw";
  }
}
//if x won, need to return a "X Won!", if o won, need to return "O Won!"