// 전역 객체 global object
// 언제 어디서든 들어마실 수 있는 공기와도 같은...
// 코드로 선언하거나 하지 않아도 전역 범위에 항상 존재하는 객체

console.log(this);
console.log(global);
console.log(globalThis);

// 전역 객체에 포함되는 것
// 1.표준 빌트인 객체
// 2.호스트 객체 - 환경에서 제공하는 기타 객체들 : 브라우저의 Web API, Node.js API 등
// 3.(브라우저 한정) - 전역으로 설정된 var 변수와 전역 함수

var myGlobalVar = 1;
const myGlobalConst = 1;

function myGlobalFunc () {};

console.log(
  globalThis.myGlobalVar,
  globalThis.myGlobalConst,
  globalThis.myGlobalFunc
);

console.log('------------------');

// 표준 빌트인 객체 standard built-in objects
// ECMAScript 사양에 정의된 객체들 - 어떤 환경에서든 사용 가능
// 전역 프로퍼티로 제공됨 - globalThis등을 붙이지 않고 바로 사용 가능

// Node.js에서는 globalThis 출력시 표준 빌트인 객체들은 출력하지 않음
console.log(globalThis);
// 그러나 요소들로 갖고 있는 것은 확인 가능
console.log(globalThis.Infinity);
console.log(globalThis.isNaN);
console.log(globalThis.Object);
console.log(Infinity);
console.log(isNaN);
console.log(Object);

console.log('------------------');

// 래퍼 객체 wrapper object

// const str = 'abcde';
// console.log(
//   str.length,
//   str.toUpperCase(),
//   str[0]
// );

// const num = 123.4567;
// console.log(
//   typeof num.toString(),
//   num.toFixed(2)
// );

// const str = new String('abcde');
// const num = new Number(123.4567);
// const bool = new Boolean(true);

// console.log(typeof str, str);
// console.log(typeof num, num);
// console.log(typeof bool, bool);

const str = new String('abcde');
const num = new Number(123.4567);
const bool = new Boolean(true);

console.log(str.valueOf());
console.log(num.valueOf());
console.log(bool.valueOf());

console.log('------------------');

// 빌트인 전역 함수

// 1. eval - 문자열로 된 코드를 받아 실행
// 값을 반환하는 코드(표현식)이라면 해당 값을 반환
const x = eval('1 + 2 + 3');

// 객체나 함수의 리터럴은 괄호로 감싸야 함
const obj = eval('({a: 1, b: 2})');

console.log(x, obj);

// 표현식이 아닐 경우 해당 코드 실행
const code = `
  let x = 1;
  console.log(x++, x);
`;

eval(code);

console.log('------------------');

// 2.isFinite - 유한수 여부 반환
console.log(
  isFinite(1),
  isFinite(0),
  isFinite('1'),
  isFinite(null)
);
// 유한수이거나 유한수로 평가될 수 있는 (null은 0) 값 : true
console.log(
  isFinite(1/0),
  isFinite(Infinity),
  isFinite(-Infinity),
  isFinite(NaN),
  isFinite('abc')
);
// 무한수이거나 수로 평가될 수 없는 값: false

console.log('------------------');

// 3. isNaN - NaN 여부 반환
console.log(
  isNaN(NaN),
  isNaN('abcde'),
  isNaN({}),
  isNaN(undefined)
);

// 숫자로 인식될 수 없는 값 : true
// Number 타입이 아닌 경우 Number로 변환하여 평가 NaN도 타입은 Number
// 뒤에 배울 Number.isNaN은 타입변환을 하지 않음

console.log('------------------');

// 4. parseFloat - 인자로 받은 값을 실수로 변환
console.log(
  parseFloat(123.4567),
  parseFloat('123.4567'),
  parseFloat(' 123.4567 ')
);
// 문자열의 경우 앞뒤공백은 무시
console.log(
  parseFloat('123.0'),
  parseFloat('123'),
  parseFloat(' 123ABC '),
  parseFloat([123, 456, 789])
);
// 숫자로 시작할 경우 읽을 수 있는 부분까지 숫자로 변환
// 배열의 경우 첫 요소가 숫자면 해당 숫자 반환
console.log(
  parseFloat('ABC123'),
  parseFloat({x: 1}),
  parseFloat([]),
  parseFloat(['a', 1, true])
);
// 기타 숫자로 변환이 안 되는 경우 NaN 반환

console.log('------------------');

// 5. parseInt - 인자로 받은 값을 정수(타입은 실수)로 변환
console.log(
  parseInt(123),
  parseInt('123'),
  parseInt(' 123.4567 '),
  parseInt('345.6789')
);
// 소수점 뒤로 오는 숫자는 버림 반올림하지 않음
console.log(
  parseInt('abc'),
  parseInt('{}'),
  parseInt('[]')
);

// 두 번째 인자로 숫자(2~36) 넣으면
console.log(
  parseInt('11'),
  parseInt('11', 2),
  parseInt('11', 8),
  parseInt('11', 16),
  parseInt('11', 32),

  parseInt('11', 37),
  parseInt('11', 'A'),
);
// 주어진 값을 해당 진법의 숫자로 해석하여 10진법 숫자로 반환
// 무효한 숫자는 NaN 반환
