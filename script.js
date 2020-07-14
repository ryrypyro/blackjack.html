// Game #1 - Calculate Your Age in Days 
    
// alert('This is the first website that I built, it sucks though lol');
function ageInSeconds() {
  var birthyear = prompt('Please enter your date of birth'); 
  var yourAgeInSeconds = (2020 - birthyear) * 31536000;
  var h1 = document.createElement('h1'); 
  var textAnswer = document.createTextNode('Your approximate age is ' + yourAgeInSeconds + ' seconds old.');
  h1.setAttribute('id', 'ageInSeconds'); 
  h1.appendChild(textAnswer);  
 document.getElementById('flex-box-result').appendChild(h1); 
 document.querySelector('#ageInSeconds').style.color = '#ffffff'; 
}

function Restart() {
    document.getElementById('ageInSeconds').remove(); 
} 

// Game #2 - Generate a Cat 
function generateCatto() {
  var image = document.createElement('img'); 
  var div = document.getElementById('cat-flex-gen'); 
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
  div.appendChild(image);
}

function resetCattos() {
  document.getElementById('cat-flex-gen').innerHTML = ''; 
} 

// Game #3 - Rock, Paper, Scissors!   
function rpsc(game3) {
  console.log(game3);
  var human, bot; 
  human = game3.id;
  
  bot = numtochoice(randomtorps());
  console.log('computer:', bot);  
  
  
  result = theWinner(human, bot); // [0,1] human lost | bot won & [1,0] human won | bot lost 
  console.log(result);
  
  message = finalMessage(result); // {message: 'You win! Congrats.} 
  console.log(message);  
  rpsFrontEnd(game3.id, bot, message);
}

function randomtorps() {
  return Math.floor(Math.random() * 3); 
}

function numtochoice(number) {
  return ['rock', 'paper', 'scissor'] [number]; 
}

function theWinner(game3, computer) { 
  var rpsDatabase = {
    'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
    'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
    'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0},
  }; 

  var myScore = rpsDatabase[game3] [computer]; 
  var computerScore = rpsDatabase[computer] [game3]; 
  return [myScore, computerScore]; 
}

function finalMessage([myScore, computerScore]) {
  if (myScore === 0) {
    return {'message': 'You lose! Try again?', 'color': 'red'}; 
  } else if (myScore === 0.5) {
    return {'message': 'It is a tie.', 'color': 'gray'}; 
  } else {
    return {'message': 'You win!', 'color': 'green'};  
  }
}

function rpsFrontEnd(humanIMGC, botIMGC, finalMessage) {
  var imagesDB = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissor': document.getElementById('scissor').src
  }

  // we're going to be removing all the images
  document.getElementById('rock').remove(); 
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove(); 

  var humanDiv = document.createElement('div');  
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div'); 

  humanDiv.innerHTML = "<img src='" + imagesDB[humanIMGC] + "' height=250 width=270 style='box-shadow: 0px 10px 25px rgba(37, 50, 233, 1);'>"
  messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 70px; padding: 60px; '>" + finalMessage['message'] + "</h1>"
  botDiv.innerHTML = "<img src='" + imagesDB[botIMGC] + "' height=250 width=250 style='box-shadow: 0px 10px 25px rgba(243, 38, 24, 1);'>"

  document.getElementById('flex-box-rpss').appendChild(humanDiv); 
  document.getElementById('flex-box-rpss').appendChild(botDiv);
  document.getElementById('flex-box-rpss').appendChild(messageDiv);
} 

function resetRPS() {
  document.getElementById('flex-box-rpss').innerHTML = ''; 
} 

// Game #4 - Button Color Changer 
var allButtons = document.getElementsByTagName('button'); 


var copyAllButton = [];
for (let i=0; i < allButtons.length; i++) {
  copyAllButton.push(allButtons[i].classList[1]); 
} 

console.log(copyAllButton); 


function colorChange(btn) {
  if (btn.value === 'bl') {
    btnBlue();  
  } else if (btn.value === 'rd') {
    btnRed();
  } else if (btn.value === 'yl') {
    btnYellow();
  } else if (btn.value === 'gr') {
    btnGreen(); 
  } else if (btn.value === 'drk') {
    btnDark(); 
  } else if (btn.value === 'wh') {
    btnWhite(); 
  } else if (btn.value === 'lightb') {
    btnLightBlue();
  } else if (btn.value === 'gy') {
    btnGray();   
  } else if (btn.value === 'rnd') {
    btnRandom();
  } else if (btn.value === 'ref') {
    btnRefresh();
  }
}

