// const arr1 = []; // 빈 배열
// const arr2 = [1, 2, 3];
// const arr3 = [1, , 2, , 3] // 빈 요소(undefined) 표함 배열 생성

// console.log(arr1.length, arr1);
// console.log(arr2.length, arr2);
// console.log(arr3.length, arr3);

console.log('------------------');

const arr = new Array(3);
console.log(arr);
console.log(arr.length);
// 길이 값만 있음.
console.log(
  arr[0], arr[1], arr[2]
);
// 인자가 숫자 하나면 길이값은 있지만 요소가 없는 배열 생성 접근시 undefined

console.log('------------------');

const arr1 = new Array(1, 2, 3);
const arr2 = new Array('ABC');
const arr3 = new Array(true);

console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log('------------------');

// 정적 메서드 of
// 인자가 하나의 숫자라도 이를 요소로 갖는 배열 생성
const arr11 = Array.of(3);

const arr22 = Array.of(1, 2, 3);
const arr33 = Array.of('ABC', true, null);

console.log(arr11);
console.log(arr22);
console.log(arr33);

console.log('------------------');

// 정적 메서드 from
// 배열, 유사배열객체, 이터러블을 인자로 받아 배열 반환
const arr111 = Array.from([1, 2, 3]);
const arr222 = Array.from('ABCDE');
const arr333 = Array.from({
  '0': true,
  '1': false,
  '2': null,
  length: 3
});

console.log(arr111);
console.log(arr222);
console.log(arr333);


