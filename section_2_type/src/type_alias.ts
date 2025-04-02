// 타입 별칭
type User = {
  id: number;
  name: string;
};

let user: User = {
  id: 1,
  name: "홍길동",
};

function func() {
  type User = {
    id: string;
  };

  let funcUser: User = {
    id: "a",
  };
}
