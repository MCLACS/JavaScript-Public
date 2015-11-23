// calls a function that returns a function
// so makeUniqueInteger is actually a function
// that when called increments the counter
// but what is the scope of counter?
var makeUniqueInteger =
  function()
  {
    var counter = 0;
    return function()
    {
      return counter++;
    };
  }();

// why is counter still in scope?
var uniqueInteger1 = makeUniqueInteger();
var uniqueInteger2 = makeUniqueInteger();
var uniqueInteger3 = makeUniqueInteger();
var uniqueInteger4 = makeUniqueInteger();

console.log(uniqueInteger1);
console.log(uniqueInteger2);
console.log(uniqueInteger3);
console.log(uniqueInteger4);
