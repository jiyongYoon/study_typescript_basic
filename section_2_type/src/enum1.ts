// enum 타입 -> 값을 넣는거에 따라 숫자형 enum, 문자형 enum 등
enum Role {
  ADMIN, // 0 할당(자동)
  USER, // 1 할당(자동)
  GUEST, // 2 할당(자동)
}

enum Role2 {
  ADMIN = 1,
  USER = 2,
  GUEST = 3,
}

enum Role3 {
  ADMIN = 10, // 10 할당
  USER, // 11 할당(자동)
  GUEST, // 12 할당(자동)
}

const user1 = {
  name: "김철수",
  role: Role2.ADMIN, //관리자
};

const user2 = {
  name: "홍길동",
  role: Role2.USER, // 회원
};

const user3 = {
  name: "아무개",
  role: Role2.GUEST, // 게스트
};

console.log(user1, user2, user3);
/**
 * { name: '김철수', role: 1 } { name: '홍길동', role: 2 } { name: '아무개', role: 3 }
 */

// 문자형 enum
enum Language {
  korean = "ko",
  english = "en",
}

const user4 = {
  name: "홍홍",
  role: Role.ADMIN, // 0
  language: Language.korean, // "ko"
};

console.log(user4); // { name: '홍홍', role: 0, language: 'ko' }