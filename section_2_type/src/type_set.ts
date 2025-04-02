let numLit: 20 = 20;

let numSuper: number = 3;

numSuper = numLit; // 업캐스팅
// numLit = numSuper; // 불가능

console.log(numSuper);

/**
 * unknown 타입 - 최상위 계층 (전체집합)
 */

function unknownExam() {
    let a: unknown = 1;
    a = 'hello';
    a = true;
    a = null;
    a = undefined;
    a = {};
    a = [];
}

/**
 * never 타입 - 최하위 계층 (공집합)
 */
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // 업캐스팅
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();
    let object: object = neverFunc();
    let arr: [] = neverFunc();

    // 다운캐스팅은 모두 불가능
    // let a: never = 1;                 // number -> never ❌
    // let b: never = "hello";           // string -> never ❌
    // let c: never = true;              // boolean -> never ❌
    // let d: never = null;              // null -> never ❌
    // let e: never = undefined;         // undefined -> never ❌
    // let f: never = [];                // Array -> never ❌
    // let g: never = {};                // Object -> never ❌
}

/**
 * any ==> 치트키 (조커) ==> never 캐스팅 말고는 다 됨
 */
function anyExam() {
  let anyValue: any;

  let num: number = anyValue; // any -> number (다운 캐스트)
  let str: string = anyValue; // any -> string (다운 캐스트)
  let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

  anyValue = num; // number -> any (업 캐스트)
  anyValue = str; // string -> any (업 캐스트)
  anyValue = bool; // boolean -> any (업 캐스트)

  let neverValue: never;
  // neverValue = anyValue; // 이것만 불가능
}