/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string; // 인터페이스는 무조건 public 필드가 됨
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
