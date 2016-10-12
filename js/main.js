console.log("LINKED");

// Model: Data Model

var house = [];
var player = [];
var deck = [];
var houseScore;
var playerScore;
var deckCssVals = [
  'd02', 'd03', 'd04', 'd05', 'd06', 'd07', 'd08', 'd09', 'd10', 'dJ', 'dQ', 'dK', 'dA',
  'c02', 'c03', 'c04', 'c05', 'c06', 'c07', 'c08', 'c09', 'c10', 'cJ', 'cQ', 'cK', 'cA',
  's02', 's03', 's04', 's05', 's06', 's07', 's08', 's09', 's10', 'sJ', 'sQ', 'sK', 'sA',
  'h02', 'h03', 'h04', 'h05', 'h06', 'h07', 'h08', 'h09', 'h10', 'hJ', 'hQ', 'hK', 'hA'
];
var playerBetTotal = 200
var bettingPool;
var win = false
var tie = false

// Betting Logic
var bet = function(amount) {
  // playerBetTotal must be > 0
  playerBetTotal -= amount
  bettingPool = amount
  return playerBetTotal
}

//  Use Jquery events to:
//  1) Dynamically change playerBet HTML with new value from Bet win/loss


//Function which returns numeric values from deckCssVals
function getCardValue(cssValue) {
  if (cssValue.length > 2) {
    var numbers = cssValue.substr(cssValue.length -2)
    return parseInt(numbers)
  } else if (cssValue.slice(1) === 'A') {
    return 11
  } else {
    return 10
  }
}

class Card {
  constructor(cssName, value) {
    this.cssName = cssName;
    this.value = value;
  }
}

//Model: Game Behavior

//Creates Deck
function createDeck() {
  var holder = [];
  for (var i = 0; i < deckCssVals.length; i++) {
    holder.push(new Card(deckCssVals[i], getCardValue(deckCssVals[i])))
  }
  deck = holder;
}

//Randomize Card Values
var deal = function(hand) {
  var card = Math.floor(Math.random() * deck.length)
  var splicedCard = deck.splice(card, 1)[0];
  hand.push(splicedCard);
}

//Deals Two Random Card Values from Deck Array to House Array and Player Array
var startGame = function () {
  deal(player);
  deal(player);
  deal(house);
  deal(house);
}

//Deal another card to Player Array
var hitPlayer = function() {
    deal(player);
}

//Add Numeric Values within Player Array and House Array
var addCards = function(person) {
  return person.sort((a,b) => a.value - b.value).reduce(function(a, b) {
    if (b.value === 11 && (a + 11) > 21) {
      return a + 1;
    }
    return a + b.value;
  }, 0);
}

//Set addCards output to global variables playerScore & houseScore
var setScores = function() {
  playerScore = addCards(player);
  houseScore  = addCards(house);
}

//Deal card to House Array
var hitHouse = function() {
  if (houseScore < 17) {
    deal(house);
  }
}

//Compare playerScore with HouseScore
var compareCards = function() {
    if (playerScore > houseScore && playerScore < 22) {
      console.log("You Win!")
      win = true;
      playerBetTotal += bettingPool * 2
     } else if (houseScore > playerScore && houseScore < 22) {
      console.log("The House Wins!");
      gameOver();
     } else {
      tie = true;
      console.log('TIE')
      playerBetTotal += bettingPool
    }
}

//Reset/Reshuffle the deck/player/house array
var restart = function() {
  player = [];
  house = [];
  deck = [];
}

//function expression
function gameOver() {
  if (playerBetTotal === 0) {
    alert('GAME OVER')
  }
}

// View

$('#deal').on('click', function(){
   alert('Cards Dealt')
   startGame();
   addCards(player);
   addCards(house);
});

$('#hit').on('click', function(){
   alert('Player hits')
   hitPlayer();
});

$('#stay').on('click', function() {
    alert('Comparing Cards')
    setScores();
    hitHouse();
    compareCards();
});


function render() {

  for (var i=0; i < player.length; i++) {
    $('.player').eq(i).removeClass('back-blue').addClass(player[i].cssName)
  }

  for (var i=0; i < house.length; i++) {
    $('.house').eq(i).removeClass('back-blue').addClass(house[i].cssName)
  }
}
