/**
 * 제네릭 클래스
 */

class NumberList {
  private list;

  constructor(list: number[]) {
    this.list = list;
  }

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

class List<T> {
  private list;

  constructor(list: T[]) {
    this.list = list;
  }

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const greetingList = new List<string>(['hello', 'hi']);
greetingList.push('good morning');
greetingList.print();

const numberList2 = new List([1, 2, 3]);
numberList2.push(5);
numberList2.print();

// weirdList: List<string | number>
const weirdList = new List(['hello', 3]);
weirdList.push('3');