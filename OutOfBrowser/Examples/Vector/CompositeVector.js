function CompositeVector()
{
  this.m_vectors = [];
}

CompositeVector.prototype.add = function(vector)
{
  this.m_vectors.push(vector);
};

CompositeVector.prototype.getXComp = function()
{
  var ret = 0;
  for (var v in this.m_vectors)
  {
    ret = ret + this.m_vectors[v].getXComp();
  }
  return ret;
};

CompositeVector.prototype.getYComp = function()
{
  var ret = 0;
  for (var v in this.m_vectors)
  {
    ret = ret + this.m_vectors[v].getYComp();
  }
  return ret;
};

CompositeVector.prototype.getMagnitude = function()
{
  var sum = Math.pow(this.getXComp(), 2) + Math.pow(this.getYComp(), 2);
  return Math.sqrt(sum);
};

module.exports.CompositeVector = CompositeVector;
