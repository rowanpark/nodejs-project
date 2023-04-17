/*
class 클래스명 {
  // class로 정의된 객체를 생성하고 초기화하기 위한 특수 함수
  constructor(매개변수) {
    // 초기화 코드
  }
}
*/

class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  getModelName() {
    return this.modelName;
  }

  getModelYear() {
    return this.modelYear;
  }

  getType() {
    return this.type;
  }

  getPrice() {
    return this.price;
  }

  setModelName(modelName) {
    this.modelName = modelName;
  }

  setModelYear(modelYear) {
    this.modelYear = modelYear;
  }

  setType(type) {
    this.type = type;
  }

  setPrice(price) {
    this.price = price;
  }
}

let ionic = new Car("아이오닉", "2021", "e", 4000); // 아이오닉 차량 생성
let genesis = new Car("제네시스", "2021", "g", 7000); // 아이오닉 차량 생성

console.log(ionic);
console.log(genesis);

let modelName = ionic.getModelName(); // 차량 모델명 가져오기
ionic.setPrice(4300); // 차량 가격 변경

console.log(modelName);
console.log(ionic.getPrice());
console.log(ionic);

class ElectricCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    super(modelName, modelYear, "e", price);
    this.chargeTime = chargeTime;
  }

  getChargeTime() {
    return this.chargeTime;
  }

  setChargeTime(time) {
    this.chargeTime = time;
  }
}

let electricCar = new ElectricCar("전기차", "2023", 5000, 300);
console.log("electricCar:", electricCar);
