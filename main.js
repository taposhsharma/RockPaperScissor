const choices = document.querySelectorAll(".choice")
const score = document.getElementById("score")
const restart = document.getElementById("restart")
const modal = document.querySelector(".modal")
const result = document.querySelector("#result")

const scoreBoard={
    player:0,
    computer:0
}
function play(e){
    restart.style.display="inline-block"
    const playerChoice = e.target.id
    const computerChoice = getComputerChoice()
    const winner = getWinner(playerChoice,computerChoice)
    shoeWinner(winner,computerChoice)

}
function shoeWinner(winner,computerChoice){
    if(winner === "player"){
        scoreBoard.player++
        result.innerHTML= `
        <h1 class="text-winner">You Win.</h1>
        <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        `
    }
    else if(winner === "computer"){
        scoreBoard.computer++
        result.innerHTML= `
        <h1 class="text-lose">You Lose.</h1>
        <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        `
    }else{
       
            
            result.innerHTML= `
            <h1>It's a draw.</h1>
            <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
            `
    
    }
    score.innerHTML=`
    <p>Player:${scoreBoard.player}</p>
    <p>Computer:${scoreBoard.computer}</p>
    `
    modal.style.display="block"

}
function getWinner(p,c){
    if(p === c){
        return "draw"
    }else if(p === "rock"){
        if(c==="paper"){
            return ("computer")
        }else{
            return("player")
        }
    }else if(p === "paper"){
        if(c==="scissors"){
            return ("computer")
        }else{
            return("player")
        }
    }else if(p === "scissors"){
        if(c==="rock"){
            return ("computer")
        }else{
            return("player")
        }
    }
}

function clearModal(e){
    if(e.target == modal){
        modal.style.display = "none"
    }

}
function getComputerChoice(){
    const randomNumber = Math.random()
    if(randomNumber < 0.33){
        return "rock"
    }else if(randomNumber < 0.66){
        return "paper"
    }else{
        return "scissors"
    }
}
function restartGame(){
    scoreBoard.player = 0
    scoreBoard.computer = 0
    score.innerHTML=`
    <p>Player:${scoreBoard.player}</p>
<p>Computer:${scoreBoard.computer}</p>
    `
    restart.style.display="none"
}
choices.forEach(choice  => choice.addEventListener("click",play))
window.addEventListener("click",clearModal)
restart.addEventListener("click",restartGame)