const defaultNum = 1;

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

module.exports = {
  defaultNum,
  add,
  sub,
  mul,
  div,
};
