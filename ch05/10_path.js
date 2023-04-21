const path = require("path");

// path.basename(path[, ext]): 경로의 마지막 부분을 반환
console.log(__filename); // 현재 파일의 절대 경로
console.log(path.basename(__filename)); // 경로의 마지막 부분
console.log(path.basename(__filename, ".js")); // 경로의 마지막 부분에서 확장자를 제거한 이름

// path.delimiter: 운영체제별로 환경 변수 구분자를 가져옴
console.log(path.delimiter); // 환경 변수 구분자 - 윈도우는 세미콜론(;), POSIX 계열은 콜론(:)

console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));

// path.dirname(path): 파일이 위치한 폴더 경로를 반환
console.log(__filename); // 현재 파일의 절대 경로
console.log(path.dirname(__filename)); // 파일이 위치한 디렉터리(폴더) 경로

// path.extname(path): 파일의 확장자를 반환
console.log(path.extname(__filename)); // 파일의 확장자, 출력 결과: .js
console.log(path.extname("index.html")); // 출력 결과: .html

// path.format(pathObject): dir, root, base, name 프로퍼티를 사용해서 경로 문자열을 반환
var a = path.format({
  root: "/ignored", // dir 값이 있으므로 root는 무시됨
  dir: "/home/user/dir",
  base: "file.txt",
});
console.log(a);

var b = path.format({
  root: "/",
  base: "file1.txt",
  ext: "ignored", // base 값이 있으므로 name, ext는 무시됨
});
console.log(b);

var c = path.format({
  root: "/",
  name: "file2",
  ext: ".txt",
});
console.log(c);

// path.isAbsolute(path): 주어진 파일의 경로가 절대 경로이면 true 반환, 상대 경로이면 false 반환
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./10_path.js"));

// path.join([..paths]): 문자열로 주어진 경로들을 모두 합쳐 하나의 경로로 만들어서 반환
console.log(path.join("/foo", "bar", "baz/asdf"));

// path.parse(path): path.format() 함수와 반대로 문자열로 된 경로를 pathObject로 반환
console.log(path.parse("/home/user/dir/file.txt"));

// path.sep: 경로 구분자를 반환
// 윈도우: 역슬래시(\)
// POSIX 계열(맥 & 리눅스): 슬래시(/)
console.log(path.sep);
console.log("foo/bar/baz".split(path.sep));
