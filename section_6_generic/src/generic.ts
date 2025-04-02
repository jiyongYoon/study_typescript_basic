/**
 * 제네릭
 */

function func(value: any) {
  return value;
}

let num = func(10);
// any 타입

// 타입가드를 해줘야 사용가능했음
if (typeof num === "number") {
  num.toFixed();
}

let str = func("string");
// any 타입

// 제네릭 함수
function func2<T>(value: T): T {
  return value;
}

let num2 = func2(10);
// number 타입
num2.toFixed(); // 바로 사용 가능

let str2 = func2("hello");
str2.toUpperCase();

function func3<T>(value: T): T {
  return value;
}

let arr = func3<[number, number, number]>([1, 2, 3]);
let arr2 = func3<[string, number, boolean]>(['hello', 1, true]);