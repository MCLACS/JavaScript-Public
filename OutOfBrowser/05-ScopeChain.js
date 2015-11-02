// this is the global object scope
// any variable defined here is actually
// an attribute of the global object
var iBelongToGlobal = "global";
console.log(iBelongToGlobal);

foo();

// this starts the function scope for foo
// and any variables here are atributes of the
// foo function object, inside this function
// the scope chain in foo looks like this:
//    foo -> global
function foo()
{
  var iBelongToFoo = "foo";

  // found in foo
  console.log(iBelongToFoo);

  // not found in foo, but found in global
  console.log(iBelongToGlobal);

  // found in foo
  foobar();

  // dude, how can we have two functions with
  // the same name... I hate JavaScript!
  function hello()
  {
    console.log("Crazy Hello");
  }

  // the scope chain in foobat looks like this:
  //    foobar -> foo -> global
  function foobar()
  {
      var iBelongToFooBar = "foobar";

      // found in foobar
      console.log(iBelongToFooBar);

      // not found in foobar, found in foo
      console.log(iBelongToFoo);

      // not found in foobar or foo, but found in global
      console.log(iBelongToGlobal);

      // not found in foobar or foo, but found in global
      hello();
  }
}

function hello()
{
  console.log("Hello");
}
