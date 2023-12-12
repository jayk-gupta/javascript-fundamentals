const promise = new Promise(function (resolve, reject) {
  console.log('lottery drawing');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You win");
    } else {
      reject(new Error("you lost!!"));
    }
  },2000);
});

promise.then((res) => console.log(res)).catch((err) => console.error(err));
