// ****************************************************************************
// Constructor
// ****************************************************************************
function Card(r, s)
{
  // add and initialize all instance variables...
  var _r = r;
  var _s = s;
  this.getRank = function() { return _r; };
  this.getSuit = function() { return _s; };
}
// ****************************************************************************

// ****************************************************************************
// define class methods...
// ****************************************************************************
Card.prototype.toString = function()
{
  return this.getRank() + " of " + this.getSuit();
};
// ****************************************************************************

module.exports.Card = Card;
