// ****************************************************************************
// Constructor
// ****************************************************************************
function Schedule()
{
  this.m_courses = [];
}
// ****************************************************************************

// ****************************************************************************
// define class methods...
// ****************************************************************************
Schedule.prototype.addCourse = function(c)
{
  this.m_courses.push(c);
};

Schedule.prototype.toString = function()
{
  var ret = "";
  for (var c in this.m_courses)
  {
    ret = ret + this.m_courses[c].toString() + "\n";
  }
  ret = ret + "GPA: " + this.getGPA();
  return ret;
};

Schedule.prototype.getGPA = function()
{
  var totalPoints = 0;
  var totalCredits = 0;
  for (var c in this.m_courses)
  {
    var course = this.m_courses[c];
    totalPoints = totalPoints + (course.getGradePoints() * course.getCredits());
    totalCredits = totalCredits + course.getCredits();
  }
  return totalPoints / totalCredits;
};

// ****************************************************************************

module.exports.Schedule = Schedule;
