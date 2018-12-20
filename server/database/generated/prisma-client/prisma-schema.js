module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCard {
  count: Int!
}

type AggregateCardInstance {
  count: Int!
}

type AggregateGame {
  count: Int!
}

type AggregatePlayer {
  count: Int!
}

type AggregateRound {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Card {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  cardType: CardTypes!
  expeditionValue: Int
  color: Colors!
}

type CardConnection {
  pageInfo: PageInfo!
  edges: [CardEdge]!
  aggregate: AggregateCard!
}

input CardCreateInput {
  cardType: CardTypes!
  expeditionValue: Int
  color: Colors!
}

input CardCreateManyInput {
  create: [CardCreateInput!]
  connect: [CardWhereUniqueInput!]
}

input CardCreateOneInput {
  create: CardCreateInput
  connect: CardWhereUniqueInput
}

type CardEdge {
  node: Card!
  cursor: String!
}

type CardInstance {
  card: Card!
  orderIndex: Int
}

type CardInstanceConnection {
  pageInfo: PageInfo!
  edges: [CardInstanceEdge]!
  aggregate: AggregateCardInstance!
}

input CardInstanceCreateInput {
  card: CardCreateOneInput!
  orderIndex: Int
}

input CardInstanceCreateManyInput {
  create: [CardInstanceCreateInput!]
}

type CardInstanceEdge {
  node: CardInstance!
  cursor: String!
}

enum CardInstanceOrderByInput {
  orderIndex_ASC
  orderIndex_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CardInstancePreviousValues {
  orderIndex: Int
}

input CardInstanceScalarWhereInput {
  orderIndex: Int
  orderIndex_not: Int
  orderIndex_in: [Int!]
  orderIndex_not_in: [Int!]
  orderIndex_lt: Int
  orderIndex_lte: Int
  orderIndex_gt: Int
  orderIndex_gte: Int
  AND: [CardInstanceScalarWhereInput!]
  OR: [CardInstanceScalarWhereInput!]
  NOT: [CardInstanceScalarWhereInput!]
}

type CardInstanceSubscriptionPayload {
  mutation: MutationType!
  node: CardInstance
  updatedFields: [String!]
  previousValues: CardInstancePreviousValues
}

input CardInstanceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CardInstanceWhereInput
  AND: [CardInstanceSubscriptionWhereInput!]
  OR: [CardInstanceSubscriptionWhereInput!]
  NOT: [CardInstanceSubscriptionWhereInput!]
}

input CardInstanceUpdateManyDataInput {
  orderIndex: Int
}

input CardInstanceUpdateManyInput {
  create: [CardInstanceCreateInput!]
  deleteMany: [CardInstanceScalarWhereInput!]
  updateMany: [CardInstanceUpdateManyWithWhereNestedInput!]
}

input CardInstanceUpdateManyMutationInput {
  orderIndex: Int
}

input CardInstanceUpdateManyWithWhereNestedInput {
  where: CardInstanceScalarWhereInput!
  data: CardInstanceUpdateManyDataInput!
}

input CardInstanceWhereInput {
  card: CardWhereInput
  orderIndex: Int
  orderIndex_not: Int
  orderIndex_in: [Int!]
  orderIndex_not_in: [Int!]
  orderIndex_lt: Int
  orderIndex_lte: Int
  orderIndex_gt: Int
  orderIndex_gte: Int
  AND: [CardInstanceWhereInput!]
  OR: [CardInstanceWhereInput!]
  NOT: [CardInstanceWhereInput!]
}

enum CardOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  cardType_ASC
  cardType_DESC
  expeditionValue_ASC
  expeditionValue_DESC
  color_ASC
  color_DESC
}

type CardPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  cardType: CardTypes!
  expeditionValue: Int
  color: Colors!
}

input CardScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  cardType: CardTypes
  cardType_not: CardTypes
  cardType_in: [CardTypes!]
  cardType_not_in: [CardTypes!]
  expeditionValue: Int
  expeditionValue_not: Int
  expeditionValue_in: [Int!]
  expeditionValue_not_in: [Int!]
  expeditionValue_lt: Int
  expeditionValue_lte: Int
  expeditionValue_gt: Int
  expeditionValue_gte: Int
  color: Colors
  color_not: Colors
  color_in: [Colors!]
  color_not_in: [Colors!]
  AND: [CardScalarWhereInput!]
  OR: [CardScalarWhereInput!]
  NOT: [CardScalarWhereInput!]
}

type CardSubscriptionPayload {
  mutation: MutationType!
  node: Card
  updatedFields: [String!]
  previousValues: CardPreviousValues
}

input CardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CardWhereInput
  AND: [CardSubscriptionWhereInput!]
  OR: [CardSubscriptionWhereInput!]
  NOT: [CardSubscriptionWhereInput!]
}

enum CardTypes {
  INVESTMENT
  EXPEDITION
}

input CardUpdateDataInput {
  cardType: CardTypes
  expeditionValue: Int
  color: Colors
}

input CardUpdateInput {
  cardType: CardTypes
  expeditionValue: Int
  color: Colors
}

input CardUpdateManyDataInput {
  cardType: CardTypes
  expeditionValue: Int
  color: Colors
}

input CardUpdateManyInput {
  create: [CardCreateInput!]
  update: [CardUpdateWithWhereUniqueNestedInput!]
  upsert: [CardUpsertWithWhereUniqueNestedInput!]
  delete: [CardWhereUniqueInput!]
  connect: [CardWhereUniqueInput!]
  disconnect: [CardWhereUniqueInput!]
  deleteMany: [CardScalarWhereInput!]
  updateMany: [CardUpdateManyWithWhereNestedInput!]
}

input CardUpdateManyMutationInput {
  cardType: CardTypes
  expeditionValue: Int
  color: Colors
}

input CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput!
  data: CardUpdateManyDataInput!
}

input CardUpdateWithWhereUniqueNestedInput {
  where: CardWhereUniqueInput!
  data: CardUpdateDataInput!
}

input CardUpsertWithWhereUniqueNestedInput {
  where: CardWhereUniqueInput!
  update: CardUpdateDataInput!
  create: CardCreateInput!
}

input CardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  cardType: CardTypes
  cardType_not: CardTypes
  cardType_in: [CardTypes!]
  cardType_not_in: [CardTypes!]
  expeditionValue: Int
  expeditionValue_not: Int
  expeditionValue_in: [Int!]
  expeditionValue_not_in: [Int!]
  expeditionValue_lt: Int
  expeditionValue_lte: Int
  expeditionValue_gt: Int
  expeditionValue_gte: Int
  color: Colors
  color_not: Colors
  color_in: [Colors!]
  color_not_in: [Colors!]
  AND: [CardWhereInput!]
  OR: [CardWhereInput!]
  NOT: [CardWhereInput!]
}

input CardWhereUniqueInput {
  id: ID
}

enum Colors {
  RED
  GREEN
  WHITE
  BLUE
  YELLOW
}

scalar DateTime

type Game {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  player1: Player!
  player2: Player!
  roundsNum: Int!
  rounds(where: RoundWhereInput, orderBy: RoundOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Round!]
  player1Score: Int!
  player2Score: Int!
  currentRound: Int!
  gameInProgress: Boolean!
  Winner: Player
}

type GameConnection {
  pageInfo: PageInfo!
  edges: [GameEdge]!
  aggregate: AggregateGame!
}

input GameCreateInput {
  player1: PlayerCreateOneWithoutGamesStartedInput!
  player2: PlayerCreateOneWithoutGamesJoinedInput!
  roundsNum: Int
  rounds: RoundCreateManyInput
  player1Score: Int
  player2Score: Int
  currentRound: Int!
  gameInProgress: Boolean
  Winner: PlayerCreateOneWithoutGamesWonInput
}

input GameCreateManyWithoutPlayer1Input {
  create: [GameCreateWithoutPlayer1Input!]
  connect: [GameWhereUniqueInput!]
}

input GameCreateManyWithoutPlayer2Input {
  create: [GameCreateWithoutPlayer2Input!]
  connect: [GameWhereUniqueInput!]
}

