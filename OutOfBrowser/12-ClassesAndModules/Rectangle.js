// ****************************************************************************
// Constructor
// ****************************************************************************
function Rectangle(w, l)
{
  this.m_w = w;
  this.m_l = l;
}
// ****************************************************************************

// ****************************************************************************
// define class methods...
// ****************************************************************************
Rectangle.prototype.area = function()
{
  return this.m_w * this.m_l;
};

Rectangle.prototype.perimeter = function()
{
  return 2 * (this.m_w + this.m_l);
};
// ****************************************************************************

module.exports.Rectangle = Rectangle;