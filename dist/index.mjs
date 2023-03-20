// src/utils/mathUtils.ts
function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
function average(arr) {
  return sum(arr) / arr.length;
}
function median(arr) {
  if (arr.length % 2 == 0) {
    const upper = Math.floor(arr.length / 2);
    const lower = Math.ceil(arr.length / 2);
    return (arr[upper] + arr[lower]) / 2;
  }
  return arr[arr.length / 2 - 1];
}
export {
  average,
  median,
  sum
};