input GameCreateManyWithoutWinnerInput {
  create: [GameCreateWithoutWinnerInput!]
  connect: [GameWhereUniqueInput!]
}

input GameCreateWithoutPlayer1Input {
  player2: PlayerCreateOneWithoutGamesJoinedInput!
  roundsNum: Int
  rounds: RoundCreateManyInput
  player1Score: Int
  player2Score: Int
  currentRound: Int!
  gameInProgress: Boolean
  Winner: PlayerCreateOneWithoutGamesWonInput
}

input GameCreateWithoutPlayer2Input {
  player1: PlayerCreateOneWithoutGamesStartedInput!
  roundsNum: Int
  rounds: RoundCreateManyInput
  player1Score: Int
  player2Score: Int
  currentRound: Int!
  gameInProgress: Boolean
  Winner: PlayerCreateOneWithoutGamesWonInput
}

input GameCreateWithoutWinnerInput {
  player1: PlayerCreateOneWithoutGamesStartedInput!
  player2: PlayerCreateOneWithoutGamesJoinedInput!
  roundsNum: Int
  rounds: RoundCreateManyInput
  player1Score: Int
  player2Score: Int
  currentRound: Int!
  gameInProgress: Boolean
}

type GameEdge {
  node: Game!
  cursor: String!
}

enum GameOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  roundsNum_ASC
  roundsNum_DESC
  player1Score_ASC
  player1Score_DESC
  player2Score_ASC
  player2Score_DESC
  currentRound_ASC
  currentRound_DESC
  gameInProgress_ASC
  gameInProgress_DESC
}

type GamePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  roundsNum: Int!
  player1Score: Int!
  player2Score: Int!
  currentRound: Int!
  gameInProgress: Boolean!
}

input GameScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  roundsNum: Int
  roundsNum_not: Int
  roundsNum_in: [Int!]
  roundsNum_not_in: [Int!]
  roundsNum_lt: Int
  roundsNum_lte: Int
  roundsNum_gt: Int
  roundsNum_gte: Int
  player1Score: Int
  player1Score_not: Int
  player1Score_in: [Int!]
  player1Score_not_in: [Int!]
  player1Score_lt: Int
  player1Score_lte: Int
  player1Score_gt: Int
  player1Score_gte: Int
  player2Score: Int
  player2Score_not: Int
  player2Score_in: [Int!]
  player2Score_not_in: [Int!]
  player2Score_lt: Int
  player2Score_lte: Int
  player2Score_gt: Int
  player2Score_gte: Int
  currentRound: Int
  currentRound_not: Int
  currentRound_in: [Int!]
  currentRound_not_in: [Int!]
  currentRound_lt: Int
  currentRound_lte: Int
  currentRound_gt: Int
  currentRound_gte: Int
  gameInProgress: Boolean
  gameInProgress_not: Boolean
  AND: [GameScalarWhereInput!]
  OR: [GameScalarWhereInput!]
  NOT: [GameScalarWhereInput!]
}

type GameSubscriptionPayload {
  mutation: MutationType!
  node: Game
  updatedFields: [String!]
  previousValues: GamePreviousValues
}

input GameSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GameWhereInput
  AND: [GameSubscriptionWhereInput!]
  OR: [GameSubscriptionWhereInput!]
  NOT: [GameSubscriptionWhereInput!]
}

input GameUpdateInput {
  player1: PlayerUpdateOneRequiredWithoutGamesStartedInput
  player2: PlayerUpdateOneRequiredWithoutGamesJoinedInput
  roundsNum: Int
  rounds: RoundUpdateManyInput
  player1Score: Int
  player2Score: Int
  currentRound: Int
  gameInProgress: Boolean
  Winner: PlayerUpdateOneWithoutGamesWonInput
}

input GameUpdateManyDataInput {
  roundsNum: Int
  player1Score: Int
  player2Score: Int
  currentRound: Int
  gameInProgress: Boolean
}

