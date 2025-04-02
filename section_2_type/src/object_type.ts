/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 *
 * 구조적 타입 시스템을 가진 typescript는 구조적으로 더 많은 필드를 포함할 수 있는 객체가 상위객체가 됨
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "기린",
  color: "yellow",
  breed: "진도",
};

animal = dog; // (업캐스팅) animal은 dog를 포함할 수 있음.
// dog = animal; // (다운캐스팅) dog는 animal을 포함할 수 없음.

let dog2: Animal = {
  name: "댕댕이",
  color: "green",
//   breed: "풍산", // 초과 프로퍼티 검사로 추가를 하지 못함
};
