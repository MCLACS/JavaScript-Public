main();

function main()
{
  console.log();
  console.log("Simple array examples...");
  var ary1 = [];
  ary1[0]= "zero";
  ary1[1]= "one";
  console.log(ary1);
  console.log(ary1.length);
  var ary2 = [0, 1, "two", "three", 2*2];
  console.log(ary2);
  console.log(ary2.length);

  console.log();
  console.log("Sparse arrays...");
  var ary3 = [];
  ary3[4] = "three";
  // this line causes the array length to grow to 5...
  console.log(ary3[4]);
  console.log(ary3.length);
  // but it does not grow, the earlier values are empty
  // this is called a sparse array...
  console.log(ary3[0]);

  // because arrays are sparse, there is no concept of
  // 'out of bounds', any index is 'in bounds', but the values
  // it contains at that index is undefined...
  var ary4 = [];
  console.log(ary4[100000]);

  // arrays as stacks...
  console.log();
  console.log("Arrays as stacks...");
  var stack = [];
  stack.push("zero");
  stack.push("one");
  stack.push("two");
  console.log(stack);
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack);

  // deleting from an array...
  console.log();
  console.log("Delete...");
  var ary5 = ["zero", "one", "two"];
  delete ary5[1];
  // notice that this does not change the index of the
  // remaining two items, it leaves a hole...
  console.log(ary5);
  console.log(ary5[1]);

  // you can view all valid indexes using Object.key
  console.log();
  console.log("Object.keys...");
  var ary6 = ["zero", "one", "two"];
  ary6[7] = "six";
  console.log(ary6);
  console.log(Object.keys(ary6));

console.log("\n\nStart object example");
  // objects are like arrays, but they don't keep track of length
  console.log();
  console.log("Objects are like arrays...");
  var obj = {};
  // the 5 is converted to "5" and becomes an attribute of obj...
  obj[5] = "an object is just like an array";
  console.log(obj["5"]);
  // "5" is also a key in the array...
  console.log(Object.keys(obj));
  // notice that objects don't keep track of the length attribute
  // so this is undefined...
  console.log(obj.length);
console.log("End object example\n\n");

console.log("\n\nStart object 2 example");
  // be careful, once you add an index that is not a number
  // the array stops keeping track of length and therefore
  // it starts acting like an object
  console.log();
  console.log("No longer keeps track of length if using string key...");
  var ary7 = ["zero", "one", "two"];
  ary7["three"] = "third";
  ary7["four"] = "fourth";
  console.log(Object.keys(ary7));
  console.log(ary7.length);
console.log("End object 2 example\n\n");

console.log("\n\nStart iterating");
  // iterating...
  console.log();
  console.log("Delete and print with for loop...");
  var ary8 = ["zero", "one", "two", "three", "four", "five"];
  delete ary8[2];
  for (var i = 0; i < ary8.length; i++)
  {
    console.log(ary8[i]);
  }
  console.log();
  console.log("Delete and print with for each loop...");
  for (var i in ary8)
  {
    console.log(ary8[i]);
  }
  console.log("End iterating example\n\n");

  console.log();
  console.log("Shift...");
  var ary9 = ["zero", "one", "two", "three", "four", "five"];
  console.log(ary9.shift());
  for (var i = 0; i < ary9.length; i++)
  {
    console.log(ary9[i]);
  }

  console.log();
  console.log("Splice...");
  var ary10 = ["zero", "one", "two", "three", "four", "five"];
  console.log(ary10.splice(1, 2));
  for (var i = 0; i < ary10.length; i++)
  {
    console.log(ary10[i]);
  }

}

// other methods
// shift and splice...
