// object
let user: object = {
  id: 1,
  name: "홍길동",
};

// user.id; // Property 'id' does not exist on type 'object'.

// 객체 literal 타입 -> 구조적 타입 시스템
let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "홍길동",
};

let dog: {
  name: string;
  color: string;
} = {
  color: "brown",
  name: "돌돌이",
};

// 선택적 프로퍼티
let user3: {
  id?: number;
  name: string;
} = {
  name: "user3",
};

// 읽기 전용 프로퍼티 -> 수정 불가
let config: {
  readonly apiKey: string;
} = {
  apiKey: "My API Key",
};

// config.apiKey = 'Your API Key';
