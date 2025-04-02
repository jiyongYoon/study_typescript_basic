/**
 * 함수 타입 정의
 */
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입 정의
 */
const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */
function introduce(name = "홍길동", height?: number) {
  console.log(`name: ${name}, tall: ${height}`);
  if (typeof height === "number") {
    console.log(`10cm 키우면 tall: ${height + 10}`);
  }
}

introduce("김철수", 170);
introduce("김철수");

function getSum(...rest: number[]) {
  console.log(rest);
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3, 4, 5);

function getSum2(...rest: [number, number, number]) {
  console.log(rest);
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum2(1, 2, 3);
