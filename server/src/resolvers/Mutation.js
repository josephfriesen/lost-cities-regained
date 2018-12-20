const { getAllCards, constructRandomizedDeckInstances } = require('./Query');
const { sortCardsByColorAndValue, dealCards, getCardIdsFromConstructedInstances } = require('./GameFunctions');
const { players } = require('../models/players');

function newPlayer(parent, args, context, info) {
  return context.db.mutation.createPlayer({
    data: { ...args }
  }, info)
}

async function newRound(parent, args, context, info) {
  const deck = await constructRandomizedDeckInstances(parent, args, context, info);
  const player1Hand = getCardIdsFromConstructedInstances(dealCards(deck, 8));
  const player2Hand = getCardIdsFromConstructedInstances(dealCards(deck, 8));
  const discardPile = [];
  const roundCreateInput = {
    data: {
      drawDeck: { create: deck },
      player1Hand: { connect: player1Hand },
      player2Hand: { connect: player2Hand },
      player1Tableau: [],
      player2Tableau: [],
      player1Score: 0,
      player2Score: 0
    }
  };
  return context.db.mutation.createRound(roundCreateInput, info);
}

async function newGame(parent, args, context, info) {
  // let roundids = [];
  // for (let i = 1; i <= 3; i++) {
  //   const round = await newRound(parent, args, context, `{id}`);
  //   roundids.push({ id: round.id });
  // }
  // console.log("Your round ids are: ", roundids);
  // return null;
}

module.exports = {
  newPlayer,
  newGame,
  newRound,
}
