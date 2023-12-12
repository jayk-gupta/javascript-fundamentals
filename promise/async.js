const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "jay", age: 22 });
    } else {
      reject("Error: something went wrong");
    }
  }, 2000);
});

async function consumePromise() {
  try {
    const res = await promise;
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

// consumePromise();
//////////////////////////////////////////////////
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()
    console.log(data);
  } catch (err) {
    console.log('error occured');
  }
}

// getUsers()

 function getUsers2() {
   fetch("https://jsonplaceholder.typicode.com/users")
     .then(res => res.json())
     .then(data => console.log(data))
   .catch(err => console.log(err))

}

getUsers2()