// void
function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1; // 불가능
// a = 'hello'; // 불가능
a = undefined; // 가능

// never -> 아무것도 못담음
function func3(): never {
  // 논리적으로 반환값이 있을 수 없음
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let anyVar: any;

let b: never;
// b = null; // 불가능
// b = undefined; // 불가능
// b = anyVar; // 불가능
