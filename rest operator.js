let arr = [1, 2, 3, 4, 5];

let [a, b, ...rest] = arr;

console.log(a);     // 1
console.log(b);     // 2
console.log(rest);  // [3, 4, 5]
// rest in object
let user = {
  name: "Hema",
  role: "React Developer",
  experience: 2
};

let { name, ...others } = user;

console.log(name);    // Hema
console.log(others);  // { role: "React Developer", experience: 2 }

// rest in function
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));