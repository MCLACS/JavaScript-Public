var R = module.require('./Range.js');
var P = module.require('./PrettyRange.js');

function main()
{
  var r1 = new R.Range(10, 100);
  console.log(r1.toString());

  var r2 = new P.PrettyRange(10, 100);
  console.log(r2.toString());

  var r3 = new P.PrettyRange(100, 100);
  console.log(r3.toString());
}

main();
