var C = module.require('./Customer.js');

main();

function main()
{
  // a random number...
  var r = undefined;
  // keeps track of a customer...
  var c = undefined;

  // keeps track of the line of customers...
  var queue = [];

  // keeps track of who is geting helped at the counter..
  var atCounter = undefined;

  // keeps track of who has left the bacnk...
  var leftTheBank = [];

  for (var time = 0; time < 4*60; time++)
  {
    // if a custoemr enters the bank add them to the queue...
    r = Math.floor(Math.random()*100);
    if (r < 25)
    {
      addToQueue();
    }

    // if there is someone at the counter and they are done
    // getting help, they should leave the bank...
    r = Math.floor(Math.random()*100);
    if (r < 33 && atCounter != undefined)
    {
      leaveTheBank();
    }

    // if there is nobody at the counter and there is someone on line
    // then they should leave the line and go to the counter...
    if (atCounter == undefined && queue.length > 0)
    {
      moveToCounter();
    }
  }

  printStats();

  function addToQueue()
  {
    c = new C.Customer(time);
    queue.push(c);
  }

  function leaveTheBank()
  {
    atCounter.setExitTime(time); // it walks like a duck...
    leftTheBank.push(c);
    atCounter = undefined;
  }

  function moveToCounter()
  {
    c = queue.shift();
    c.setServiceTime(time); // it talks like a duck...
    atCounter = c;
  }

  function printStats()
  {
    var total = 0;
    for (var i in leftTheBank)
    {
      total += leftTheBank[i].getTimeInLine();
    }
    console.log("Ave Time In Line: " + (total / leftTheBank.length).toFixed(2));
  }
}
