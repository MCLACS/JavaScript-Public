var R = module.require('./Rectangle.js');

main();

function main()
{
  var r1 = new R.Rectangle(10, 20);

  console.log("Area: " + r1.area());
  console.log("Perimeter: " + r1.perimeter());
}
