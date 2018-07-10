var CoinKey = require('coinkey')
var ci = require('coininfo')
console.log(ci('DASH'))
var dashkey = CoinKey.createRandom(ci('DASH').versions)
console.log(dashkey)

module.exports = {
  
}
