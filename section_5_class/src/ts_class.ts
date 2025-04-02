/**
 * 타입스크립트의 클래스
 */

class Employee {
  // 필드
  name: string = "";
  age: number = 0;
  position: string = "";

  //   필드에서 초기화를 안하면 생성자를 만들어줘도 됨
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const employeeA = new Employee("홍길동", 30, "의적");
console.log(employeeA);

// 타입스크립트의 클래스는 타입으로도 활용 가능
const employeeB: Employee = {
  name: "",
  age: 1,
  position: "",
  work() {},
};

console.log(employeeB);

employeeA.work();
employeeB.work();

// 상속
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
