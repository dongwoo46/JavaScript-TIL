//keyof
interface User {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

type UserKey = keyof User; //"id" | "name" | "age" | "gender"

const uk: UserKey = 'id';

//Patial<T> property를 옵션으로 바꿔줌
interface User {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

// interface User {
//   id?: number;
//   name?: string;
//   age?: number;
//   gender?: 'm' | 'f';
// }
let admin: Partial<User> = {
  id: 1,
  name: 'bob',
};

//Required<T> 모든 property를 필수로 바꿔줌
interface User {
  id: number;
  name: string;
  age?: number;
}
let admin: Required<User> = {
  id: 1,
  name: 'bob',
  //age를 안넣어줘서
};

//Readonly<T> -> 읽기 즉 처음에 할당만 가능하고 수정 불가
interface User {
  id: number;
  name: string;
  age?: number;
}
let admin: Readonly<User> = {
  id: 1,
  name: 'bob',
};
admin.id = 4;

// Record<K,T>
// interface score {
//   '1': 'A' | 'B' | 'C' | 'D';
//   '2': 'A' | 'B' | 'C' | 'D';
//   '3': 'A' | 'B' | 'C' | 'D';
//   '4': 'A' | 'B' | 'C' | 'D';
// }

type Grade = '1' | '2' | '3' | '4';
type Score = 'A' | 'B' | 'C' | 'D';

const score: Record<Grade, Score> = {
  1: 'A',
  2: 'C',
  3: 'B',
  4: 'D',
};

// type humanInfo = {
//   [name: string]: number
// };

// let human:humanInfo = {
//   '홍길동': 20,
//   '둘리': 30,
//   '마이콜': 40
// };
type humanInfo = Record<string, number>;
let human: humanInfo = {
  홍길동: 20,
  둘리: 30,
  마이콜: 40,
};

interface User {
  id: number;
  name: string;
  age: number;
}

function isValid(user: User) {
  const result: Record<keyof User, boolean> = {
    id: user.id > 0,
    name: user.name !== '',
    age: user.age > 0,
  };
  return result;
}

//Pick<T,K> T타입에서 K값만 골라서 사용 특정 property를 생략하고 원하는 key값만 가져와서 사용 가능
interface User {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

const admin: Pick<User, 'id' | 'name'> = {
  id: 0,
  name: 'Bob',
};

//Omit<T,K> 필요없는 property를 제외시키는 것
interface User {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

const admin: Omit<User, 'age' | 'gender'> = {
  id: 0,
  name: 'Bob',
};

//Exclude<T1,T2> T1의 타입중에서 T2와 겹치는 타입을 제거
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>; //string,number제거

//NonNullable<Type> null을 제외한 타입 생성 undefined도 포함
type T1 = string | null | undefined | void;
type T2 = NonNullable<T1>;
