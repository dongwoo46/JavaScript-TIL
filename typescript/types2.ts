// readonly type

type Soccer = {
  readonly name: Name;
  age?: Age;
};

function soccerMaker(name: string): Soccer {
  return {
    name,
  };
}

// readonly에서는 읽기만 가능 값변경 안됨
const james = soccerMaker('james');
james.age = 12;
james.name = 'las';

// readonly 때문에 값을  못넣음
const numbers: readonly number[] = [1, 2, 3, 4];
numbers.push(1);

//Tuple => 값 변경X
// 정해진 개수의 요소를 가져야하는 array 지정 가능
// 원하는 순서에 맞는 타입도 가져야함
const gamer: [string, number, boolean] = ['nico', 1, true];
gamer[0] = 1;

//any type => 아무 타입 typescript를 빠져나올때 사용
const j: any[] = [1, 2, 3, 4];
const k: any = true;
j + k;

//unknown 변수의 타입을 미리 알지 못할때 사용
//이땐 변수의 타입을 확인하고 사용해야함
let z: unknown;

if (typeof z === 'number') {
  let x = z + 1;
}

if (typeof z === 'string') {
  let x = a.toUpperCase();
}

//void - 아무것도 return하지 않는 함수 만들때
//void는 따로 지정할 필요없이 return이 없으면 자동으로 인식
function hell() {
  console.log('x');
}

//never - 함수가 절대 return하지 않을때 발생
function cello(): never {
  return 'X';
}

// 리턴하지 않고 오류를 발생시키는 함수
function xello(): never {
  throw new Error('xxx');
}

function aello(name: string | number) {
  // name +1 // name이 string일 수도 있기 때문에
  if (typeof name === 'string') {
    name;
  } else if (typeof name === 'number') {
    name;
  } else {
    // type이 never => 실행되면 안됨 => 오류
    name;
  }
}
