const board = document.querySelector(".board");
const cells = document.querySelectorAll(".board-cell");
const restartBtn = document.querySelector(".restart");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (gameBoard[index] === "" && gameActive) {
      cell.textContent = currentPlayer;
      gameBoard[index] = currentPlayer;
      checkWin();
      togglePlayer();
    }
  });
});

function togglePlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else if (currentPlayer === "O") {
    currentPlayer = "X";
  } else {
    currentPlayer = "X";
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      gameActive = false;
      setTimeout(() => {
        alert(`Player ${currentPlayer} wins!`);
      }, 10);
      return;
    }
  }

  if (!gameBoard.includes("") && gameActive) {
    gameActive = false;
    setTimeout(() => {
      alert("It's a tie!");
    }, 10);
  }
}

restartBtn.addEventListener("click", () => {
  cells.forEach((cell, index) => {
    cell.textContent = "";
    gameBoard[index] = "";
  });
  gameActive = true;
  currentPlayer = "X";
});
