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

module.exports = {
  getAllCards,
  shuffleDeck
}
