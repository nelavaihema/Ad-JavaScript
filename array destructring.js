//  without destrucrin
// let arr = ["Hema", "React", 2];

// let name = arr[0];
// let skill = arr[1];
// let exp = arr[2];

console.log(name, skill, exp);
//  with destrucring
let arr = ["Hema", "React", 2];

let [name, skill, exp] = arr;

console.log(name, skill, exp);

let arr1 = ["Hema"];

let [name1, skill1 = "JavaScript"] = arr;

console.log(skill); // JavaScript