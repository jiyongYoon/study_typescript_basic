/**
 * 클래스
 */

let studentA = {
    name: '홍길동',
    grade: "A+",
    age: 25,
    study() {
        console.log("열심히 공부");
    },
    introduce() {
        console.log("안녕하세요!");
    }
}

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("열심히 공부");
    }

    introduce() {
        console.log(`안녕하세요! ${this.name}입니다.`);
    }
}

let studentB = new Student('김철수', 'B', 22);
let studentC = new Student('박영희', 'A', 26);

console.log(studentA);
console.log(studentB);
console.log(studentC);

studentA.introduce();
studentB.introduce();
studentC.introduce();

class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드
    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}

const developerStudentA = new StudentDeveloper('김개발', 'D', 24, 'typescript');
developerStudentA.introduce();
developerStudentA.programming();