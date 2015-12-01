// ****************************************************************************
// Constructor
// ****************************************************************************
function Counter(name)
{
  this.m_name = name;
  this.m_count = 0;
}
// ****************************************************************************

// ****************************************************************************
// define class methods...
// ****************************************************************************
Counter.prototype.plus = function()
{
  this.m_count++;
  return this.m_count;
};

Counter.prototype.getName = function()
{
  return this.m_name;
};

Counter.prototype.getCount = function()
{
  return this.m_count;
};

Counter.prototype.toString = function()
{
  return this.m_name + ": " + this.m_count;
};

// ****************************************************************************

module.exports.Counter = Counter;
