let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2);
//  add value

let arr = [1, 2, 3];

let arr3 = [...arr1, 4, 5];

console.log(arr2);

// merge array
let a = [1, 2];
let b = [3, 4];

let merged = [...a, ...b];

console.log(merged);

//  spread with object
let user1 = {
  name: "Hema",
  role: "React Developer"
};

let user2 = { ...user1 };

console.log(user2);