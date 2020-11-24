const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers must b positive");
      }
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  const a = await add(1, 99);
  const b = await add(a, -100);
  return b;
};

doWork()
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
