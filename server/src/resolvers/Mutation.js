const { getAllCards, shuffleDeck } = require('./Query');
const { sortCardsByColorAndValue, dealFullHand, getCardIds } = require('./GameFunctions');
const { players } = require('../models/players');

function newPlayer(parent, args, context, info) {
  return context.db.mutation.createPlayer({
    data: { ...args }
  }, info)
}

async function newRound(parent, args, context, info) {
  const deck = await shuffleDeck(parent, args, context, info);
  const player1handIds = getCardIds(sortCardsByColorAndValue(dealFullHand(deck)));
  const player1Tableau = [];
  const player1Score = 0;
  const player2handIds = getCardIds(sortCardsByColorAndValue(dealFullHand(deck)));
  const player2Tableau = [];
  const player2Score = 0;
  const drawDeckIds = getCardIds(deck);
  const discardPile = [];
  const roundCreateInput = {
    data: {
      drawDeck: { connect: drawDeckIds },
      player1Hand: { connect: player1handIds },
      player1Tableau: { connect: player1Tableau },
      player2Hand: { connect: player2handIds },
      player2Tableau: { connect: player2Tableau },
      discardPile: { connect: discardPile },
      player1Score,
      player2Score
    }
  }
  return context.db.mutation.createRound(roundCreateInput, info);
}

async function newGame(parent, args, context, info) {
  const deck = await shuffleDeck(parent, args, context, info);
  console.log("this is the shuffled deck: ", deck);
  return null;
}

module.exports = {
  newPlayer,
  newGame,
  newRound,
}
