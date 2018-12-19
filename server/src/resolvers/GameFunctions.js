const { getAllCards } = require('./Query');
const { shuffledCards } = require('../models/cardDecks.js');

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

console.log(sortCardsByColorAndValue(shuffledCards));

module.exports = {
  sortCardsByColorAndValue,
}
