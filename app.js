let userScore=0;
let computerScore=0;
let user;
let computer;
let result;
let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissor");
let msg=document.querySelector(".msg");
let us=document.querySelector(".userScore");
let cs=document.querySelector(".compscore");


let playGame=()=>{
if (user == computer) {
    result = "It's a Draw";
} else if (user == "rock" && computer == "paper") {
    result = "Paper Beats Rock";
    computerScore++;
} else if (user == "rock" && computer == "scissor") {
    result = "Rock Beats Scissors";
    userScore++;
} else if (user == "paper" && computer == "rock") {
    result = "Paper Beats Rock";
    userScore++;
} else if (user == "paper" && computer == "scissor") {
    result = "Scissors Beats Paper";
    computerScore++;
} else if (user == "scissor" && computer == "rock") {
    result = "Rock Beats Scissors";
    computerScore++;
} else if (user == "scissor" && computer == "paper") {
    result = "Scissors Beats Paper";
    userScore++;
}
}
let compChoice=()=>{
    let option=["rock","scissor","paper"];
    computer=option[Math.floor(Math.random()*3)];
}
let showResult=()=>{
msg.innerHTML=result;
us.innerHTML=userScore;
cs.innerHTML=computerScore;
}

rock.addEventListener("click",()=>{
    user="rock";
    compChoice();
    playGame();
    showResult();
    showResult();
})
paper.addEventListener("click",()=>{
    user="paper";
    compChoice();
    playGame();
    showResult();
    showResult();

})
scissor.addEventListener("click",()=>{
    user="scissor";
    compChoice();
    playGame();
    showResult();
    showResult();

})
