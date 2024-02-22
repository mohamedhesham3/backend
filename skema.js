const { model, Schema } = require('mongoose');

const Valorant = Schema({
  rank: String,
  link: String,
  category: String
});

module.exports = model('Valorant', Valorant);
