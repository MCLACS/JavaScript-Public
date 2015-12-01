var A = module.require('./Attendance.js');

main();

function main()
{
  var att = new A.Attendance();
  att.addStudent("Tom");
  att.addStudent("Sally");
  att.addStudent("Steve");
  att.addStudent("Jane");
  att.addStudent("Frank");

  att.here("Tom");
  att.here("Tom");
  att.here("Jane");
  att.here("Frank");
  att.here("Steve");
  att.here("Jane");
  att.here("Frank");
  att.here("Frank");

  console.log(att.toString());
}
