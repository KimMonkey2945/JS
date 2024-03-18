// 객체 생성과 프로퍼티 접근
const food1 = {
  name: '햄버거',
  price: 5000,
  vegan: false
};

console.log(food1);

console.log(
  food1.name, // 마침표 프로퍼티 접근 연산자
  food1['price'] // 대괄호 프로퍼티 접근 연산자
);

// 빈 객체 생성
const food2 = {};
console.log(food2);

// 프로터피 추가
food2.name = '샐러드';
food2.price = '6000';
food2['vegan'] = true;

console.log(food2);

// 프로터피 수정
food2['price'] = '6500';
food2.vegan = false;

console.log(food2);

console.log('------------------');

// 식별자 명명 규칙에 벗어나는 키 이름 사용시

const obj = {
  1: '하나', // 숫자도 객체의 키로는 사용 가능
  'ab-cd': 'ABCD', // 문자 포함 시 키도 따옴표로 감싸야 함
  's p a c e': 'Space'
}

// 대괄호 프로퍼티 접근 연산자로만 가능
console.log(
  obj[1],
  obj['ab-cd'],
  obj['s p a c e']
);

// 오류 발생
// console.log(
//   obj.1,
//   obj.ab-cd,
//   obj.s p a c e
// );

let idx = 0;
const  obj2 = {
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  [idx ** idx]: 'POWER'
}

console.log(obj2);

// 프로퍼티 삭제 - delete 연산자
const person1 = {
  name: '홍길동',
  age: 24,
  school: '한국대',
  major: '컴퓨터공학'
};

console.log(person1);

delete person1.age;
console.log(person1);

delete person1['major'];
console.log(person1);

// 💡 오류가 발생하지는 않음
delete person1.hobby;
console.log(person1);

console.log('------------------');

// 키의 동적사용

const product1 = {
  name: '노트북',
  color: 'gray',
  price: 800000
}

function addModifyProperty (obj, key, value) {
  // obj.key = value; // ⚠️ 의도와 다른 작업 수행
  obj[key] = value;
}
function deleteProperty (obj, key) {
  // delete obj.key // ⚠️ 의도와 다른 작업 수행
  delete obj[key];
}

addModifyProperty (product1, 'inch', 16);
console.log(product1);

addModifyProperty (product1, 'price', 750000);
console.log(product1);

deleteProperty(product1, 'color');
console.log(product1);

