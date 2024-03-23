// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// console.log(arr2);

// const arr1 = ['B', 'C'];
// const arr2 = ['D'];
// const arr3 = ['E'];

// const arr4 = ['A', ...arr1, ...arr2, ...arr3, 'F']

// console.log(arr4);

const arr1 = [1, 2, 3, 4, 5];

console.log(arr1);

// console.log(1, 2, 3, 4, 5);
console.log(...arr1);

console.log(
  Math.max(...arr1),
  Math.min(...arr1)
);

const orgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 4 ~ 6을 제외한 새 배열 만들기

// 💡 slice는 원본을 변경하지 않음
const arr10 = [
  ...orgArr.slice(0, 3),
  ...orgArr.slice(6, 9)
];
console.log(arr10);

console.log('------------------');

// 디스트럭쳐링 destructuring
// const arr = [1, 2, 3];

// const x = arr[0];
// const y = arr[1];
// const z = arr[2];

// console.log(x, y, z);

const arr = [1, 2, 3];
const [x, y, z] = arr;

console.log(x, y, z);

// 일부만 가져오는 것도 가능.
// const arr = [1, 2, 3];
// const [x, y] = arr;

// console.log(x, y);

// 기본값 설정
const arr20 = [1, 2, 3];

const [a, b, c, d = 4, e = 5] = arr20;
console.log(a, b, c, d, e);

// 기본값보다 할당값이 우선
const [f, g, h = 4] = arr20;
console.log(f, g, h);