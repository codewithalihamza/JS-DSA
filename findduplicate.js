let arr1 = [5, 7, 9, 11, 10, 4];
let arr2 = [4, 7, 6, 9, 11];
let arr3 = [];
let arr4 = [];

for (let i = 0; i < arr1.length; i++) {
  let found = false;
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      arr3.push(arr2[j]);
      found = true;
      break;
    }
  }
  if (!found) {
    arr4.push(arr1[i]);
  }
}

console.log(arr3);
console.log(arr4);
let arr5=[...arr3,...arr4];
console.log(arr5)