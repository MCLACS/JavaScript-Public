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

  //
  // Notice that these aer being set the same way we set regular attributes,
  // in other words they are not set on the protoype...
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

function main()
{
  var r1 = new Range(10, 100);
  console.log("Width: " + r1.width());
  console.log(r1.toString());

  // uncomment to see an exception...
  //var r2 = new Range(100, 10);
}

main();
