function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User Data Loaded");
    }, 2000);
  });
}

async function showUser() {
  console.log("Loading...");
  
  let data = await getUser();
  
  console.log(data);
  console.log("Finished");
}

showUser();

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task 1 Done"), 2000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task 2 Done"), 1000);
  });
}

async function runTasks() {
  console.log("Start");

  let result1 = await task1();
  console.log(result1);

  let result2 = await task2();
  console.log(result2);

  console.log("All Tasks Completed");
}

runTasks();