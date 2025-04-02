/**
 * 함수타입 표현식
 */
// 타입이름 = 매개변수 타입 정의 => 반환값 타입 정의
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
// 이렇게도 가능
const divide: (a: number, b: number) => number = (a, b) => a / b;

/**
 * 호출 시그니처
 */
type Operation2 = {
    (a: number, b: number): number;
}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;