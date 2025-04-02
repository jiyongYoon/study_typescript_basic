/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 아쉬움 -> 필드가 변경되거나 등등 변수가 많음
function warning(animal: Animal) {
  if ("isBark" in animal) {
    //강아지
  } else if ("isScratch" in animal) {
    // 고양이
  }
}

// 타입가드용 함수
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

// 타입가드 사용
function warningWithGuard(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark);
  } else if (isCat(animal)) {
    console.log(animal.isScratch);
  }
}
