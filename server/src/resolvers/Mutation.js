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
    drawDeck: { create: deck },
    player1Hand: { connect: player1Hand },
    player2Hand: { connect: player2Hand },
    player1Tableau: [],
    player2Tableau: [],
    player1Score: 0,
    player2Score: 0
  };
  return roundCreateInput;
}

async function newGame(parent, args, context, info) {
  const rounds = { create: [] }
  for (let i = 1; i <= args.roundsNum; i++) {
    const round = await newRound(parent, args, context, info);
    rounds.create.push(round);
  }

  const input = {
    data: {
      rounds,
      roundsNum: args.roundsNum,
      player1: { connect: { id: args.player1 } },
      player2: { connect: { id: args.player2 } },
      currentRound: 1,
      gameInProgress: true,
    }
  }
  console.log(input);
  return null;
}

module.exports = {
  newPlayer,
  newGame,
  newRound,

}
