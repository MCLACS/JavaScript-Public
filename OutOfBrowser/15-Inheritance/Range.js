// ****************************************************************************
// Constructor
// ****************************************************************************
function Range(from, to)
{
  if (from > to)
    throw "'from' must be less than or equal to 'to'";

  // add and initialize all instance variables...
  var _from = from;
  var _to = to;
  this.getFrom = function() { return _from; };
  this.getTo = function() { return _to; };
}
// ****************************************************************************

// ****************************************************************************
// define class methods...
// ****************************************************************************
Range.prototype.width = function()
{
  return this.getTo() - this.getFrom();
};

Range.prototype.toString = function()
{
  return "Range: " + this.getFrom() + " -> " + this.getTo();
};
// ****************************************************************************

module.exports.Range = Range;
