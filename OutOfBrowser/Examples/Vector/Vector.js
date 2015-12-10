function Vector(mag, angle, xsign, ysign)
{

  this.m_mag = mag;
  this.m_angle = this.radians(angle);
  this.m_xsign = xsign;
  this.m_ysign = ysign;
}

Vector.prototype.getXComp = function()
{
  var x = this.m_mag * this.m_ysign * Math.cos(this.m_angle);
  return x;
};

Vector.prototype.getYComp = function()
{
  var y = this.m_mag * this.m_ysign * Math.sin(this.m_angle);
  return y;
};

Vector.prototype.radians = function(degrees)
{
  return degrees * Math.PI / 180;
};

module.exports.Vector = Vector;
