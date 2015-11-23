var R = module.require('./Range.js');

// ****************************************************************************
// Declare the inheritance by making a copy of the parent prototype
// and using it as the child prototype.  This ensures that PrettyRante
// inherits all the methods in Range.
// ****************************************************************************
PrettyRange.prototype = Object.create( R.Range.prototype );

// ****************************************************************************
// Constructor
// ****************************************************************************
function PrettyRange(from, to)
{
  // call the parent's constructor to make sure that all
  // of the attirbutes in Range are set in PrettyRange,
  // in this case we are talking about the getFrom and getTo
  // methods which were set by Range as "private attributes"
  R.Range.call(this, from, to);
}
// ****************************************************************************

// ****************************************************************************
// Override the toString methoed we inherited from Range...
// ****************************************************************************
PrettyRange.prototype.toString = function()
{
  if (this.getFrom() == this.getTo())
    return "PrettyRange: range is empty.";
  else
    return "PrettyRange: " + this.getFrom() + " -> " + this.getTo();
};
// ****************************************************************************

module.exports.PrettyRange = PrettyRange;
