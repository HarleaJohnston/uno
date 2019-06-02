/**
 * Reverse the direction of player rotation
 */
function cardReverse() {
  if (players.length == 2) {
    rotatePlayers();
  } else {
    gameDirection = -1 * gameDirection;
  }
}

/**
 * Skip the next player in rotation
 */
function cardSkip() {
  rotatePlayers();
}

function cardWild() {
  if (players[gameTurn].isBot) {
    let colorArray = ["Red", "Green", "Blue", "Yellow"];
    let randColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    discardPile.cards[discardPile.cards.length - 1].color = randColor;
    alert("The color has been changed to " + randColor);
  } else {
    let wildUI = document.createElement("div");
    document.getElementById("wildColor").append(wildUI);
    wildUI.classList.add("wildStyle");

    wildUI.innerHTML =
      "<form name='colorPick' id='myForm'> Enter the Color you want to switch to<br> <input type='radio' name='color' value='Red'>Red<br><input type='radio' name='color' value='Yellow'>Yellow<br><input type='radio' name='color' value='Blue'>Blue<br><input type='radio' name='color' value='Green'>Green<br><input type='button' id='colorButton' value='Pick'></form>";
    document.getElementById("colorButton").onclick = function () {
      discardPile.cards[
        discardPile.cards.length - 1
      ].color = document.querySelector('input[name="color"]:checked').value;
      document.getElementById("wildColor").innerHTML = "";
      isColorSelected = true;
      rotatePlayers();
      play();
    };
    gameTurn = gameTurn - gameDirection;
  }
  return true;
}

function cardDraw2() {
  drawStack.stackAmt++;
  drawStack.cardType = 2;
  drawStack.cardValue = 10;
  drawStack.updateStack();
}

function cardDraw4() {
  drawStack.stackAmt++;
  drawStack.cardType = 4;
  drawStack.cardValue = 1;
  drawStack.updateStack();
  cardWild();
}