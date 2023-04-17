function getScore() {
  return [70, 80, 90, 100];
}

let scores = getScore();
console.log(scores);

let x = scores[0],
  y = scores[1],
  z = scores[2];
console.log(x, y, z);
console.log(`x:${x} y:${y} z:${z}`);

let [a, b, c] = getScore();
console.log(a);
console.log(b);
console.log(c);

// getCoordinates() 함수는 위도, 경도 정보를 제공하는 외부 라이브러리라고 가정
// let coordinate = getCoordinates();
// console.log(coordinate[0]); // 경도
// console.log(coordinate[1]); // 위도

// let [longitude, latitude] = getCoordinates();
// console.log(longitude); // 경도
// console.log(latitude); // 위도

let [i, j, ...args] = getScore();
console.log(i); // 70
console.log(j); // 80
console.log(args); // [ 90, 100 ]

function getProfile() {
  return ["John", "Doe", ["Red", "Green", "Blue"]];
}

let [firstName, lastName, [color1, color2, color3]] = getProfile();

console.log(color1, color2, color3, firstName, lastName);
