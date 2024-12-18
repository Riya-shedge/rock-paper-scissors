let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let opt =["rock" , "paper" , "scissors"];   //math can generate random no. between 0 to 1 thus we will access the index of strings from array for random value generation 
    const ranIdx = Math.floor(Math.random() * 3);    //we want range from 0 to 2 hence we will multiply by 3(if we want till any whole number just multiply with a number one greater than it , use floor for whole number)
    return opt[ranIdx]; //return string 
};

const drawGame = () => {
    msg.innerText = "Game is Draw";
    msg.style.backgroundColor = "#081B31";
};

const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin){
       userScore++;
       userScorePara.innerText = userScore;
       msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "green";
    }else{
       compScore++;
       compScorePara.innerText = compScore; 
       msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
       msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //Generate Computer Choice => modular programming(each different way is performed as fuction )
    let compChoice = genCompChoice();

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissor , paper
            userWin = compChoice === "paper" ? false : true;    //ternary statement (can also use if-else)
        }else if(userChoice === "paper"){
            //rock , scissor
            userWin = compChoice === "scissor" ? false : true;
        }else{
            //userChoice = scissor  
            //rock, paper
            userWin = compChoice === "rock" ? false : true;        
        }
        showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

