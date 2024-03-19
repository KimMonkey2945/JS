// (정적) isArray - 배열인지 여부를 반환

console.log(
  Array.isArray([1, 2, 3]),
  Array.isArray('123'),
  Array.isArray('123'.split(''))
);

console.log('------------------');

// instanceof Array와의 차이

const arrays = [
  [], [1, 2, 3], new Array(),
  // instanceof에서는 결과가 다름
  Array.prototype // 배열임
];

const notArrays = [
  1, 'abc', true, null, {}
];

for (const item of arrays) {
  console.log(
    item,
    Array.isArray(item),
    item instanceof Array
  );
}

for (const item of notArrays) {
  console.log(
    item,
    Array.isArray(item),
    item instanceof Array
  );
}
// Array.isArray가 보다 권장됨 다른 프레임의 Array도 판별

console.log('------------------');

// at - 주어진 인자를 인덱스로 값을 반환
const arr = [
  '한놈', '두시기', '석삼', '너구리', '오징어'
];

console.log(
  arr.at(1), arr.at(2)
);
console.log(
  arr.at(-1), arr.at(-2)
);

console.log('------------------');

// includes - 인자로 주어진 요소 유무 확인
const arr2 = [1, 2, 3, 'abc', true];

console.log(
  arr2.includes(2),
  arr2.includes('abc'),
  arr2.includes(true),
);

console.log(
  arr2.includes(4),
  arr2.includes('가나다'),
  arr2.includes(false)
);

// 참조형 데이터의 경우
const obj1 = { x: 1, y: 2 };
const obj2 = { x: 1, y: 2 };

const arr11 = [
  obj1,
  { x: 3, y: 4 }
];

console.log(
  arr11.includes(obj1),
  arr11.includes(obj2),
  arr11.includes({ x: 1, y: 2 }),
  arr11.includes({ x: 3, y: 4 })
);

console.log('------------------');

// indexOf, lastIndexOf - 앞/뒤에서 첫 번째 값의 인덱스 반환
const arr1 = [1, 2, 3, 2, 1];

console.log(
  arr1.indexOf(2),
  arr1.lastIndexOf(2),
  arr1.indexOf(4)
);
// 없을 시 -1 반환

console.log('------------------');

// join - 인자로 주어진 값으로 구분하여 요소들을 문자열로 연결하여 반환
const arr12 = ['a', 'b', 'c', 'd', 'e'];
const arr22 = [
  1, true, null, undefined, '가나다', { x: 0 }, [1, 2, 3]
];

console.log(
  arr12.join() // 인자가 없다면 쉼표`,`로
);

console.log(
  arr12.join('')
);

console.log(
  arr12.join(' ')
);

console.log(
  arr22.join(':')
);

console.log(
  classIntro(3, '김민지', '영희', '철수', '보라')
); // 호이스팅

function classIntro (classNo, teacher, ...children) {

  // [ 4-3강 예제 ]

  // let childrenStr = '';
  // for (const child of children) {
  //   if (childrenStr) childrenStr += ', ';
  //   childrenStr += child;
  // }
  // return `${classNo}반의 선생님은 ${teacher}, `
  //   + `학생들은 ${childrenStr}입니다.`

  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${children.join(', ')}입니다.`
}

console.log('------------------');

// push, unshift - 배열에 값을 추가
// 결과의 길이를 반환

// push - 값을 뒤에 추가
const arr01 = [1, 2, 3];
const x = arr01.push(4);

console.log(x, arr01);

const y = arr01.push(5, 6, 7); // 최종 길이 반환

console.log(y, arr01);

// unshift - 값을 앞에 추가
const arr02 = [5, 6, 7];
const xx = arr02.unshift(4);

console.log(xx, arr02);

const yy = arr02.unshift(1, 2, 3);

console.log(yy, arr02);

console.log('------------------');

// pop, shift - 배열에서 값을 제거하여 반환

// pop - 값을 뒤에서 제거하여 반환
const arr03 = [1, 2, 3, 4, 5];
const a = arr03.pop();

console.log(a, arr03);

const b = arr03.pop();

console.log(b, arr03);

// shift - 값을 앞에서 제거하여 반환

console.log('------------------');

// splice - 원하는 위치에 요소(들)을 추가 및 삭제
// 2개 이상의 인자를 받음
// start : 배열 변경을 시작할 위치
// deleteCount : 제거할 요소의 개수
// item(s) : 추가할 하나 이상의 요소

const arr04 = [1, 2, 3, 4, 5, 6, 7];

// 2번 인덱스부터 2개 요소 제거
arr04.splice(2, 2);

console.log(arr04);

// 3번 인덱스부터 요소 제거 없이 'a' 추가
arr04.splice(3, 0, 'a');

console.log(arr04);

// 1번 인덱스부터 3개 요소 제거 후 '가', '나', '다' 추가
arr04.splice(1, 3, '가', '나', '다');

console.log(arr04);

// 배열의 delete - empty 값을 남김
const arr05 = [1, 2, 3, 4, 5];
delete arr05[2];

console.log(arr05);

// 💡 때문에 배열의 값 삭제에는 splice 사용
arr05.splice(2, 1);

console.log(arr05);