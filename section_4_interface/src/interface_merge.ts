/**
 * 인터페이스 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  // name: number; // 타입 충돌
  age: number;
}

const person: Person = {
  name: "사람",
  age: 1,
};

/**
 * 라이브러리의 모듈 보강을 할 때 많이 사용
 */
// 라이브러리
interface Lib {
  a: number;
  b: number;
}

// 사용자 보강
interface Lib {
  c: string;
}

// 보강된 인터페이스 사용
const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
