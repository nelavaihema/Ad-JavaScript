let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data Loaded ✅");
  } else {
    reject("Error ❌");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });