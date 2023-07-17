type Player<E> = {
  name: string;
  extraInfo: E;
};
type NicoExtra = {
  favFood: string;
};

// type NicoPlayer = Player<NicoExtra>
type NicoPlayer = Player<{ favfood: string }>;

const nico: NicoPlayer = {
  name: 'nico',
  extraInfo: {
    favfood: 'kimchi',
  },
};

// const nico : Player<{favFood:string}> = {
//     name: "nico",
//     extraInfo:  {
//         favFood:"kimchi"
//     }
// }

const lynn: Player<null> = {
  name: 'lynn',
  extraInfo: null,
};

type A = Array<number>;

let a: A = [1, 2, 3, 4];

function printAllNumbers(arr: Array<number>) {}
