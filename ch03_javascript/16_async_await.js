async function myFunction() {
  try {
    const result = await asyncFunction();
    console.log("Success! Result is: " + result);
  } catch (error) {
    console.error(error);
  }
}

function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = Math.random();
      if (result > 0.5) {
        resolve(result);
      } else {
        reject(new Error("Something went wrong! Result is: " + result));
      }
    }, 1000);
  });
}

myFunction();
