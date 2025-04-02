// any
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase(); // 런타임 에러 -> any는 쓰지말자...
anyVar.toFixed();
anyVar.a;

let num: number = 10;
num = anyVar; // 가능

// unknown -> 런타입 에러를 일으키지는 않음
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // 불가능
// 아래처럼 타입을 확정해주어야 가능
if (typeof unknownVar === "number") {
  num = unknownVar;
}