input GameUpdateManyMutationInput {
  roundsNum: Int
  player1Score: Int
  player2Score: Int
  currentRound: Int
  gameInProgress: Boolean
}

input GameUpdateManyWithoutPlayer1Input {
  create: [GameCreateWithoutPlayer1Input!]
  delete: [GameWhereUniqueInput!]
  connect: [GameWhereUniqueInput!]
  disconnect: [GameWhereUniqueInput!]
  update: [GameUpdateWithWhereUniqueWithoutPlayer1Input!]
  upsert: [GameUpsertWithWhereUniqueWithoutPlayer1Input!]
  deleteMany: [GameScalarWhereInput!]
  updateMany: [GameUpdateManyWithWhereNestedInput!]
}

input GameUpdateManyWithoutPlayer2Input {
  create: [GameCreateWithoutPlayer2Input!]
  delete: [GameWhereUniqueInput!]
  connect: [GameWhereUniqueInput!]
  disconnect: [GameWhereUniqueInput!]
  update: [GameUpdateWithWhereUniqueWithoutPlayer2Input!]
  upsert: [GameUpsertWithWhereUniqueWithoutPlayer2Input!]
  deleteMany: [GameScalarWhereInput!]
  updateMany: [GameUpdateManyWithWhereNestedInput!]
}

input GameUpdateManyWithoutWinnerInput {
  create: [GameCreateWithoutWinnerInput!]
  delete: [GameWhereUniqueInput!]
  connect: [GameWhereUniqueInput!]
  disconnect: [GameWhereUniqueInput!]
  update: [GameUpdateWithWhereUniqueWithoutWinnerInput!]
  upsert: [GameUpsertWithWhereUniqueWithoutWinnerInput!]
  deleteMany: [GameScalarWhereInput!]
  updateMany: [GameUpdateManyWithWhereNestedInput!]
}

input GameUpdateManyWithWhereNestedInput {
  where: GameScalarWhereInput!
  data: GameUpdateManyDataInput!
}

input GameUpdateWithoutPlayer1DataInput {
  player2: PlayerUpdateOneRequiredWithoutGamesJoinedInput
  roundsNum: Int
  rounds: RoundUpdateManyInput
  player1Score: Int
  player2Score: Int
  currentRound: Int
  gameInProgress: Boolean
  Winner: PlayerUpdateOneWithoutGamesWonInput
}

input GameUpdateWithoutPlayer2DataInput {
  player1: PlayerUpdateOneRequiredWithoutGamesStartedInput
  roundsNum: Int
  rounds: RoundUpdateManyInput
  player1Score: Int
  player2Score: Int
  currentRound: Int
  gameInProgress: Boolean
  Winner: PlayerUpdateOneWithoutGamesWonInput
}

input GameUpdateWithoutWinnerDataInput {
  player1: PlayerUpdateOneRequiredWithoutGamesStartedInput
  player2: PlayerUpdateOneRequiredWithoutGamesJoinedInput
  roundsNum: Int
  rounds: RoundUpdateManyInput
  player1Score: Int
  player2Score: Int
  currentRound: Int
  gameInProgress: Boolean
}

input GameUpdateWithWhereUniqueWithoutPlayer1Input {
  where: GameWhereUniqueInput!
  data: GameUpdateWithoutPlayer1DataInput!
}

input GameUpdateWithWhereUniqueWithoutPlayer2Input {
  where: GameWhereUniqueInput!
  data: GameUpdateWithoutPlayer2DataInput!
}

input GameUpdateWithWhereUniqueWithoutWinnerInput {
  where: GameWhereUniqueInput!
  data: GameUpdateWithoutWinnerDataInput!
}

input GameUpsertWithWhereUniqueWithoutPlayer1Input {
  where: GameWhereUniqueInput!
  update: GameUpdateWithoutPlayer1DataInput!
  create: GameCreateWithoutPlayer1Input!
}

input GameUpsertWithWhereUniqueWithoutPlayer2Input {
  where: GameWhereUniqueInput!
  update: GameUpdateWithoutPlayer2DataInput!
  create: GameCreateWithoutPlayer2Input!
}

