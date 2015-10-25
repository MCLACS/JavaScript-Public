main();

function main()
{
  // date is a new object, with four attributes, but it is also
  // a dictionary, or map, or hashtable, or associative array...
  var date = {
              month: "January",
              day: 1,
              year: "2015",
              dow: "Monday",
              toString: function()
                { return this.dow + ", " + this.month + " " +
                  this.day + " " + this.year;}
  };

  console.log(date["month"]); // we can treat it like an associative array...

  console.log(date.month); // we can treat it like an object...

  console.log(date.toString()); // we can call a method...

}
