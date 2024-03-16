let word = '안녕하세요! 🙂';
console.log(word);

let word1_1 = "반갑습니다~ 👋";
console.log(word1_1);

let word2_1 = '작은따옴표 안에 "큰따옴표" 사용';
let word2_2 = "큰따옴표 안에 '작은따옴표' 사용";
console.log(word2_1, word2_2);

// ⭐️ 이스케이프 표현(escape sequence)
let word3_1 = '작은따옴표 안에 \'작은따옴표\' 사용';
let word3_2 = "큰따옴표 안에 \"큰따옴표\" 사용";
console.log(word3_1, word3_2);

let escape = '안녕하세요~\t\t반갑습니다!\n저는 \\홍길동\\입니다.';
console.log(escape);

// let longName = '김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이';

let longName = '김수한무 거북이와 두루미 \
삼천갑자 동방삭 치치카포 사리사리센타 \
워리워리 세브리깡 무두셀라 구름이 \
허리케인에 담벼락 담벼락에 서생원 \
서생원에 고양이 고양이엔 바둑이 \
바둑이는 돌돌이';

// ⚠️ 줄바뀜 되는 것이 아님
// 큰따옴표도 마찬가지
console.log(longName);

let word4 = `헬로헬로~ 🤩`;
console.log(word4);

let word4_2 = `안녕하세요~		반갑습니다!
저는 \\홍길동\\입니다.`;
console.log(word4_2);

const NAME = '홍길동';
let age = 20;
let married = true;

console.log(
`제 이름은 ${NAME}, 나이는 ${age}세구요, \
${married ? '기혼' : '미혼'}입니다.`
);