// 배열
let numArr: number[] = [1, 2, 3];

// 문자열값 배열
let strArr: string[] = ["hello", "im", "yoon"];

// 제네릭 사용
let boolArr: Array<boolean> = [true, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];
let multiArr2: (string | number)[] = ["hello", 1];

// 다차원 배열 타입 정의
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 - 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, 'hello', true];
// let tup3: [boolean, boolean] = [true, true, true]; // 불가능

// 이런건 허용한다.
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

const users: [string, number][] = [
    ['홍길동', 1],
    ['김철수', 2],
    ['남도일', 3],
    // [4, '박영희'], 
];