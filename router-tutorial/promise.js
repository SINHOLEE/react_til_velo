function increase(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = num + 10;
      if (result > 50) {
        const error = new Error("the number is too big");
        reject(error);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}
console.log("start");
let b = 0;
increase(10)
  .then((ret) => {
    console.log(ret);
    return increase(ret);
  })
  .then((ret) => {
    console.log(ret);
    return increase(ret);
  })
  .then((ret) => {
    console.log(ret);
    return increase(ret);
  })
  .then((ret) => {
    console.log(ret);
  });

const getPromise = async (num) => {
  let ret = await increase(num);
  console.log(ret);
  ret = await increase(ret);
  console.log(ret);
  ret = await increase(ret);
  console.log(ret);
  ret = await increase(ret);
  console.log(ret);
  //   ret = await increase(ret);
  //   ret = await increase(ret);
  return ret;
};
(async () => {
  console.log("start2");
  console.log(await getPromise(5));
})();
