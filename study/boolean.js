console.log(true, typeof true);
console.log(false, typeof false);

let a = 1 === 2;
let b = 'abc' !== 'def'
let c = a !== b;
let d = typeof a === typeof b === true;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);

// 부정 연산자
console.log(
  true, !true, false, !false
);

console.log(
  true, !true, !!true, !!!true
);

console.log(
  false, !false, !!false, !!!false
);

console.log(
  true === !false,
  !(1 == '1'),
  !(1 === '1'),
  !(typeof false === 'boolean')
);

// 💡 드 모르간의 법칙
let w = true;
// w = false;
let e = true;
// e = false;

console.log(
  !(w && e) === (!w || !e),
  !(w || e) === (!w && !e)
); // 💡 항상 true

// 주의!!!!
let error = true;
// error = false;

// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!');

// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log('이상 없음.');

let x = true;
// x = false;

// ⭐️ &&, || 연산자는 값 자체를 반환
let y = x && 'abc';
let z = x || 123;

console.log(y, z);

// 삼항연산자
let j = true;
// x = false;

let k = j ? '참입니다.' : '거짓입니다.';
console.log(k);

let num = 103247;

console.log(
  'num은 3의 배수' +
  (num % 3 === 0 ? '입니다.' : '가 아닙니다.')
);

let error2 = true;
//error2 = false;

error2 
  ? console.error('오류 발생!') 
  : console.log('이상 없음');

// Truthy vs Falsy

// 1.Truthy
console.log(
  1.23 ? true : false,
  -999 ? true: false,
  '0' ? true : false,
  ' ' ? true : false,
  Infinity ? true : false,
  -Infinity ? true : false,
  {} ? true : false,
  [] ? true : false,
);

// true와 `같다`는 의미는 아님
console.log(
  1.23 == true,
  ' ' == true,
  {} == true
);

// 2.Falsy
console.log(
  0 ? true : false,
  -0 ? true : false,
  '' ? true : false,
  null ? true : false,
  undefined ? true : false,
  NaN ? true : false,
);

// 어떤 값들은 false로 타입변환됨
console.log(
  0 == false,
  0 === false,
  '' == false,
  '' === false
);
console.log(
  null == false,
  undefined == false,
  NaN == false,
);

let m = 0;
let l = 1;

m && m++;
l && l++;

console.log(m, l);

let n = 2;
let i = 3;

console.log(
  n % 2 ? '홀' : '짝',
  i % 2 ? '홀' : '짝'
);

let u = '';
let o = '회사원';
let p = u || o;

console.log(p);

x = x || '단기알바';
y = y || '단기알바';

console.log(x, y);

// boolean으로 직접변환
// 한 번 부정
console.log(
  !1, !-999, !'hello',
  !0, !'', !null
);

// 두 번 부정하여 해당 boolean값으로
console.log(
  !!1, !!-999, !!'hello',
  !!0, !!'', !!null
);

let q = 123;

console.log(
  'x는 홀수인가?',
  !!(q % 2)
);
