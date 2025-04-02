/**
 * 타입 단언
 */
type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // person 변수
person.name = "";
person.age = 23;

type Dog = {
  name: string;
  color: string;
};

/* 초과 프로퍼티 검사로 불가능
let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
}
*/

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

/**
 * const 단언
 */
let num4 = 10 as const; // 10이라는 리터럴 타입으로 단언

let cat = {
  name: "야옹이",
  color: "white",
} as const; 
/* 추론된 타입
let cat: {
    readonly name: "야옹이";
    readonly color: "white";
}
*/

/**
 * Not Null 단언
 * -> null이 아닌 타입으로 단언
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};


// const len: number = post.author?.length;
const len: number = post.author!.length;
// java의 optional과 비슷한 느낌 -> ! 로 값이 있음을 단언해주면 해당 타입으로 취급할 수 있음