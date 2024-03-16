{
  console.log('블록문');
}

// 블록 안에 선언된 변수와 상수를 밖에서 사용 불가
{
  const x = 'Hello';
  let y = 'world!';
  console.log(x, y);
}

// console.log(x);
// console.log(y);

// 블록 안쪽에서는 바깥의 것 사용 가능
let x = 1;

{
  let y = 2;
  console.log(x, y);
}
console.log(x);
// console.log(y);

// 블록 안쪽에 변수나 상수가 새로 선언되면 바깥 것을 덮어씀
const xx = 0;
let yy = 'Hello!';
console.log(xx, yy);

{
  const xx = 1; // 💡 블록 안에서는 바깥의 const 재선언 가능
  let yy = '안녕하세요~';

  console.log(xx, yy);
  // const, let을 빼먹으면 재선언이 아니라 바깥것의 값을(변수면) 바꿈!
}

console.log(xx, yy);

console.log('------------------------------------------')

// 블럭 안에 해당 변수/상수가 없으면 바깥쪽으로 찾아 나감
let a = 0;
let b = 1;
let c = 2;
console.log('시점 1:', a, b, c);

{
  let a = 'A';
  let b = 'B'
  console.log('시점 2:', a, b, c);

  {
    let a = '가'
    console.log('시점 3:', a, b, c);
  }

  console.log('시점 4:', a, b, c);
}

console.log('시점 5:', a, b, c);