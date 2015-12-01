var C = module.require('./Counter.js');

// ****************************************************************************
// Constructor
// ****************************************************************************
function Attendance()
{
  this.m_students = [];
}
// ****************************************************************************

// ****************************************************************************
// define class methods...
// ****************************************************************************
Attendance.prototype.addStudent = function(studentName)
{
  var counter = new C.Counter(studentName);
  this.m_students.push(counter);
};

Attendance.prototype.here = function(studentName)
{
  for (var s in this.m_students)
  {
    if (this.m_students[s].getName() === studentName)
    {
      this.m_students[s].plus();
      break;
    }
  }
};

Attendance.prototype.toString = function()
{
  var ret = "";
  for (var s in this.m_students)
  {
    ret = ret + this.m_students[s].toString() + "\n";
  }
  return ret;
};

// ****************************************************************************

module.exports.Attendance = Attendance;
