const empty = {};

console.log(empty === {});
console.log(isEmptyObject(empty));
console.log();

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
