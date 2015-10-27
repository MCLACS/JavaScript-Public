var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Talk To Me> ');
rl.prompt();

rl.on('line', function(line) {
    switch(line.trim()) {
        case 'hello':
            console.log('world!');
            break;
        case 'bye':
            rl.close();
            break;
        default:
            console.log(line.trim() +
              '? ... how long have you had this problem?');
        break;
    }
    rl.prompt();
}).on('close', function() {
    console.log('Have a great day!');
    process.exit(0);
});
