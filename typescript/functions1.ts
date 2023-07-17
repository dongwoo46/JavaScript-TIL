function add(a: number, b: number) {
  return a + b;
}
const add = (a: number, b: number) => a + b;

// call signatures : 함수를 타입으로 만들기
type Add = (a: number, b: number) => number;
const cdd: Add = (a, b) => a + b;

// overloading : 함수가 서로 다른 여러개의 call signature를 가지고 있을때 발생

// overloading ex1
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};
// const add: Add = (a, b) => a + b; // b가 string or number이기 때문에 에러발생
const add: Add = (a, b) => {
  if (typeof b === 'string') return a;
  return a + b;
};

//overloading ex2
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === 'string') {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

// overloading ex3
// 파라미터 수가 다른 경우 (다른 인자는 옵션이다)
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

// Function(=Method) Overloading은 직접 작성하기보다 외부 라이브러리에 자주 보이는 형태로, 하나의 함수가 복수의 Call Signature를 가질 때 발생한다

// type Add = {
// (a: number, b: number): number,
// (a: number, b: string): number
// }

// const add: Add = (a, b) => {
// if (typeof b === "string") return a;
// return a + b;
// }

// 매개변수의 데이터 타입이 다른 경우 예외 처리

// type Add2 = {
// (a: number, b: number): number,
// (a: number, b: number, c: number): number
// }

// const add2: Add2 = (a, b, c?: number) => {
// if (c) return a + b + c;
// return a + b;
// }

// 매개변수의 수가 다른 경우 예외 처리

// 위와 같은 함수는 거의 없지만 외부 라이브러리에서 활용될 수 있다

// router.push("/home");

// router.push({
// path: "/home",
// state: 1
// });

// 예를 들어, Next.js의 라우터 push가 대충 두 가지 방법으로 페이지를 이동한다고 할 때,

// type Config = {
// path: string,
// state: number
// }

// type Push = {
// (config: Config): void,
// (config: string): void
// }

// const push: Push = (config) => {
// if (typeof config === "string") console.log(config);
// else console.log(config.path);
// }

// 패키지나 라이브러리는 위와 같이 두 가지 경우의 Overloading으로 디자인되어 있을 것이다
