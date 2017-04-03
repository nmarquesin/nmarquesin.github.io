
var gameStarted = false;
var player; // player chooses beween X or O
var computer; // computer gets remaining symbol
var board; // tic tac toe logic board
var boardPlayer; // player's plays
var boardAI; // AI's plays
var whoseTurnIsiT = false; // false => player, true => computer
var resetGame = false; // resets game 3 secs after ended

function startGame() {
  board = { "fieldA1": false, "fieldA2": false, "fieldA3": false, "fieldB1": false, "fieldB2": false, "fieldB3": false, "fieldC1": false, "fieldC2": false, "fieldC3": false};
  boardPlayer = { "fieldA1": 0, "fieldA2": 0, "fieldA3": 0, "fieldB1": 0, "fieldB2": 0, "fieldB3": 0, "fieldC1": 0, "fieldC2": 0, "fieldC3": 0};
  boardAI = { "fieldA1": 0, "fieldA2": 0, "fieldA3": 0, "fieldB1": 0, "fieldB2": 0, "fieldB3": 0, "fieldC1": 0, "fieldC2": 0, "fieldC3": 0};
  gameStarted = true;
  whoseTurnIsiT = true;
  for (var key in board) {
    $("#"+key).html("<span class='placeholder'>PH<span>");
    $("#message").html("<p>Computer's turn</p>");
  }
}

function setPlayerO() {
  if (gameStarted === false) {
    player = "O";
    computer = "X";
    $("#whichiswhich").html('<span class="R">Computer: X </span>|||<span class="B"> Player: O</span>');
    startGame();
  }
}

function setPlayerX() {
  if (gameStarted === false) {
    player = "X";
    computer = "O";
    $("#whichiswhich").html('<span class="R">Player: X </span>|||<span class="B"> Computer: O</span>');
    startGame();
  }
}

function myFunction(field, playerTurn) {
  if (gameStarted === true) {
    if (board[field] === false) {
      $("#"+field).html(playerTurn);
      board[field] = true;
      if (playerTurn === player) {
        boardPlayer[field] = 1;
      } else {
        boardAI[field] = 1;
      }
      whoseTurnIsiT = true;
      $("#message").html("<p>Computer's turn</p>");
      checkWin();
    }
  }
}


function checkWin() {
  //check if player or computer wins

  function playerWins() {
    $("#message").html("<p>Player wins!</p>");
    gameStarted = false;
    resetGame = true;
  }

  function computerWins () {
    $("#message").html("<p>Computer wins!</p>");
    gameStarted = false;
    resetGame = true;
  }

  var count = 0;
  for (var item in board) {
    if (board[item] === true) {count +=1;}
  }
  if (count === 9) {
    $("#message").html("<p>It's a draw</p>");
    gameStarted = false;
    resetGame = true;
  }

  switch (boardPlayer["fieldA1"] + boardPlayer["fieldA2"] + boardPlayer["fieldA3"]) {
    case 3:
      playerWins();
      break;
    default:
  }
  switch (boardPlayer["fieldB1"] + boardPlayer["fieldB2"] + boardPlayer["fieldB3"]) {
    case 3:
      playerWins();
      break;
    default:
  }
  switch (boardPlayer["fieldC1"] + boardPlayer["fieldC2"] + boardPlayer["fieldC3"]) {
    case 3:
      playerWins();
      break;
    default:
  }
  switch (boardPlayer["fieldA1"] + boardPlayer["fieldB1"] + boardPlayer["fieldC1"]) {
    case 3:
      playerWins();
      break;
    default:
  }
  switch (boardPlayer["fieldA2"] + boardPlayer["fieldB2"] + boardPlayer["fieldC2"]) {
    case 3:
      playerWins();
      break;
    default:
  }
  switch (boardPlayer["fieldA3"] + boardPlayer["fieldB3"] + boardPlayer["fieldC3"]) {
    case 3:
      playerWins();
      break;
    default:
  }
  switch (boardPlayer["fieldA1"] + boardPlayer["fieldB2"] + boardPlayer["fieldC3"]) {
    case 3:
      playerWins();
      break;
    default:
  }
  switch (boardPlayer["fieldA3"] + boardPlayer["fieldB2"] + boardPlayer["fieldC1"]) {
    case 3:
      playerWins();
      break;
    default:
  }
  switch (boardAI["fieldA1"] + boardAI["fieldA2"] + boardAI["fieldA3"]) {
  case 3:
    computerWins();
    break;
  default:
  }
  switch (boardAI["fieldB1"] + boardAI["fieldB2"] + boardAI["fieldB3"]) {
    case 3:
      computerWins();
      break;
    default:
  }
  switch (boardAI["fieldC1"] + boardAI["fieldC2"] + boardAI["fieldC3"]) {
    case 3:
      computerWins();
      break;
    default:
  }
  switch (boardAI["fieldA1"] + boardAI["fieldB1"] + boardAI["fieldC1"]) {
    case 3:
      computerWins();
      break;
    default:
  }
  switch (boardAI["fieldA2"] + boardAI["fieldB2"] + boardAI["fieldC2"]) {
    case 3:
      computerWins();
      break;
    default:
  }
  switch (boardAI["fieldA3"] + boardAI["fieldB3"] + boardAI["fieldC3"]) {
    case 3:
      computerWins();
      break;
    default:
  }
  switch (boardAI["fieldA1"] + boardAI["fieldB2"] + boardAI["fieldC3"]) {
    case 3:
      computerWins();
      break;
    default:
  }
  switch (boardAI["fieldA3"] + boardAI["fieldB2"] + boardAI["fieldC1"]) {
    case 3:
      computerWins();
      break;
    default:
  }

}

function myFunctionA1() {
  var field = "fieldA1";
  if (whoseTurnIsiT === false) {myFunction(field, player);}
}

function myFunctionA2() {
  var field = "fieldA2";
  if (whoseTurnIsiT === false) {myFunction(field, player);}
}

function myFunctionA3() {
  var field = "fieldA3";
  if (whoseTurnIsiT === false) {myFunction(field, player);}
}

function myFunctionB1() {
  var field = "fieldB1";
  if (whoseTurnIsiT === false) {myFunction(field, player);}
}

function myFunctionB2() {
  var field = "fieldB2";
  if (whoseTurnIsiT === false) {myFunction(field, player);}
}

function myFunctionB3() {
  var field = "fieldB3";
  if (whoseTurnIsiT === false) {myFunction(field, player);}
}

function myFunctionC1() {
  var field = "fieldC1";
  if (whoseTurnIsiT === false) {myFunction(field, player);}
}

function myFunctionC2() {
  var field = "fieldC2";
  if (whoseTurnIsiT === false) {myFunction(field, player);}
}

function myFunctionC3() {
  var field = "fieldC3";
  if (whoseTurnIsiT === false) {myFunction(field, player);}
}


function nextAvailable() {
  // Tic tac toe's AI
  for (var key in board) {
    if (board[key] === false) {
      return key;
    }
  }
}

$(document).ready(function(){
  var gameplay = setInterval( function() {
    if (resetGame === true) {
      resetGame = false;
      startGame();
    } else
    if (gameStarted === true && whoseTurnIsiT === true) {
      var nextField = nextAvailable();
      myFunction(nextField, computer);
      whoseTurnIsiT = false;
      $("#message").html("<p>Player's turn</p>");
      checkWin();
    }

  }, 3000);

});
