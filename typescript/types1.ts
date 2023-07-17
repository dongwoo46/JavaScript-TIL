let a = 'hello';
let b: boolean = false;
let c = false;
let d: number[] = [];
d.push(1);
// 변수 : 타입명 = 값 (단, 안 쓰는걸 추천(필요시 사용))

// ?를 쓰면 값을 넣지 않아도 가능
const player: {
  name: string;
  age?: number;
} = {
  name: '동우',
};

// plaer.age가 undefined일수도 있기때문에 player.age를 추가해서 값이 있는지 없는지 확인먼저
if (player.age && player.age < 10) {
}

// 중복된 데이터를 저장하려고 할때 타입을 설정해서 값을 저장
type Age = number;
type Name = string;

type Player = {
  name: string; // string 대신 Name
  age?: number; // number 대신 Age 써도 가능
};

const nico: Player = {
  name: 'nico',
};

const lynn: Player = {
  name: 'lynn',
  age: 21,
};

// function에서는 type을 어떻게 return?
// argument : type, return 타입을 정하려면 함수 뒤에 : type
function playerMaker(name: string): Player {
  return {
    name: name, // 만약 name : name 이렇게 두개가 같으면 name만 써도 됨
  };
}

// 화살표 함수에서는
// const playerMaker = (name:string) :Player=> ({name})

const john = playerMaker('john');
john.age = 12;
