// 쉼표 연산자
let x = 1, y = 2, z = 3;
console.log(x, y, z);

// 마지막으로 실행한 것 반환
console.log(
  (++x, y += x, z *= y)
);

// null 병합 연산자
let v;
v ?? console.warn(v, 'v 값이 없습니다.');

v = 0;
v ?? console.warn(v, 'v 값이 없습니다.');

v = null;
v ?? console.warn(v, 'v 값이 없습니다.');

let a = false;
let b = 0;
let c = '';
let d = null;
let e;

console.log(
  a ?? '기본값',
  b ?? '기본값',
  c ?? '기본값',
  d ?? '기본값',
  e ?? '기본값',
);

// 병합 할당 연산자
let f = 0;
let g = '';
let h = null;

f ||= 100;
g &&= '있어야 바뀜';
h ??= '기본값';

console.log(f, g, h);