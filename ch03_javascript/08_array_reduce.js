let points = [40, 100, 1, 5, 25, 10];
let sum = points.reduce(function (total, currentValue) {
  return total + currentValue;
}, 0);
console.log(sum);
