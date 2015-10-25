function makePerson(first, last) 
{
	var obj = new Object();
	obj.first = first;
	obj.last = last;

	obj.getFirst = function()
	{
		return this.first;
	}

	obj.getLast = function()
	{
		return this.last;
	}

	obj.toString = function()
	{
		return this.first + " " + this.last;
	}

	return obj;
}

function makeEmployee(first, last, salary) 
{
	var obj = makePerson(first, last);
	obj.salary = salary;

	obj.getSalary = function()
	{
		return this.salary;
	}

	obj.toString = function()
	{
		return this.first + " " + this.last + " " + this.salary;
	}

	return obj;
}

module.exports.makePerson = makePerson;
module.exports.makeEmployee = makeEmployee;