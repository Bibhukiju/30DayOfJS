const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("err");
    resolve([1, 2, 3]);
  }, 2000);
});

doWorkPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
//                         fulfilled
//                       /
// Promise  =--pending--
//                       \ rejected
