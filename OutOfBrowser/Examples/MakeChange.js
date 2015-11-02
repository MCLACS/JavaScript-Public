var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Enter Amount (q to quit)> ');
rl.prompt();

rl.on('line', function(line)
{
    switch(line.trim())
    {
        case 'q':
            rl.close();
            break;
        default:
          makeChange(line.trim());
        break;
    }
    rl.prompt();
}).on('close', function()
{
    console.log('Have a great day!');
    process.exit(0);
});


function makeChange(amount)
{
  var quarters = 0;
  var dimes = 0;
  var nickles = 0;
  var pennies = 0;

  var n = parseFloat(amount);
  var change = (n%1).toFixed(2)*100;
  while ( change >= 25)
  {
    quarters++;
    change = change - 25;
  }

  while ( change >=10)
  {
    dimes++;
    change = change - 10;
  }

  while ( change >= 5)
  {
    nickles++;
    change = change - 5;
  }

  while ( change >= 1)
  {
    pennies++;
    change = change - 1;
  }

  console.log(quarters + " quarters, " + dimes + " dimes, " +
    nickles + " nickles, " + pennies + " pennies.");
}
