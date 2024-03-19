// 생성자 함수
const strObj1 = new String();
const strObj2 = new String('Hello World!');

console.log(strObj1);
console.log(strObj2);

console.log(strObj1.valueOf(), strObj1.toString());
console.log(strObj2.valueOf(), strObj2.toString());

console.log('------------------');

const fromNum = new String(123);
const fromBool = new String(true);
const fromArr = new String([1, 'A', false]);
const fromObj = new String({a: 1});

console.log(typeof fromNum, fromNum);
console.log(typeof fromBool, fromBool);
console.log(typeof fromArr, fromArr);
console.log(typeof fromObj, fromObj);

// 다른 타입들도 감쌀 수 있음 - 문자열로 변환한 값을 가진 String 객체 반환
// 객체를 string으로 변환하는 것은 의미가 없음, object Object 로 결과가 고정

console.log('------------------');

// new 없이 사용하면

const str1 = String('Hello World!');
const str2 = String(123);
const str3 = String(true);
const str4 = String({x: 1, y: 2}); // 💡 [object Object]
const str5 = String([1, 2, 3]); // 💡 1,2,3

console.log(typeof str1, str1);
console.log(typeof str2, str2);
console.log(typeof str3, str3);
console.log(typeof str4, str4);
console.log(typeof str5, str5);

// 생성자로서가 아닌 String 함수는 주어진 인자를 문자열로 변환하여 반환

console.log('------------------');

// 유사 배열 객체
let myStr = '안녕하세요!';

console.log(
  myStr.length,
  myStr[0],
  myStr[myStr.length - 1]
);

myStr[myStr.length - 1] = '?';
console.log(myStr); // 배열과 달리 그대로

for (const letter of myStr) {
  console.log(letter);
}

// length 프로퍼티: 글자 수 반환
// [] 안에 인덱스 숫자를 넣어 ~번째 글자 읽기(만) 가능
// for ... of문 사용 가능 이후 배울 이터러블이기 때문

// String은 원시값
// [] 접근 또는 인스턴스 메서드로 특정 글자만 수정하는 것은 불가능한 이유
// 수정하려면 변수 값 자체를 다른 문자열로 대체해야...