function counter()
{
  var n = 0;
  var obj =
    {
      add: function() { return n++; }, // try this with ++n
      sub: function() { return n--; }, // and --n
      reset: function() { n = 0; }
    };
  return obj;
}

var counter1 = counter();
var counter2 = counter();

console.log("Counter 1:", counter1.add());
console.log("Counter 1:", counter1.add());
console.log("Counter 1:", counter1.sub());
counter1.reset();
console.log("Counter 1:", counter1.add());

console.log("Counter 2:", counter2.sub());
console.log("Counter 2:", counter2.sub());
counter2.reset();
console.log("Counter 2:", counter2.add());
