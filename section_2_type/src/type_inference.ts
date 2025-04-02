/**
 * 타입 추론
 */

let a = 10;
// a = 'hello'; // 변수의 초기값으로 타입을 추론하기 때문에 에러남

let b = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};
/* 위 변수를 ts가 추론한 내용
let b: {
    id: number;
    name: string;
    profile: {
        nickname: string;
    };
    urls: string[];
}
 */

let { id, name, profile } = b;
// id: number, name: string, profile: { nickname: string; }으로 추론 잘 함

// 비추천
// 타입 선언을 안하면 (any로 선언하면 그냥 any만 됨)
let d; // 여기서는 any타입
d = 10; // 여기서 d가 number type으로 추론되는 중
d.toFixed; // number 함수 사용 가능

d = "string"; // 여기서 d가 string type으로 추론이 진화함
d.toUpperCase; // string 함수 사용 가능
// any -> number -> string

const num = 10; // const 키워드는 리터럴 타입으로 추론됨

let arr = [1, "string"]; // let arr: (string | number)[]

/**
 * 타입 넓히기
 * let a = 10; ==> a를 number 타입으로 추론하여 number를 다 받을 수 있도록 함
 * (const b = 10; ==> b를 10(number literal) 타입으로 추론)
 */

