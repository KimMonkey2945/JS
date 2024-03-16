const PLAYER = '김주하';
let number = 24;

console.log(PLAYER, number);
// PLAYER = '황연주'; -> 변할 수 없는 상수 오류발생.
number = 11;

console.log(PLAYER, number);

// 처음에 변수만 선언 시 undefined: '아직 값이 정해지지 않았다' 라는 값을 가지고 있음.

let x = 1;
let y = x;

console.log(x, y)

x = 'Hello!';
console.log('변경 후', x, y);
/*
C 등의 언어와 달리, 메모리상 가리키는 위치가 변경
기존 위치에 새 값을 넣는 것이 아님
차지하는 자리가 다른 크기의(자료형이 다른) 데이터가 재할당될 수 있으므로
*/

// const p;
// p="김주하";
// 선언하기만 하는 것 불가

let a = 1, b = 2, c = 3;
const X = 4, Y = 5; 

console.log(a, b, c);
console.log(X, Y);