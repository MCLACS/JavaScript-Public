var readline = require('readline');

main();

function main()
{
	console.log("Main started");

	getUserInput();

	console.log("Main exit");
}

var rl;

function getUserInput()
{
	rl = readline.createInterface(process.stdin, process.stdout);
	rl.setPrompt("Yo>");
  	rl.prompt();
	rl.on('line', lineEntered);  
	rl.on('close', onClose);	
}

function lineEntered(line)
{
	console.log("Yo typed ", line);
	rl.close();
}

function onClose()
{
	console.log("Dude closed the rl man");
}











