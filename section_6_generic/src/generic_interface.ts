/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, number[]> = {
  key: true,
  value: [1, 2, 3],
};

/**
 * 인덱스 시그니처
 */
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 12313,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 * 제네릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * --> 유저 구분: 학생 / 개발자
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User {
  name: string;
  profile: Student | Developer;
}

function goToSchool(user: User) {
  // 타입가드 -> 좀 번거롭고 복잡하다
  if (user.profile.type !== "student") {
    console.log("잘못 오셨습니다");
    return;
  }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User = {
  name: "홍길동",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User = {
  name: "김철수",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};

// 제네릭 적용
interface User2<T> {
  name: string;
  profile: T;
}

function goToSchool2(user: User2<Student>) {
  console.log(`${user.profile.school}로 등교 완료`);
}

const developerUser2: User2<Developer> = {
  name: "홍길동",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser2: User2<Student> = {
  name: "김철수",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};
