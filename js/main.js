console.log("LINKED");

// Questions:
// Are my model and view properly seperated?
// How link the card images to the card arrays properly without breaking M/V seperation?
// Random shuffle within an array?
// Explain master render function, should/does this encapsulate all my other functions?
//
// multiple possibilities for Ace Card
//
//

//Model: Data Model

var house = []
var player = []
var houseScore;  // Must be between 17-21, otherwise automatic HIT after user has chosen STAY.
var playerScore; // Must be between 4-21, user interaction determines HIT or STAY

var deck = [2,2,2,2,
            3,3,3,3,
            4,4,4,4,
            5,5,5,5,
            6,6,6,6,
            7,7,7,7,
            8,8,8,8,
            9,9,9,9,
            10,10,10,10,
            10,10,10,10,
            10,10,10,10,
            10,10,10,10,
            11,11,11,11]

var playerBetTotal = 200
var win = false
var tie = false

//Model: Game Behavior

var gameOver = function() {
  if (playerBetTotal === 0) { alert("GAME OVER!")}
} //reset board?

var deal = function() {
  for (var i = 0; i < deck.length; i++) {
  var card = Math.floor(Math.random() * deck.length[i])
  var splicedCard = deck.splice(card, 1);
  return card;
  }
}

// Shuffle function?

// function shuffle(array) {
//   var m = array.length, t, i;
//   while (m) {
//     i = Math.floor(Math.random() * m--);
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }
// }


//   var hit = function() {
//     // push one card from remaining deck into player/house array
//     // if player takes a hit and goes over 21, hand is over and the house wins.
//     player.push()

//   }

//   var stay = //stay button triggers winfunction

//   var addPlayerCards = function(player) {
//     for (var i = 0; i < player.length; i++) {
//       //add individual items in array together into new variable

//     }
//     return ()
//   }

//   var addHouseCards = function(house[a,b]) {
//      return (a + b)
//    }

//   var compareCards = function(addPlayerCards, addHouseCards) {
//       if( addPlayerCards > addHouseCards && addPlayerCards < 21) {
//        console.log("You Win!")
//       } else if {
//        (addHouseCards > addPlayerCards && addHouseCards < 21) {
//        console.log("The House Wins!")
//       }
//   }

//   var gameOver = function() {
//     if (playerBetTotal === 0) { alert("YOU'RE OUTTA LUCK BUDDY!")}
//   }

// View
// Funcitons for Rendering
// Jquery event handlers for DEAL/HIT/STAY & Betting buttons

// $('#deal').on('click', function {

// })

