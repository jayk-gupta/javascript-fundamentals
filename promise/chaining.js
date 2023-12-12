
const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "jay", age: 22 });
    } else {
      reject("Error: something went wrong");
    }
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((name) => console.log(name))
  .catch((err) => console.log(err))
  .finally(() => console.log('The promise is resolved/rejected'))
