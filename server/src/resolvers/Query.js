function cards(parent, args, context, info) {
  return context.db.query.cards()
}

module.exports = { cards, }
