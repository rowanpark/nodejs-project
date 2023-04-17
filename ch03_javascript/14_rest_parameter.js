// 파라미터를 2개만 전달받을 수 있음
function sum1(x1, x2) {
  let y = x1 + x2;

  return y;
}
result1 = sum1(5, 7);
console.log(result1);

// 파라미터를 4개만 전달받을 수 있음
function sum2(x1, x2, x3, x4) {
  let y = x1 + x2 + x3 + x4;

  return y;
}
result2 = sum2(5, 7, 3, 9);
console.log(result2);

// 파라미터를 이렇게 선언하면, 함수 호출 시 파라미터를 개수에 상관없이 할당할 수 있고, 이렇게 할당된 값은 배열로 저장이 됨
function sum3(...args) {
  let total = 0;
  // 파라미터가 배열로 저장이 되기 때문에 for-of문을 사용해서 전달받은 파라미터 값을 모두 확인해야 함
  for (let x of args) {
    total += x;
  }

  return total;
}
console.log(sum3(3, 2, 5, 7, 4, 23)); // 파라미터 값으로 6개 전달 // 44
console.log(sum3(3, 2)); // 파라미터 값으로 2개 전달 // 5
console.log(sum3(21, 17, 38)); // 파라미터 값으로 3개 전달 // 76
