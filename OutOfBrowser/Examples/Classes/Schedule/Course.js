// ****************************************************************************
// Constructor
// ****************************************************************************
function Course(name, grade, credits)
{
  this.m_name = name;
  this.m_grade = grade;
  this.m_credits = credits;
}
// ****************************************************************************

// ****************************************************************************
// define class methods...
// ****************************************************************************
Course.prototype.getGradePoints = function()
{
  if (this.m_grade === "A")
    return 4;
  else if (this.m_grade === "B")
    return 3;
  else if (this.m_grade === "C")
    return 2;
  else if (this.m_grade === "D")
    return 1;
  else
    return 0;
};

Course.prototype.getCredits = function()
{
  return this.m_credits;
};

Course.prototype.toString = function()
{
  return this.m_name + ": " + this.m_grade + " worth " + this.m_credits + " credits";
};

// ****************************************************************************

module.exports.Course = Course;
