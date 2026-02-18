//  without destrucring
let person = {
  name: "Hema",
  role: "Frontend Developer",
  exp: 2
};

let name = person.name;
let role = person.role;
let exp = person.exp;

console.log(name, role, exp);

//  with destrcuring

let person1 = {
  name1: "Hema",
  role1: "Frontend Developer",
  exp1: 2
};

let { name1, role1, exp1 } = person1;

console.log(name1, role1, exp1);


let user = {
  name: "Hema",
  role: "Frontend Developer",
  address: {
    city: "Chennai",
    pincode: 600001
  }
};
let { address: { city, pincode } } = user;

console.log(city, pincode);