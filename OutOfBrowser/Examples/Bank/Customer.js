// ****************************************************************************
// Constructor
// ****************************************************************************
function Customer(enterTime)
{
  this.m_enterTime = enterTime;
  this.m_serviceTime = 0;
  this.m_exitTime = 0;
}
// ****************************************************************************

// ****************************************************************************
// define class methods...
// ****************************************************************************
Customer.prototype.setServiceTime = function(serviceTime)
{
  this.m_serviceTime = serviceTime;
}

Customer.prototype.setExitTime = function(exitTime)
{
  this.m_exitTime = exitTime;
}

Customer.prototype.getTimeInLine = function()
{
  return this.m_serviceTime - this.m_enterTime;
};

Customer.prototype.getTimeInBank = function()
{
  return this.m_exitTime - + this.m_enterTime;
};
// ****************************************************************************

module.exports.Customer = Customer;
