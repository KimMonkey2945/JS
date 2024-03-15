const A = true, B = 123.45, C = '안녕하세요!';
console.log(A, typeof A);
console.log(B, typeof B);
console.log(C, typeof C);

let d;
console.log(d, typeof d);

d = null;
console.log(d, typeof d); // ⚠️ 'object' 반환

const E = Symbol('hello');
console.log(typeof E); // 이건 나중에

let isEmployed = true;
let isMarried = false;

console.log('직업 있음:', isEmployed);
console.log('기혼:', isMarried);

const F = 1 > 2;
const G = 1 < 2;

console.log(F, typeof F);
console.log(G, typeof G);

let integer = 100;
let real = 12.34;
let negative = -99;

console.log(integer, real, negative);

let first_name = "Brendan";
let last_name = 'Eich';
let description = `미국의 프로그래머로
자바스크립트 언어를 만들었으며
모질라의 CEO와 CTO를 역임했다.`;

console.log(first_name, last_name);
console.log(description);

console.log(
  typeof (typeof true),
  typeof (typeof 123.45),
  typeof (typeof 'Hello'),
);

let x;
console.log('값 넣기 전', typeof x);

x = null;
console.log('null값 넣은 후', typeof x);

//  주의! typeof가 object를 반환 초기 오류 - 객체는 원시타입이 아님
let z = null;
console.log(typeof null, typeof z);

// null 여부는 아래와 같이 확인할 것
console.log(z === null);