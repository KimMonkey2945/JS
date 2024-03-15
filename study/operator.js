console.log(
  '안녕하세요~' === "안녕하세요~",
  '안녕하세요~' === `안녕하세요~`,
  "안녕하세요~" === `안녕하세요~`,
);

console.log(
  '1' == '1',
  '1' == 1,
  '1' == 2
);

console.log(
  '1' != '1',
  '1' != 1,
  '1' != 2
);

console.log(
  '1' === '1',
  '1' === 1,
  '1' === 2
);

console.log(
  '1' !== '1',
  '1' !== 1,
  '1' !== 2
);

console.log(
  'ABC' < 'abc',
  'apple' <= 'banana',
  '가나다' > '라마바',
  '안녕' >= '안녕'
);

// 할당연산자
let str1 = '헬로';
str1 += ' 월드';

// 부수효과
console.log(str1);

// 값 반환
let str2 = str1 += '~~~';

console.log(str2);

// 부수효과
console.log(str1);

//오류. 왼쪽 값은 부수효과의 대상(변수)이어야 함
// let str = '헬로' += '월드';
//오류. 왼쪽 값은 부수효과의 대상(변수)이어야 함
// const STR = '안녕~';
// STR += ' 반가워요!';

//  다른 자료형과 더하면 문자열 반환
let result = '안녕' + 1 + true;

console.log(result);
console.log(typeof result);

result += null;
result += undefined;

console.log(result);
console.log(typeof result);