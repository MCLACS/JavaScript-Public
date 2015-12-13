function min(numbers)
{
  if (numbers.length === 0)
    throw "Numbers can't be empty!";
  var minx = numbers[0];
  for (var key in numbers)
  {
    minx = (numbers[key] < minx) ? numbers[key] : minx;
  }
  return minx;
}

function max(numbers)
{
  if (numbers.length === 0)
    throw "Numbers can't be empty!";
  var maxx = numbers[0];
  for (var key in numbers)
  {
    maxx = (numbers[key] > maxx) ? numbers[key] : maxx;
  }
  return maxx;
}

function rand(from, to)
{
  return Math.floor(Math.random() * (to-from)) + from;
}

module.exports.min = min;
module.exports.max = max;
module.exports.rand = rand;
