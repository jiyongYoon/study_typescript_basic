interface Animal {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  age: number;
  isBark: boolean;
}

interface Cat extends Animal {
  age: 1; // 원본 프로퍼티의 서브타입으로만 재정의 가능
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

const cat: Cat = {
  name: "야옹이",
  age: 1,
  isScratch: true,
};

interface DogChicken extends Dog, Chicken {}

const dogChicken: DogChicken = {
  name: "개닭",
  age: 3,
  isBark: true,
  isFly: true,
};

