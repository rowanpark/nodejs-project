// const { nextTick } = require("process"); // package.json에 "type": "module" 추가해서 아래와 같이 써야한다.
import { nextTick } from "process"; // package.json에 "type": "module" 지우면 위 처럼 쓸 수 있다.

console.log("start");

setTimeout(() => {
  console.log("timeout callback");
}, 0);

nextTick(() => {
  console.log("nextTick callback");
});

console.log("end");

// 콘솔창 출력 순서
// start
// end
// nextTick
// timeout callback
