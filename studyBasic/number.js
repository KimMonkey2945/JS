// 자바스크립트에는 정수와 실수의 자료형이 따로 있지 않음
let integer = 100;
let real = 1.234;
let negative = -5.67;

console.log(
  typeof integer,
  typeof real,
  typeof negative
);

let x = 1 / 0;
console.log(x, typeof x);
// 무한대에는 양음이 있음
console.log(-x, typeof -x);
let y = -1 / 0;
console.log(y, typeof y);
let z = Infinity;
console.log(z, typeof z);

//숫자가 아닌 것
let v = 1 / 'abc';
let b = 2 * '가나다';
let n = NaN;

console.log(v, typeof v);
console.log(b, typeof b);
console.log(n, typeof n);

let j = 1 / 'abc';

console.log(
  j,
  j == NaN,
  j === NaN,
  isNaN(j), // 숫자가 아닐 시 true
  Number.isNaN(j) // 보다 엄격한 버전
);

// isNaN과 Number.isNaN의 차이
console.log(
  typeof '1', isNaN('1'), Number.isNaN('1')
); // 특정 숫자로 변환 가능한 문자

console.log(
  typeof true, isNaN(true), Number.isNaN(true)
); // true는 1, false는 0으로 변환됨

console.log(
  typeof 'a', isNaN('a'), Number.isNaN('a')
); // 특정 숫자로 변환 불가인 문자의 경우 차이

console.log(
  typeof (1/'a'), isNaN(1/'a'), Number.isNaN(1/'a')
); // NaN값인 경우

// 산술 연산자
// 값 반환
let f = 10;
let g = f * 10;

console.log(g);
console.log(
  g + 1, // 덧샘
  g - 1, // 뺄셈
  g * 2, // 곱셈
  g / 5, // 나눗셈
  g % 3,  // 나머지
  g ** 2 // 제곱
);
// 부수효과 없음
console.log(g);

// 널리 사용되는 홀수와 짝수의 판별법
console.log(
  '홀수 ',
  123 % 2,
  55 % 2,
  999 % 2
);
console.log(
  '짝수 ',
  2 % 2,
  100 % 2,
  8 % 2
);

console.log(
  4 * 1 + 2,
  4 * (1 + 2),
  4 * -(1 + 2),
  -(4 * -(1 + 2))
);

// 단항 산술 연산자
let q = 10;

// 값을 반환부터 하고 증가
console.log('1.', q++, q);
// 값을 증가부터 하고 반환
console.log('2.', ++q, q);

let w = 3;
let e = 4;

// 💡 부수효과가 일어나는 시점
console.log(w-- * --e, w, e);

console.log(
  +'100',
  -'100',
  +'abc' // 숫자로 변환될 수 없는 문자열
);

let t = '100';
console.log(t++, t);

// 숫자로 변환될 수 없는 문자열
// 첫 번째 값 주의 - 증가 이전에도 변환
let u = 'abc';
console.log(u++, u);