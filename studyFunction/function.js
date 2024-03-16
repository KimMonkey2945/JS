// 기본 문법
// function 함수명 (입력값) {
//   // 수행할 일
//   return 반환값 // 있을 시
// }

// 함수명(입력값);

function allArithemics (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
  console.log(`${x} - ${y} = ${x - y}`);
  console.log(`${x} * ${y} = ${x * y}`);
  console.log(`${x} / ${y} = ${x / y}`);
  console.log('------------------------')
}

let a = 3, b = 4;
allArithemics(a, b);

let c = 10, d = 2;
allArithemics(c, d);

let e = 7, f = 5;
allArithemics(e, f);

function isOdd (x) {
  return !!(x % 2);
}

let num = 12;

console.log(
  `${num}(는)은 ${
    isOdd(num) ? '홀' : '짝'
  }수입니다.`
);

console.log('------------------------')

function add(x, y) {
  // x, y를 인자 또는 매개변수(parameter)라 부름
  return x + y;
}

// a, b를 인수(argument)라 부름
let z = add(2, 3);

console.log('------------------------')
// 호이스팅
// 함수는 실행문보다 나중에 정의하는 것이 가능
// 변수나 상수는 불가능! (var 제외)
console.log(add(2, 7));

function add (x, y) {
  return x + y;
}

// 함수를 정의 하는 방법들

function add (x, y) {
  return x + y;
}

console.log(add(2, 7));

// 상수나 변수에 함수 대입 함수도 값

const subt = function (x, y) {
  return x - y;
}

console.log(subt(7, 2));

console.log('------------------------')

function add (x, y) {
  return x + y;
}

console.log(add(2, 7));

// 💡 기존의 함수를 재정의하는것도 가능
add = function (x, y) {
  console.log(`${x}와 ${y}를 더합니다.`);
  console.log(`결과는 ${x + y}입니다.`);
  return x + y;
}

console.log(add(2, 7));

console.log('------------------------')

// 화살표 함수
// 한 줄 안에 값만 반환시
const mult = (x, y) => x * y;

console.log(mult(2, 7));

// 두 줄 이상의 작업이 있을 시
const mult2 = (x, y) => {
  console.log(`${x}와 ${y}를 곱합니다.`);
  console.log(`결과는 ${x * y}입니다.`);
  return x * y;
};

console.log(mult2(2, 7));

// 인자가 하나일 때는 괄호 없이 선언 가능
const pow = x => x ** 2;
console.log(pow(3));

// 화살표 함수는 function 선언 함수와 기능 차이가 있음

