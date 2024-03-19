// 배열의 고차함수 higher order function 메서드
// 다른 함수(콜백 함수 callback function)를 인자로 받음

// forEach - 각 요소를 인자로 콜백함수 실행
// 단점 : 예외를 던지지 않으면 종료할 수 없음 - break, continue 사용 불가

// 인자들:
// 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg - this 주제 섹션에서 다룰 것

const arr = [1, 2, 3, 4, 5];

const result = arr.forEach(itm => {
  console.log(itm);
});

// 결과로는 undefined 반환 - 실행 자체를 위한 메서드
console.log('반환값:', result);

// 현존하는 함수를 인자로 - 결과 살펴볼 것
arr.forEach(console.log);

console.log('------------------');

const arr0 = [10, 20, 30, 40, 50];

// 콜백함수의 인자가 둘일 때
arr0.forEach((itm, idx) => {
  console.log(itm, idx);
});

const logWithIndex = (itm, idx) => {
  console.log(`[${idx}]: ${itm}`);
}

arr0.forEach(logWithIndex);

// 콜백함수의 인자가 셋일 때
arr.forEach((itm, idx, arr) => {
  // 💡 세 번째 인자는 원본 배열의 참조임
  arr[idx]++;
  console.log(itm);
});

// 이런 식으로 원본을 수정해버릴 수 있음
console.log(arr);

console.log('------------------');

// map - 각 요소를 주어진 콜백함수로 처리한 새 배열 반환
// 인자들:
// 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg

const orgArr = [1, 2, 3, 4, 5];

// 각 콜백함수는 어떤 값을 반환해야 함!!
const arr10 = orgArr.map(i => i + 1);
const arr20 = orgArr.map(i => i * i);
const arr30 = orgArr.map(i => i % 2 ? '홀수' : '짝수');
console.log(arr10);
console.log(arr20);
console.log(arr30);

console.log('------------------');

const orgArr0 = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 2500 },
  { name: '딸기', cat: '과일', price: 5000 }
];


const arr12 = orgArr0.map(itm => {
  // 블록 안에서는 return 문 필요함!!
  return {
    name: itm.name,
    cat: itm.cat
  }
});

console.log(arr12);

// 디스트럭쳐링 사용 (편의에 따라 적절히)
const arr23 = orgArr0.map(({name, cat}) => {
  return { name, cat }
});

console.log(arr23);

const joined = orgArr0
.map(({name, cat, price}, idx) => {
  return `${idx + 1}: [${cat[0]}] ${name}: ${price}원`
})
.join('\n - - - - - - - - - \n');

console.log(joined);