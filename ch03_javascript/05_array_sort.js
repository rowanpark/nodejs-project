let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

let points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log(points);

let points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function (a, b) {
  return a - b;
});
console.log(points2);
points2.reverse();
console.log(points2);

let points3 = [40, 100, 1, 5, 25, 10];
points3.sort(function (a, b) {
  return b - a;
});
console.log(points3);

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
persons.sort(function (a, b) {
  return a.point > b.point ? -1 : a.point < b.point ? 1 : 0;
});
console.log(persons);
persons.reverse();
console.log(persons);