function btnBlue() {
  for (let i=0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]); 
    allButtons[i].classList.add('btn-primary'); 
  }
}

function btnRed() {
  for (let i=0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]); 
    allButtons[i].classList.add('btn-danger'); 
  }
}


function btnYellow() {
  for (let i=0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]); 
    allButtons[i].classList.add('btn-warning'); 
  }
}


function btnGreen() {
  for (let i=0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]); 
    allButtons[i].classList.add('btn-success'); 
  }
}


function btnDark() {
  for (let i=0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]); 
    allButtons[i].classList.add('btn-dark'); 
  }
}


function btnWhite() {
  for (let i=0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]); 
    allButtons[i].classList.add('btn-white'); 
  }
}

function btnLightBlue() {
  for (let i=0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]); 
    allButtons[i].classList.add('btn-info'); 
  }
}


function btnGray() {
  for (let i=0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]); 
    allButtons[i].classList.add('btn-secondary'); 
  }
}

function btnRandom() {
 var choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success', 'btn-dark', 'btn-white', 'btn-info', 'btn-secondary']

 for (let i=0; i < allButtons.length; i++) {
   var randomN = Math.floor(Math.random() * 8); 
  allButtons[i].classList.remove(allButtons[i].classList[1]); 
  allButtons[i].classList.add(choices[randomN]); 

 }
}

function btnRefresh() {
  for (let i=0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyAllButton[i]); 
  }
}

// GAME #5 - LET'S PLAY BLACKJACK!  
let bjGame = {
  'you': {'scoreSpan': '#your-bj-result', 'div': '#your-box', 'score': 0},
  'dealer': {'scoreSpan': '#bot-bj-result', 'div': '#opp-box', 'score': 0},
  'cards': ['2C,', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'KC', 'JC', 'QC', 'AC', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'KD', 'JD', 'QD', 'AD', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'KH', 'JH', 'QH', 'AH', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'KS', 'JS', 'QS', 'AS'], 
  'cardVals': {'2C': 2, '3C': 3, '4C': 4, '5C': 5, '6C': 6, '7C': 7, '8C': 8, '9C': 9, '10C': 10, 'KC': 10, 'JC': 10, 'QC': 10, 'AC': [1, 11], '2D': 2, '3D': 3, '4D': 4, '5D': 5, '6D': 6, '7D': 7, '8D': 8, '9D': 9, '10D': 10, 'KD': 10, 'JD': 10, 'QD': 10, 'AD': [1, 11], '2H': 2, '3H': 3, '4H': 4, '5H': 5, '6H': 6, '7H': 7, '8H': 8, '9H': 9, '10H': 10, 'KH': 10, 'JH': 10, 'QH': 10, 'AH': [1, 11], '2S': 2, '3S': 3, '4S': 4, '5S': 5, '6S': 6, '7S': 7, '8S': 8, '9S': 9, '10S': 10, 'KS': 10, 'JS': 10, 'QS': 10, 'AS': [1, 11]},
  'Score': 0,
  'Bot-Score': 0,
  'Ties': 0, 
  'Stand': false, 
  'turnOver': false, 
};

const You = bjGame['you']
const Dealer = bjGame['dealer']

const hSound = new Audio('sounds/Sound Effects Button.mp3');
const wSound = new Audio('sounds/WINNER.mp3');
const lSound = new Audio('sounds/FAIL.mp3'); 
const tSound = new Audio('sounds/bruh.mp3')
document.querySelector('#bj-hit-btn').addEventListener('click', bjHit); 
document.querySelector('#bj-stand-btn').addEventListener('click', dealerL);
document.querySelector('#bj-deal-btn').addEventListener('click', bjDeal);

function bjHit() {
  if (bjGame['Stand'] === false) {
  let cards = randomC(); 
  console.log(cards); 
  sCard(cards, You); 
  scoreUpDated(cards, You); 
  sScore(You);  
  console.log(You['score']); 
  }
}

function randomC() {
  let rIndex = Math.floor(Math.random() * 52); 
  return bjGame['cards'][rIndex]; 
}

function sCard(cards, playerATM) {
  if (playerATM['score'] <= 21) {
let cardIMG = document.createElement('img'); 
cardIMG.src = 'card/'+cards+'.png'; 
document.querySelector(playerATM['div']).appendChild(cardIMG); 
hSound.play(); 
  }
}

