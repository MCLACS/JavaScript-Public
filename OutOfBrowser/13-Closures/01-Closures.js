// Closures are objects that have scope defined within them.
// Think about Java objects.  When you create an object, each one
// gets its own copy of the instance variables.  The instance
// variables belong to the object, and their scope spans all of the
// non-static class methods.

// JavaScript does not have classes, but it does have objects and
// functions in JavaScript are objects.  The scope of variables in a
// JavaScript function is defined via the "scope chain".  So a closure
// in JavaScript is a function object and its associated scope chain.

var scope = "scope B";
function example1()
{
  var scope = "scope A";
  function f()
  { return scope; }
  return f();
}
// what will this print??
console.log("Example 1:", example1());


var scope = "scope B";
function example2()
{
  var scope = "scope A";
  function f()
  {
    var scope = "scope C";
    return scope;
  }
  return f();
}
// what will this print??
console.log("Example 2:", example2());

var scope = "scope B";
function example3()
{
  function f()
  {
    return scope;
  }
  return f();
}
// what will this print??
console.log("Example 3:", example3());


function example4()
{
  function f()
  {
    var scope = "hmm... this is strange?";
    return scope;
  }
  return f;
}
// what will this print??
var fn = example4();
console.log("Example 4:", fn()); // could also call this as example4()();
