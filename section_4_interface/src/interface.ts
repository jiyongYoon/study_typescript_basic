/**
 * 인터페이스
 */
// 인터페이스는 I를 맨 앞에 붙이는 헝가리안 표기법을 사용하는 팀도 있다.
interface IPerson {
  readonly name: string;
  age: number;
  location?: string;

  getName(): string;
  sayHelloWithFriendsName: (friendsName: string) => void;
}

const person: IPerson = {
  name: "홍길동",
  age: 30,
  getName: function () {
    return this.name;
  },
  sayHelloWithFriendsName: function (friendsName: string) {
    console.log(`${friendsName}야 안녕?`);
  },
};

person.sayHelloWithFriendsName("민수");
console.log(`내 이름은 ${person.getName()}이야`);
