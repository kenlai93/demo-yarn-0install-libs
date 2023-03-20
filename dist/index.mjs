// src/utils/mathUtils.ts
function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
function average(arr) {
  return sum(arr) / arr.length;
}
export {
  average,
  sum
};
