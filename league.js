const { model, Schema } = require('mongoose');

const league = Schema({
  rank: String,
  link: String,
  category: String
});

module.exports = model('league', league);
