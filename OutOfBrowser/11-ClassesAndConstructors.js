/*
The critical feature of constructor invocations is that
the prototype property of the constructor is used as the
prototype of the new object. This means that all objects
created with the same constructor inherit from the same
object and are therefore members of the same class.

The new constructor call (e.g. new Foo()):
creates a new object, sets the prototype of that object
to Foo.prototype and passes that as this to the constructor.
*/

// ****************************************************************************
// Constructor
// ****************************************************************************
function Range(from, to)
{
  if (from > to)
    throw "'from' must be less than or equal to 'to'"
  // add and initialize all instance variables...
  this.m_from = from;
  this.m_to = to;
}
// ****************************************************************************

// ****************************************************************************
// define class methods...
// ****************************************************************************
Range.prototype.width = function()
{
  return this.m_to  - this.m_from;
};

Range.prototype.toString = function()
{
  return "Range: " + this.m_from + " -> " + this.m_to;
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
