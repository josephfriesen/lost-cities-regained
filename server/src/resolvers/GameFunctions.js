const { getAllCards } = require('./Query');
const { shuffledCards } = require('../models/cardDecks.js');

// function getPermutation() {
//   let arr = [];
//   for (let n = 0; n < 60; n++) {
//     arr.push(n);
//   }
//   let out = [];
//   let limit;
//   let rand;
//   for (let i = 0; i < 60; i++) {
//     limit = 60 - i;
//     rand = Math.floor(Math.random() * limit);
//     out.push(arr[rand]);
//     arr.splice(rand,1);
//   }
//   return out;
// }

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
function dealFullHand(deck) {
  return deck.splice(0,8);
}

// getCardIds will take any array of card objects and return an array consisting only of the card ids.
function getCardIds(arr) {
  const len = arr.length;
  let out = [];
  for (let i = 0; i < len; i++) {
    const obj = { id: arr[i].id };
    out.push(obj);
  }
  return out;
}

module.exports = {
  getPermutation,
  sortCardsByColorAndValue,
  dealFullHand,
  getCardIds,

}