function bjDeal() {
  if (bjGame['turnOver'] === true)

  bjGame['Stand'] = false; 

  let myIMGS = document.querySelector('#your-box').querySelectorAll('img'); 
  let dealerIMGS = document.querySelector('#opp-box').querySelectorAll('img'); 


  
  for (i=0; i < myIMGS.length; i++) {
    myIMGS[i].remove(); 
  }
  for (i=0; i < dealerIMGS.length; i++) {
    dealerIMGS[i].remove(); 
  }


  You['score'] = 0;
  Dealer['score'] = 0; 

  document.querySelector('#your-bj-result').textContent = 0; 
  document.querySelector('#bot-bj-result').textContent = 0; 
  document.querySelector('#your-bj-result').style.color = '#ffff33';
  document.querySelector('#bot-bj-result').style.color = '#ffff33';  
  document.querySelector('#bj-result').textContent = "LET'S PLAY!"; 
  document.querySelector('#bj-result').style.color = 'black';   
  bjGame['turnOver'] = true; 
}




 function scoreUpDated(cards, playerATM) {
  if (['AC', 'AD', 'AH', 'AS'].includes(cards))
  {
  // If adding 11 will keep me below 21, add 11. Otherwise, add 1. 
  if (playerATM['score'] + bjGame['cardVals'][cards][1] <= 21) {
    playerATM['score'] += bjGame['cardVals'][cards] [1]; 
  } else {
    playerATM['score'] += bjGame['cardVals'][cards][0]; 
  }
} else {
  playerATM['score'] += bjGame['cardVals'] [cards]; 
  }
}

 function sScore(playerATM) {
   if (playerATM['score'] > 21) {
     document.querySelector(playerATM['scoreSpan']).textContent = 'BUST! You went over 21.';
     document.querySelector(playerATM['scoreSpan']).style.color = 'orange';  
   } else {
     document.querySelector(playerATM['scoreSpan']).textContent = playerATM['score']; 
   }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); 
}

 async function dealerL() {
  bjGame['Stand'] = true; 

  while (Dealer['score'] < 16 && bjGame['Stand'] === true) {
    let cards = randomC(); 
    sCard(cards, Dealer);
    scoreUpDated(cards, Dealer);
    sScore(Dealer); 
    await sleep(1000); 
  }


 bjGame['turnOver'] = true; 
  let winner = cWinner();
  showResult(winner); 
}


// computer whoever the winner is, and return the score of who won. 
// update the wins, draws, and losses in the chart on the bottom of the game. 
function cWinner() {
  let winner;

  if (You['score'] <= 21) {
    // condition: higher score than dealer or when dealer busts but you're 21 or under 
      if (You['score'] > Dealer['score'] || (Dealer['score'] > 21)) {
       bjGame['Score']++; 
       winner = You; 
      
      } else if (You['score'] < Dealer['score']) {
       bjGame['Bot-Score']++;  
       winner = Dealer; 
      
      } else if (You['score'] === Dealer['score']) {
      bjGame['Ties']++;
      } 
    // condition: when the human busts but the dealer doesn't. 
  } else if (You['score'] > 21 && Dealer['score'] <= 21) {
       bjGame['Bot-Score']++;  
       winner = Dealer; 

    // condition: when you AND (&&) the dealer bust.

  } else if (You['score'] > 21 && Dealer['score'] > 21) {
    bjGame['Ties']++;
  }
  console.log(bjGame);  
    return winner; 
  }
  
function showResult(winner) {
  let message, messageColor;
  
  if (bjGame['turnOver'] === true) {



  if (winner === You) {
  document.querySelector('#Score').textContent = bjGame['Score']; 
  message = 'You win! Congrats!'; 
  messageColor = 'green'; 
  wSound.play(); 

} else if (winner === Dealer) {
  document.querySelector('#Bot-Score').textContent = bjGame['Bot-Score']; 
message = 'You lost! Try again?'; 
messageColor = 'red'; 
lSound.play(); 

  } else {
  document.querySelector('#Ties').textContent = bjGame['Ties']; 
message = 'It is a tie. Nobody wins.';
messageColor = '#B2560D'; 
tSound.play(); 
  }
document.querySelector('#bj-result').textContent = message;
document.querySelector('#bj-result').style.color = messageColor; 
  }
}