input GameUpsertWithWhereUniqueWithoutWinnerInput {
  where: GameWhereUniqueInput!
  update: GameUpdateWithoutWinnerDataInput!
  create: GameCreateWithoutWinnerInput!
}

input GameWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  player1: PlayerWhereInput
  player2: PlayerWhereInput
  roundsNum: Int
  roundsNum_not: Int
  roundsNum_in: [Int!]
  roundsNum_not_in: [Int!]
  roundsNum_lt: Int
  roundsNum_lte: Int
  roundsNum_gt: Int
  roundsNum_gte: Int
  rounds_every: RoundWhereInput
  rounds_some: RoundWhereInput
  rounds_none: RoundWhereInput
  player1Score: Int
  player1Score_not: Int
  player1Score_in: [Int!]
  player1Score_not_in: [Int!]
  player1Score_lt: Int
  player1Score_lte: Int
  player1Score_gt: Int
  player1Score_gte: Int
  player2Score: Int
  player2Score_not: Int
  player2Score_in: [Int!]
  player2Score_not_in: [Int!]
  player2Score_lt: Int
  player2Score_lte: Int
  player2Score_gt: Int
  player2Score_gte: Int
  currentRound: Int
  currentRound_not: Int
  currentRound_in: [Int!]
  currentRound_not_in: [Int!]
  currentRound_lt: Int
  currentRound_lte: Int
  currentRound_gt: Int
  currentRound_gte: Int
  gameInProgress: Boolean
  gameInProgress_not: Boolean
  Winner: PlayerWhereInput
  AND: [GameWhereInput!]
  OR: [GameWhereInput!]
  NOT: [GameWhereInput!]
}

input GameWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCard(data: CardCreateInput!): Card!
  updateCard(data: CardUpdateInput!, where: CardWhereUniqueInput!): Card
  updateManyCards(data: CardUpdateManyMutationInput!, where: CardWhereInput): BatchPayload!
  upsertCard(where: CardWhereUniqueInput!, create: CardCreateInput!, update: CardUpdateInput!): Card!
  deleteCard(where: CardWhereUniqueInput!): Card
  deleteManyCards(where: CardWhereInput): BatchPayload!
  createCardInstance(data: CardInstanceCreateInput!): CardInstance!
  updateManyCardInstances(data: CardInstanceUpdateManyMutationInput!, where: CardInstanceWhereInput): BatchPayload!
  deleteManyCardInstances(where: CardInstanceWhereInput): BatchPayload!
  createGame(data: GameCreateInput!): Game!
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  updateManyGames(data: GameUpdateManyMutationInput!, where: GameWhereInput): BatchPayload!
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  deleteGame(where: GameWhereUniqueInput!): Game
  deleteManyGames(where: GameWhereInput): BatchPayload!
  createPlayer(data: PlayerCreateInput!): Player!
  updatePlayer(data: PlayerUpdateInput!, where: PlayerWhereUniqueInput!): Player
  updateManyPlayers(data: PlayerUpdateManyMutationInput!, where: PlayerWhereInput): BatchPayload!
  upsertPlayer(where: PlayerWhereUniqueInput!, create: PlayerCreateInput!, update: PlayerUpdateInput!): Player!
  deletePlayer(where: PlayerWhereUniqueInput!): Player
  deleteManyPlayers(where: PlayerWhereInput): BatchPayload!
  createRound(data: RoundCreateInput!): Round!
  updateRound(data: RoundUpdateInput!, where: RoundWhereUniqueInput!): Round
  updateManyRounds(data: RoundUpdateManyMutationInput!, where: RoundWhereInput): BatchPayload!
  upsertRound(where: RoundWhereUniqueInput!, create: RoundCreateInput!, update: RoundUpdateInput!): Round!
  deleteRound(where: RoundWhereUniqueInput!): Round
  deleteManyRounds(where: RoundWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Player {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  email: String
  gamesStarted(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game!]
  gamesJoined(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game!]
  gamesWon(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game!]
}

type PlayerConnection {
  pageInfo: PageInfo!
  edges: [PlayerEdge]!
  aggregate: AggregatePlayer!
}

input PlayerCreateInput {
  name: String!
  email: String
  gamesStarted: GameCreateManyWithoutPlayer1Input
  gamesJoined: GameCreateManyWithoutPlayer2Input
  gamesWon: GameCreateManyWithoutWinnerInput
}

input PlayerCreateOneWithoutGamesJoinedInput {
  create: PlayerCreateWithoutGamesJoinedInput
  connect: PlayerWhereUniqueInput
}

input PlayerCreateOneWithoutGamesStartedInput {
  create: PlayerCreateWithoutGamesStartedInput
  connect: PlayerWhereUniqueInput
}

input PlayerCreateOneWithoutGamesWonInput {
  create: PlayerCreateWithoutGamesWonInput
  connect: PlayerWhereUniqueInput
}

input PlayerCreateWithoutGamesJoinedInput {
  name: String!
  email: String
  gamesStarted: GameCreateManyWithoutPlayer1Input
  gamesWon: GameCreateManyWithoutWinnerInput
}

input PlayerCreateWithoutGamesStartedInput {
  name: String!
  email: String
  gamesJoined: GameCreateManyWithoutPlayer2Input
  gamesWon: GameCreateManyWithoutWinnerInput
}

input PlayerCreateWithoutGamesWonInput {
  name: String!
  email: String
  gamesStarted: GameCreateManyWithoutPlayer1Input
  gamesJoined: GameCreateManyWithoutPlayer2Input
}

type PlayerEdge {
  node: Player!
  cursor: String!
}

enum PlayerOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
}

type PlayerPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  email: String
}

type PlayerSubscriptionPayload {
  mutation: MutationType!
  node: Player
  updatedFields: [String!]
  previousValues: PlayerPreviousValues
}

input PlayerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlayerWhereInput
  AND: [PlayerSubscriptionWhereInput!]
  OR: [PlayerSubscriptionWhereInput!]
  NOT: [PlayerSubscriptionWhereInput!]
}

input PlayerUpdateInput {
  name: String
  email: String
  gamesStarted: GameUpdateManyWithoutPlayer1Input
  gamesJoined: GameUpdateManyWithoutPlayer2Input
  gamesWon: GameUpdateManyWithoutWinnerInput
}

input PlayerUpdateManyMutationInput {
  name: String
  email: String
}

input PlayerUpdateOneRequiredWithoutGamesJoinedInput {
  create: PlayerCreateWithoutGamesJoinedInput
  update: PlayerUpdateWithoutGamesJoinedDataInput
  upsert: PlayerUpsertWithoutGamesJoinedInput
  connect: PlayerWhereUniqueInput
}

input PlayerUpdateOneRequiredWithoutGamesStartedInput {
  create: PlayerCreateWithoutGamesStartedInput
  update: PlayerUpdateWithoutGamesStartedDataInput
  upsert: PlayerUpsertWithoutGamesStartedInput
  connect: PlayerWhereUniqueInput
}

input PlayerUpdateOneWithoutGamesWonInput {
  create: PlayerCreateWithoutGamesWonInput
  update: PlayerUpdateWithoutGamesWonDataInput
  upsert: PlayerUpsertWithoutGamesWonInput
  delete: Boolean
  disconnect: Boolean
  connect: PlayerWhereUniqueInput
}

input PlayerUpdateWithoutGamesJoinedDataInput {
  name: String
  email: String
  gamesStarted: GameUpdateManyWithoutPlayer1Input
  gamesWon: GameUpdateManyWithoutWinnerInput
}

input PlayerUpdateWithoutGamesStartedDataInput {
  name: String
  email: String
  gamesJoined: GameUpdateManyWithoutPlayer2Input
  gamesWon: GameUpdateManyWithoutWinnerInput
}

input PlayerUpdateWithoutGamesWonDataInput {
  name: String
  email: String
  gamesStarted: GameUpdateManyWithoutPlayer1Input
  gamesJoined: GameUpdateManyWithoutPlayer2Input
}

