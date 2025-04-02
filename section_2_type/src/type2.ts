// number
let num1: number = 123;
let num2: number = NaN;
let num3: number = -Infinity;
let num4: number = null; // 원래는 안되는데 tsconfig.json 에 "strictNullChecks": false 추가하면 가능

// string
let str1: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 리터럴 타입: 그 값 자체가 타입이 됨
let ten: 10 = 10;
// ten = 12; // 불가능
let hello: 'hello' = 'hello';
let boolA: false = false;
// boolA = true; 