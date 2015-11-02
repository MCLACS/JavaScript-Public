function main()
{
  console.log();
  var o1 = makeAlien("Tom");
  o1.greeting();
  o1.farewell();
  console.log();

  console.log();
  var o2 = makeAlien("Sally");
  o2.greeting();
  o2.farewell();
  console.log();
}

function makeAlien(name)
{
  var greeting = function()
  {
    console.log("Greetings earthling, from " + this.name);
  };

  var farewell = function()
  {
    console.log("Nanu Nanu, from " + this.name);
  };

  var prototype = {greeting: greeting, farewell: farewell};
  var alien = Object.create(prototype);

  alien.name = name;

  return alien;
}

main();
