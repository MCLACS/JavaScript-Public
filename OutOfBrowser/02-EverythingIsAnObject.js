main();

// main is a function object...
function main()
{
	tryThis1();
	tryThis2();
}

// tryThis1 is a function object...
function tryThis1()
{
	// tim is an object...
	var tim = {};
	tim.first = "Tim";
	tim.last = "Smith";

	// tostring is an anonymous function object...
	tim.toString = function()
	{
		// this refers to tim, which is the object who owns the attribute
		// that this function is being assigned to...
		return this.last + ", " + this.first;
	}

	console.log(tim.toString());
}

// tryThis2 is a function object...
function tryThis2()
{
	// tim is an object, with three attributes...
	var tim = { first: "Tim", last: "Smith", 
		toString: function() {return this.last + ", " + this.first;} };

	console.log(tim.first);
	console.log(tim.last);
	console.log(tim.toString());
}
