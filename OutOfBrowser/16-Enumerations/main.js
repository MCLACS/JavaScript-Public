var C = module.require("./Card.js");
var R = module.require("./Rank.js");
var S = module.require("./Suit.js");

var c1 = new C.Card(R.Rank.Ace(), S.Suit.Diamonds());
var c2 = new C.Card(R.Rank.King(), S.Suit.Spades());
var c3 = new C.Card(R.Rank.Two(), S.Suit.Hearts());

console.log(c1.toString());
console.log(c2.toString());
console.log(c3.toString());
