var C = module.require('./Course.js');
var S = module.require('./Schedule.js');

main();

function main()
{
  var s = new S.Schedule();
  s.addCourse(new C.Course("Intro", "A", 3));
  s.addCourse(new C.Course("C++", "B", 3));
  s.addCourse(new C.Course("Java", "C", 3));
  console.log(s.toString());
}
