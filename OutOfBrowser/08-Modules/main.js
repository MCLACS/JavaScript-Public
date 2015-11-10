var m = module.require("./MyMath.js");

function main()
{
  var numbers = [];
  for (var i = 0; i < 1000; i++)
  {
    numbers.push(m.rand(100, 200));
  }

  console.log("min: " + m.min(numbers));
  console.log("max: " + m.max(numbers));

  // uncomment to see exception
  //console.log("max: " + m.max([]));
}

main();
