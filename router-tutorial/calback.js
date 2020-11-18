function increase(num, calback) {
  setTimeout(() => {
    const result = num + 10;
    if (calback) {
      calback(result);
    }
  }, 1000);
}
console.log("start");
increase(10, (ret1) => {
  console.log(ret1);
  increase(ret1, (ret2) => {
    console.log(ret2);
    increase(ret2, (ret3) => {
      console.log(ret3);
      console.log("end");
    });
  });
});
