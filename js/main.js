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
  playerBetTotal - amount
  return playerBetTotal
}

var five = 5
var ten = 10
var twenty = 20

//  Use Jquery events to:
//  deduct the betting amount from playerBetTotal
//
//  after compareCards functin has been invoked, and if player wins
//  take bettingPool and multiply amount by 2 and add to playerBetTotal


//Function which returns numeric values from deckCssVals
function getCardValue(cssValue) {
  if (cssValue.length > 2) {
    var numbers = cssValue.substr(cssValue.length -2)
    return parseInt(numbers)
  }
  else if (cssValue.slice(1) === 'A') {
    return 11
  }
  else {
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
var setScores = function(player, house) {
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
     } else if (houseScore > playerScore && houseScore < 22) {
      console.log("The House Wins!")
     } else {console.log('TIE')}
}



//Reset/Reshuffle the deck/player/house array
var restart = function() {
  player = [];
  house = [];
  deck = [];
}

// Deal button should trigger these functions in order
// var buttonDeal = function() {
// createDeck();
// startGame();
// addCards(player);
// addCards(house);
// setScores(player, house);
// }

// Hit button should trigger this event
// hitPlayer();

// Stay button should trigger these functions in order
// hitHouse();
// compareCards();

// View
// Funcitons for Rendering
// Jquery event handlers for DEAL/HIT/STAY & Betting buttons
//NOTES: Use Jquery to loop through House array....Add class to cards...

// $('#deal').on('click', createdeck(); startGame(); addCards(player); addCards(house); setScores(player, house););
$('#hit').on('click', hitPlayer());
$('#stay').on('click', compareCards());

function render() {

  for (var i=0; i < player.length; i++) {
    $('.player').eq(i).addClass(player[i].cssName)
  }

  for (var i=0; i < house.length; i++) {
    $('.house').eq(i).addClass(house[i].cssName)
  }
}
