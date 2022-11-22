// import score from "./game"
console.log()
const resultScore = document.querySelector('.result-score')

const gameEnded = document.querySelector('.bird-description__guide')
const congratulation = document.querySelector('.win-description')

const startGameButton = document.querySelector('.start-btn')
const startPageButton = document.querySelector('.start-page-btn')

resultScore.textContent = localStorage.score
if (localStorage.score == 30) {
    gameEnded.classList.add('disabled')
    congratulation.classList.remove('disabled')
    startGameButton.classList.add('disabled')
    startPageButton.classList.remove('disabled')
}