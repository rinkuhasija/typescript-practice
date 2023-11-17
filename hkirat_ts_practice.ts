let a: String | number = 10;
console.log(a);

interface Doctors {
  name: String;
  id: Number;
}

function getFirstEle(arr: NumberArr): number {
  return arr[0];
}

const ele = getFirstEle([3, 5, 6]);
console.log(ele);

interface User {
  name: string;
  age: number;
}
type users = User[];

type NumberArr = number[];

//array of number or string

function getFirstEle1(arr: (number | string)[]) {
  return arr[0];
}

const ele1 = getFirstEle1([3, "Rinku", "Hasija", 5]);
console.log(ele1);

// template typescript

function getItemFirst<T>(arr: T[]): T {
  return arr[0];
}

const ele2 = getItemFirst([1, 2, 3]);
const ele3 = getItemFirst(["rInku", "hasija", "three"]);
const lowerEle3 = ele3.toLowerCase();
console.log(lowerEle3);


