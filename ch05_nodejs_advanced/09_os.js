const os = require("os");
// import os from "os";

console.log("os.arch():", os.arch()); // CPU 아키텍처
console.log("os.cpus():", os.cpus()); // 컴퓨터의 CPU 코어 정보를 배열로 리턴
console.log("os.hostname():", os.hostname()); // 운영체제 호스트명
console.log("os.networkInterfaces():", os.networkInterfaces()); // 네트워크 정보
console.log("os.type():", os.type()); // 운영체제 타입
console.log("os.platform():", os.platform()); // darwin
console.log("os.release():", os.release()); // 운영체제 버전
console.log("os.homedir():", os.homedir()); // 홈 디넥터리 경로
console.log("os.tmpdir():", os.tmpdir()); // 임시 파일 저장 경로
console.log("os.totalmem():", os.totalmem()); // 전체 메모리 크기
console.log("os.freemem():", os.freemem()); // 사용 가능한 메모리 크기
