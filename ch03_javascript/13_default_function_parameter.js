function say(message) {
  // 파라미터에 값이 전달되었는지 확인
  if (message != undefined) {
    console.log(message);
  } else {
    console.log("파라미터가 넘어오지 않았어요.");
  }
}

say();
say("hi");

// 기본 값이 파라미터에 선언되어 있어서 함수를 호출할 떄 파라미터 값을 전달하지 않아도 사용할 수 있음
function say2(message = "파라미터 넘어오지 않음") {
  console.log(message); // 파라미터 값이 전달되지 않으면, 기본 값인 "파라미터가 넘어오지 않음"을 출력하게 됨
}
say2();
say2("hello");
