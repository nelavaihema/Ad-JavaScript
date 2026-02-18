console.log("Start");

setTimeout(() => {
  console.log("Hema");
}, 2000);

console.log("End");
// set timeinterval

let count = 0;

let interval = setInterval(() => {
  count++;
  console.log(count);

  if (count === 5) {
    clearInterval(interval);
  }
}, 1000);