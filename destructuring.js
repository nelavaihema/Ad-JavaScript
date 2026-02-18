// const data=[10,20,[3,4]];
// const[one,two,three]=data
// console.log(one,two,three)

const data = [10, 20, [3, 4]];

const [one, two, [three, four]] = data;

console.log(one, two, three, four);