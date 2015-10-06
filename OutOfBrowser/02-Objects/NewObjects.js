main();

function main()
{
	tryThis1();
	tryThis2();
	tryThis3();
}

function tryThis1()
{
	var tim = new Object();
	tim.first = "Tim";
	tim.last = "Smith";
	tim.fullName = function() 
	{
		return this.last + ", " + this.first;
	}
	console.log(tim.fullName());	
}

function tryThis2()
{
	var tim = { first: "Tim", last: "Smith", fullName: function() {return this.last + ", " + this.first} };
	console.log(tim.fullName());	
}

function tryThis3()
{
	var tim = { first: "Tim", last: "Smith", fullName: function() {return this.last + ", " + this.first} };
	console.log(tim["first"]);	
	console.log(tim["last"]);	
	console.log(tim["fullName"]());	
}