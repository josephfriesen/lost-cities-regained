"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Card",
    embedded: false
  },
  {
    name: "CardTypes",
    embedded: false
  },
  {
    name: "Colors",
    embedded: false
  },
  {
    name: "Game",
    embedded: false
  },
  {
    name: "Player",
    embedded: false
  },
  {
    name: "Round",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/lost-cities-regained/lost-cities/dev`,
  secret: `shhhitsasecret8888`
});
exports.prisma = new exports.Prisma();
