var regexp = /World/;
console.log(regexp);

var regexp = new RegExp("World");
console.log(regexp);

var str = "Hello! World! world!";
const re = /world/; // world에 대응되는 문자열을 찾는 패턴 정의
console.log(re);
console.log(re.test(str)); // test() 함수를 통해 대응되는 문자열이 있으므로 true 반환
console.log(str.search(re)); // 6 - String 객체의 내장 함수인 search() 함수에 정규식을 적용해서 대응되는 문자열이 발견되면 인덱스 번호 반환
