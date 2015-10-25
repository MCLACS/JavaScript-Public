Classes = module.require("./Classes.js");

main();

function main()
{
	var tim = Classes.makePerson("Tim", "Smith");
	printPerson(tim);

	var jane = Classes.makeEmployee("Jane", "Jones", 50000);
	printPerson(jane);
	console.log(jane.getSalary())
}

function printPerson(p)
{
	console.log(p.getFirst());	
	console.log(p.getLast());	
	console.log(p.toString());	
}