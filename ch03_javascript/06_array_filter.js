// arr.filter(callback(element[, index[, array]])[, thisArg])

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
console.log(words);

const result = words.filter(function (word) {
  return word.length > 6; // 단어의 길이가 6자리보다 큰 단어만 추출해서 새로운 배열 반환
});
console.log(result);

let persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울",
  },
  {
    name: "김종국",
    point: 92,
    city: "서울",
  },
  {
    name: "양세찬",
    point: 76,
    city: "제주",
  },
  {
    name: "하하",
    point: 81,
    city: "서울",
  },
];
console.log(persons);

let pass = persons.filter(function (person) {
  return person.point >= 80; // point가 80보다 큰 사람만 반환
});
console.log(pass);
