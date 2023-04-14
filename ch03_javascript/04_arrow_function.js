// 함수 선언식
function hello(name) {
  return "Hello " + name;
}
console.log(hello("Ran 1"));

// 함수 표현식
const hello2 = function (name) {
  return "Hello " + name;
};
console.log(hello2("Ran 2"));

// 위의 일반적인 함수 표현은 아래 화살표 함수로 쓸 수 있다. => Prettier 때문에 저장하면 한줄 표현에서 중괄호 표현으로 바뀐다.
// const hello3 = (name) => {return "Hello " + name;};
// console.log(hello3("Ran 3"));

// 파라미터가 하나만 있을 떄는 주변 괄호를 생략할 수 있다. => Prettier 때문에 저장하면 파라미터 부분에 다시 소괄호가 생긴다.
// const hello4 = name => {return "Hello " + name;};
// console.log(hello4("Ran 4"));

// 화살표 함수의 유일한 문장이 'return'일 때 'return'과 중괄호({})를 생략할 수 있다. => Prettier 때문에 저장하면 파라미터 부분에 다시 소괄호가 생긴다.
const hello5 = (name) => "Hello " + name;
console.log(hello5("Ran 5"));