input PlayerUpsertWithoutGamesJoinedInput {
  update: PlayerUpdateWithoutGamesJoinedDataInput!
  create: PlayerCreateWithoutGamesJoinedInput!
}

input PlayerUpsertWithoutGamesStartedInput {
  update: PlayerUpdateWithoutGamesStartedDataInput!
  create: PlayerCreateWithoutGamesStartedInput!
}

input PlayerUpsertWithoutGamesWonInput {
  update: PlayerUpdateWithoutGamesWonDataInput!
  create: PlayerCreateWithoutGamesWonInput!
}

input PlayerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  gamesStarted_every: GameWhereInput
  gamesStarted_some: GameWhereInput
  gamesStarted_none: GameWhereInput
  gamesJoined_every: GameWhereInput
  gamesJoined_some: GameWhereInput
  gamesJoined_none: GameWhereInput
  gamesWon_every: GameWhereInput
  gamesWon_some: GameWhereInput
  gamesWon_none: GameWhereInput
  AND: [PlayerWhereInput!]
  OR: [PlayerWhereInput!]
  NOT: [PlayerWhereInput!]
}

input PlayerWhereUniqueInput {
  id: ID
}

type Query {
  card(where: CardWhereUniqueInput!): Card
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card]!
  cardsConnection(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardConnection!
  cardInstances(where: CardInstanceWhereInput, orderBy: CardInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CardInstance]!
  cardInstancesConnection(where: CardInstanceWhereInput, orderBy: CardInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardInstanceConnection!
  game(where: GameWhereUniqueInput!): Game
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!
  player(where: PlayerWhereUniqueInput!): Player
  players(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Player]!
  playersConnection(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlayerConnection!
  round(where: RoundWhereUniqueInput!): Round
  rounds(where: RoundWhereInput, orderBy: RoundOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Round]!
  roundsConnection(where: RoundWhereInput, orderBy: RoundOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoundConnection!
  node(id: ID!): Node
}

type Round {
  id: ID!
  createdAt: DateTime!
  drawDeck(where: CardInstanceWhereInput, orderBy: CardInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CardInstance!]
  player1Hand(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
  player1Tableau(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
  player1Score: Int!
  player2Hand(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
  player2Tableau(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
  player2Score: Int!
  discardPile(where: CardInstanceWhereInput, orderBy: CardInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CardInstance!]
}

type RoundConnection {
  pageInfo: PageInfo!
  edges: [RoundEdge]!
  aggregate: AggregateRound!
}

input RoundCreateInput {
  drawDeck: CardInstanceCreateManyInput
  player1Hand: CardCreateManyInput
  player1Tableau: CardCreateManyInput
  player1Score: Int!
  player2Hand: CardCreateManyInput
  player2Tableau: CardCreateManyInput
  player2Score: Int!
  discardPile: CardInstanceCreateManyInput
}

input RoundCreateManyInput {
  create: [RoundCreateInput!]
  connect: [RoundWhereUniqueInput!]
}

type RoundEdge {
  node: Round!
  cursor: String!
}

enum RoundOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  player1Score_ASC
  player1Score_DESC
  player2Score_ASC
  player2Score_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RoundPreviousValues {
  id: ID!
  createdAt: DateTime!
  player1Score: Int!
  player2Score: Int!
}

input RoundScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  player1Score: Int
  player1Score_not: Int
  player1Score_in: [Int!]
  player1Score_not_in: [Int!]
  player1Score_lt: Int
  player1Score_lte: Int
  player1Score_gt: Int
  player1Score_gte: Int
  player2Score: Int
  player2Score_not: Int
  player2Score_in: [Int!]
  player2Score_not_in: [Int!]
  player2Score_lt: Int
  player2Score_lte: Int
  player2Score_gt: Int
  player2Score_gte: Int
  AND: [RoundScalarWhereInput!]
  OR: [RoundScalarWhereInput!]
  NOT: [RoundScalarWhereInput!]
}

type RoundSubscriptionPayload {
  mutation: MutationType!
  node: Round
  updatedFields: [String!]
  previousValues: RoundPreviousValues
}

input RoundSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoundWhereInput
  AND: [RoundSubscriptionWhereInput!]
  OR: [RoundSubscriptionWhereInput!]
  NOT: [RoundSubscriptionWhereInput!]
}

input RoundUpdateDataInput {
  drawDeck: CardInstanceUpdateManyInput
  player1Hand: CardUpdateManyInput
  player1Tableau: CardUpdateManyInput
  player1Score: Int
  player2Hand: CardUpdateManyInput
  player2Tableau: CardUpdateManyInput
  player2Score: Int
  discardPile: CardInstanceUpdateManyInput
}

input RoundUpdateInput {
  drawDeck: CardInstanceUpdateManyInput
  player1Hand: CardUpdateManyInput
  player1Tableau: CardUpdateManyInput
  player1Score: Int
  player2Hand: CardUpdateManyInput
  player2Tableau: CardUpdateManyInput
  player2Score: Int
  discardPile: CardInstanceUpdateManyInput
}

input RoundUpdateManyDataInput {
  player1Score: Int
  player2Score: Int
}

input RoundUpdateManyInput {
  create: [RoundCreateInput!]
  update: [RoundUpdateWithWhereUniqueNestedInput!]
  upsert: [RoundUpsertWithWhereUniqueNestedInput!]
  delete: [RoundWhereUniqueInput!]
  connect: [RoundWhereUniqueInput!]
  disconnect: [RoundWhereUniqueInput!]
  deleteMany: [RoundScalarWhereInput!]
  updateMany: [RoundUpdateManyWithWhereNestedInput!]
}

input RoundUpdateManyMutationInput {
  player1Score: Int
  player2Score: Int
}

input RoundUpdateManyWithWhereNestedInput {
  where: RoundScalarWhereInput!
  data: RoundUpdateManyDataInput!
}

input RoundUpdateWithWhereUniqueNestedInput {
  where: RoundWhereUniqueInput!
  data: RoundUpdateDataInput!
}

input RoundUpsertWithWhereUniqueNestedInput {
  where: RoundWhereUniqueInput!
  update: RoundUpdateDataInput!
  create: RoundCreateInput!
}

input RoundWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  drawDeck_every: CardInstanceWhereInput
  drawDeck_some: CardInstanceWhereInput
  drawDeck_none: CardInstanceWhereInput
  player1Hand_every: CardWhereInput
  player1Hand_some: CardWhereInput
  player1Hand_none: CardWhereInput
  player1Tableau_every: CardWhereInput
  player1Tableau_some: CardWhereInput
  player1Tableau_none: CardWhereInput
  player1Score: Int
  player1Score_not: Int
  player1Score_in: [Int!]
  player1Score_not_in: [Int!]
  player1Score_lt: Int
  player1Score_lte: Int
  player1Score_gt: Int
  player1Score_gte: Int
  player2Hand_every: CardWhereInput
  player2Hand_some: CardWhereInput
  player2Hand_none: CardWhereInput
  player2Tableau_every: CardWhereInput
  player2Tableau_some: CardWhereInput
  player2Tableau_none: CardWhereInput
  player2Score: Int
  player2Score_not: Int
  player2Score_in: [Int!]
  player2Score_not_in: [Int!]
  player2Score_lt: Int
  player2Score_lte: Int
  player2Score_gt: Int
  player2Score_gte: Int
  discardPile_every: CardInstanceWhereInput
  discardPile_some: CardInstanceWhereInput
  discardPile_none: CardInstanceWhereInput
  AND: [RoundWhereInput!]
  OR: [RoundWhereInput!]
  NOT: [RoundWhereInput!]
}

input RoundWhereUniqueInput {
  id: ID
}

type Subscription {
  card(where: CardSubscriptionWhereInput): CardSubscriptionPayload
  cardInstance(where: CardInstanceSubscriptionWhereInput): CardInstanceSubscriptionPayload
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
  player(where: PlayerSubscriptionWhereInput): PlayerSubscriptionPayload
  round(where: RoundSubscriptionWhereInput): RoundSubscriptionPayload
}
`
      }
    