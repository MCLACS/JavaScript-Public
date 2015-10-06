//P = module.require("./Person.js");
//E = module.require("./Employee.js");

// constructor 
function Person(first, last) 
{
	// create some new instance variables
	this.first = first;
	this.last = last;
}

// define a new method
Person.prototype.getFirst = function()
{
	return this.first;
}

// define a new method
Person.prototype.getLast = function()
{
	return this.last;
}

// define a new method
Person.prototype.toString = function()
{
	return this.first + " " + this.last;
}


// declare the inheritance
Employee.prototype = new Person();

// constructor 
function Employee(first, last, salary) 
{			
	// call my parent's constructor
	Employee.prototype.constructor(first, last);

	// create a new instance variable
	this.salary = salary;
}

// define a new method
Employee.prototype.getSalary = function()
{
	return this.salary;
}

// override parent method
Employee.prototype.toString = function()
{
	var s = Person.prototype.toString.call(this);
	return s + " " + this.getSalary();
}



main();

function main()
{	
	var tim = new Person("Tim", "Smith");
	printPerson(tim);

	var jane = new Employee("Jane", "Jones", 50000);
	printPerson(jane);
	console.log(jane.getSalary());
}

function printPerson(p)
{
	console.log(p.getFirst());	
	console.log(p.getLast());	
	console.log(p.toString());	
}