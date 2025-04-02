/**
 * 함수타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은지 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ✅ 업캐스팅
// b = a; // ❌ 다운캐스팅

// 기준2. 매개변수가 호환되는가
// 기준2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // ❌ 업캐스팅은 호환이 안된다. 숫자리터럴을 number로
d = c; // ✅ 다운캐스팅은 된다.

// 이상하다...?
// 다른 예제
type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
}

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}

// 아래와 같은 상황인 것임
// animalFunc = dogFunc;
let testFunc = (animal: Animal) => {
    console.log(animal.name);
    // console.log(animal.color);
}

dogFunc = animalFunc;
let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
}

// -> 즉, 매개변수가 함수 내부에서 쓰일 때 캐스팅되어도 괜찮은지를 판단하면 되는듯
// number 타입 매개변수를 10(number literal)타입에 못 넣은 이유는, 모든 number가 10이 될 수는 없기 때문
// 반대로 10(number literal) 타입은 number 타입에 들어가도 문제가 없기 때문

//기준2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
// func2 = func1; // ❌