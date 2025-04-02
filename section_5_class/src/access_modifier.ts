/**
 * 접근 제어자
 * public private protected
 * -> java랑 범위 동일 (default만 없음)
 */

class Employee {
  // 필드
  name: string; // 자동으로 public
  age: number; // 자동으로 public
  position: string; // 자동으로 public

  // 생성자
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

const employee = new Employee("이정환", 27, "devloper");

employee.name = "홍길동";
employee.age = 30;
employee.position = "디자이너";

class Employee2 {
  // 필드
  private name: string; // private 접근 제어자 설정
  public age: number;
  public position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name}이 일함`); // 여기서는 접근 가능
  }
}

const employee2 = new Employee2("이정환", 27, "devloper");

//   employee2.name = "홍길동"; // ❌ 오류
employee2.age = 30;
employee2.position = "디자이너";

class Employee3 {
  // 필드
  private name: string; // private 접근 제어자 설정
  protected age: number;
  public position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name}이 일함`); // 여기서는 접근 가능
  }
}

class ExecutiveOfficer extends Employee3 {
  // 메서드
  func() {
    //   this.name; // ❌ 오류
    this.age; // ✅ 가능
  }
}

const employee3 = new Employee3("이정환", 27, "devloper");

//   employee3.name = "홍길동"; // ❌ 오류
//   employee3.age = 30; // ❌ 오류
employee3.position = "디자이너";
