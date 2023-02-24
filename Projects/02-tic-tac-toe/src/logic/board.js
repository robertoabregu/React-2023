import { WINNER_COMBOS } from "../constant.js"

export const checkWinnerFrom = (boardToCheck) => {
    // Se revisan las combinaciones ganadoras y validar si "X" u "O" ganó
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // Si no hay ganador
    return null
  }

export const checkEndGame = (newBoard) => {
    // Revisa si hay empate chequeando que todos los squares estén llenos
    return newBoard.every((Square) => Square != null)
  }