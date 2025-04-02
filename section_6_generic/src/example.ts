// 여러 제네릭 타입
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 배열 제네릭 타입
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// number

let str = returnFirstValue([1, "hello", "mynameis"]);
// string | number => 어떤 요소가 리턴될 지 모르기 때문에 유니온 타입이 지정됨

// str.toUpperCase(); 안됨
// str.toFixed(); 안됨
if (typeof str === "string") {
  str.toUpperCase();
} else if (typeof str === "number") {
  str.toFixed();
}

// 만약, 첫번째 요소를 타입을 지정받아 리턴받고 싶으면
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

// number
let val = returnFirstValue2([1, "hello", true]);
val.toFixed();

// boolean
let val2 = returnFirstValue2(["hello", true]);
val2.toUpperCase();


// number 타입의 length 프로퍼티를 가진 타입 T
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123"); // ✅

getLength([1, 2, 3]); // ✅

getLength({ length: 1 }); // ✅

// getLength(10); // ❌ length 프로퍼티 없음

getLength(undefined); // ❌

getLength(null); // ❌
