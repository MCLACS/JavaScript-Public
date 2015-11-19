function min(numbers)
{
  if (numbers.length == 0)
    throw "Numbers can't be empty!";
  var min = numbers[0];
  for (var key in numbers)
  {
    min = (numbers[key] < min) ? numbers[key] : min;
  }
  return min;
}

function max(numbers)
{
  if (numbers.length == 0)
    throw "Numbers can't be empty!";
  var max = numbers[0];
  for (var key in numbers)
  {
    max = (numbers[key] > max) ? numbers[key] : max;
  }
  return max;
}

function rand(from, to)
{
  return Math.floor((Math.random() * (to-from)) + from;
}

module.exports.min = min;
module.exports.max = max;
module.exports.rand = rand;
