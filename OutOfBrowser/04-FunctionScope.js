var dude = "OuterDude";
console.log(dude);

main();

function main()
{
  var dude ="InnerDude";
  console.log(dude);
  foo();
  foo2();

  hoisting();
  hoisting2();
}

function foo()
{
  var dude = "InnerInnerDude";
  console.log(dude);
}

function foo2()
{
  console.log(dude);
}

function hoisting()
{
  // "function scope"
  // this actually prints the variable defined below
  // it is in scope, but not yet assigned
  // it has been hoisted to the top of the function
  console.log(dude);

  if (true)
  {
    // this variable is in scope in the entire body of the function
    // it gets hoisted
    var dude = "Crazy!";

    console.log(dude);
  }
  console.log(dude);

}

function hoisting2()
{
  // because of hoisting, most JS developers just declare all thier
  // variables at the top of a function
  var dude = "Crazy!";
  console.log(dude);
  if (true)
  {
    console.log(dude);
  }
  console.log(dude);
}
