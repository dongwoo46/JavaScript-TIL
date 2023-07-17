// 다형성 (generic)

// type SuperPrint = {
//     (arr: number[]):void
//     (arr: boolean[]):void
//     (arr:string[]):void
//     (arr:(number|boolean)[]):void
// }

//Generic1
type SuperPrint = {
  <T>(arr: T[]): T;
};

// const superPrint: SuperPrint= (arr) =>{
//     arr.forEach(i => console.log(i))
// }

function superPrint<T>(a: T[]) {
  return a[0];
}

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(['a', 'b', 'c']);
const d = superPrint([1, 2, true, false]);

//Generic2
type SuperPrint = {
  <T, M>(arr: T[], b: M): T;
};

// type SuperPrint = <T,M>(a:T[],b:M) => T

// const superPrint: SuperPrint= (arr) =>{
//     arr.forEach(i => console.log(i))
// }

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4], 'x');
const b = superPrint([true, false, true], 1);
const c = superPrint(['a', 'b', 'c'], false);
const d = superPrint([1, 2, true, false], []);
