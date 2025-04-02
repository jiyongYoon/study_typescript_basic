/**
 * 타입 좁히기
 * 조건문 등을 이용해서 넓은타입에서 좁은타입으로
 */

function func1(value: number | string) {
  // value.toUpperCase(); // string에만 있는 메소드
  // value.toFixed(); // number에만 있는 메소드

  // 타입 가드
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}


type Person = {
  name: string;
  age: number;
};

function func2(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
    // Person은 타입일 뿐이기 때문에 instanceof를 사용할 수 없다. (instanceof는 해당 클래스의 인스턴스인지 묻는 것이기 때문에)
//   } else if (value instanceof Person) {
//     console.log(value.name);}
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
