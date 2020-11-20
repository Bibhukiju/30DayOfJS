const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// // // basic promises
// add(1, 5)
//   .then((sum) => {
//     console.log("sum is " + sum);
//   })
//   .catch(() => {
//     console.log("test fail");
//   });
add(1, 3)
  .then((sum) => {
    console.log(sum);
    return add(sum, 4);
  })
  .then((sum2) => {
    console.log(sum2);
    return add(sum2, 1);
  })
  .then((sum3) => {
    console.log(sum3);
  })
  .catch((e) => {
    console.log(e);
  });
