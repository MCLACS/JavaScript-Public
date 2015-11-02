function main()
{
  Object.prototype.greeting = function()
  {
    console.log("Greetings earthling, from " + this.name);
  };

  console.log();
  var o1 = new Object();
  o1.name = "Tom";
  o1.greeting();
  console.log();

  Object.prototype.farewell = function()
  {
    console.log("Nanu Nanu, from " + this.name);
  };

  console.log();
  o1.greeting();
  o1.farewell();
  console.log();

  console.log();
  var o2 = new Object();
  o2.name = "Sally";
  o2.greeting();
  o2.farewell();
  console.log();
}

main();
