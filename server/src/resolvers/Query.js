function getAllCards(parent, args, context, info) {
  return context.db.query.cards()
}

async function shuffleDeck(parent, args, context, info) {
  let deck = await context.db.query.cards();
  const len = deck.length;
  let output = [];
  let limit;
  let rand;
  for (let i = 0; i < len; i++) {
    limit = len - i;
    rand = Math.floor(Math.random() * limit);
    output.push(deck[rand]);
    deck.splice(rand,1);
  }
  return output;
}

async function getNewCards(parent, args, context, info) {
  // ARGS:
  // filterList: list of IDs to filter the deck, these are cards that have been dealt already
  // num: number of unique cards to get
  let deck = await context.db.query.cards();
  deck.filter(card => {
    filterList.
  })
}

module.exports = {
  getAllCards,
  shuffleDeck,
  getNewCards,
}
