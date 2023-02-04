
// Selecting elemments
const buttons=document.querySelector('.buttons')
const botChoices=['Rock','Paper','Scissors']
let scoreText = document.querySelector(".score-text")
const vsText=document.querySelector('.vs-text')
const winOrLostText = document.querySelector(".lose-or-win-text");
let score = 0;
const endGameBtn=document.getElementById('endGameButton')
// implementing function that will compare choices between player and bot
const comparison=function(bot,player){
    if(bot==='Paper'&&  player==='Scissors') return 1
    if(bot==='Scissors'&& player==='Paper') return -1
    if(bot==='Rock'&& player==='Paper') return 1
    if(bot==='Paper'&& player==='Rock') return -1
    if(bot==='Scissors'&& player==='Rock') return 1
    if(bot==='Rock' && player==='Scissors') return -1
    return 0
}
//function that clears scores and texts 
const clearScores=function(){
    score=0
    scoreText.textContent=score
     winOrLostText.textContent=''
     vsText.textContent=''
}


buttons.addEventListener('click',function(e){
    const choice= e.target
     if (!choice.getAttribute("ref")) return;
     //creating bot's logic
    const randomNum=Math.floor(Math.random()*botChoices.length)
    const botChoice= botChoices[randomNum]
 // getting results from the game and adding it to the score
    const result=comparison(botChoice, choice.value)
    score += result ;
    //  showing score to user and adding other  texts 
    scoreText.textContent=score
    vsText.textContent = `👱🏻‍♂️${choice.value} vs 🤖${botChoice}`;
   
    if(result===1)     winOrLostText.textContent= 'You Win!'
    if(result===-1)     winOrLostText.textContent= 'You Lost!'
    if (result === 0) winOrLostText.textContent = "Draw!";
})
// clear scores when user clicks corresponding button
endGameBtn.addEventListener('click',clearScores)

