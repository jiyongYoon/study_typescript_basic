/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합과 교집합이 존재
 */

/**
 * 1. 합집합
 */
let a: string | number;
a = 1;
a = "hello";

let b: string | boolean | number;
b = true;
b = "hi";
b = 1;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  language: "",
  color: "",
};

/* 불가능
let union4: Union1 = {
  name: "",
};
*/

/**
 * 2. 교집합
 */
let variable: number & string; // number과 string는 교집합이 없기 때문에 원시타입의 교집합은 대부분이 never 타입이 된다.

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};

/* 불가능
let intersection2: Intersection = {
  name: "",
  color: "",
};
*/
