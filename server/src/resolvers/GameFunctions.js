const { getAllCards } = require('./Query');
const { shuffledCards } = require('../models/cardDecks.js');

// sortCardsByColorAndValue will take an array of card objects as argument and return an array of those same cards sorted first by color, then by expeditionValue (investment cards first)
function sortCardsByColorAndValue(arr) {
  const colorSort = ["RED", "GREEN", "WHITE", "BLUE", "YELLOW"];
  arr.sort(function(a,b) {
    if (colorSort.indexOf(a.color) < colorSort.indexOf(b.color)) { return -1 }
    else if (colorSort.indexOf(a.color) > colorSort.indexOf(b.color)) { return 1 }

    if (a.cardType == "INVESTMENT") { return -1 }
    else if (b.cardType == "INVESTMENT") { return 1 }

    if (a.expeditionValue < b.expeditionValue) { return -1 }
    else { return 1 }
  })
  return arr;
}

// dealFullHand will take an array of (shuffled) cards and will return an eight card array of the first eight cards in the deck. **This will mutate the original deck**.
function dealCards(deck, n) {
  return deck.splice(0,n);
}

// INPUTS: arr - an array of CardInstances
// OUTPUT: output - an array of objects of type { connnect: { id: ID } } where the ID is the card ID we want to associate with a particular card stack
function getCardIdsFromConstructedInstances(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push({id: arr[i].card.connect.id});
  }
  return output;
}

module.exports = {
  sortCardsByColorAndValue,
  dealCards,
  getCardIdsFromConstructedInstances,
}
