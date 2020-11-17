const arr = [1, 2, 3, 4, 5];

arr.splice(
  arr.findIndex((num) => num === 2),
  1
);
console.log(arr);
