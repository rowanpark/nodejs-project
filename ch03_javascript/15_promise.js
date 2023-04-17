// Promise 객체 생성
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("결과 데이터");
  } else {
    reject(new Error("에러 메세지"));
  }
});

promise
  .then((data) => {
    console.log(data); // "결과 데이터" 출력
  })
  .catch((error) => {
    console.error(error); // 에러 출력
  });

/*
Promise 예제 1
*/
let myPromise = new Promise((resolve, reject) => {
  // 일부 비동기 작업 수행
  setTimeout(() => {
    let result = Math.random(); // 임의의 결과 생성
    if (result > 0.5) {
      // 성공적으로 완료
      resolve(result);
    } else {
      // 실패
      reject(new Error("Something went wrong! Result is: " + result));
    }
  }, 1000); // 1초 후에 실행
});

// Promise 객체 사용
myPromise
  .then((result) => {
    console.log("Success! Result is: " + result);
  })
  .catch((error) => {
    console.log(error);
  });

/*
Promise 예제 2
*/
// const fetch = require("node-fetch");
// 1. Node.js v14 이상에서 발생하는 ESM (ECMAScript Modules) 지원 관련 문제
// 2. node-fetch 모듈은 ESM을 사용하므로 require을 사용하는 CommonJS 모듈에서 문제가 발생
// 3. 해결 방법으로는 import 문법을 사용, require 문을 다음과 같이 수정하여 node-fetch 모듈을 가져올 수 있음
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
// import fetch from "node-fetch"; // 확장자를 .mjs로 바꾸면 사용 가능

function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

getData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

getData("https://jsonplaceholder.typicode.com/todos/111")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

getData("https://jsonplaceholder.typicode.com/todos/11111")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
