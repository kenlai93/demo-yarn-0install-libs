export function sum(arr: number[]) {
  return arr.reduce((acc, cur) => acc + cur, 0)
}

export function average(arr: number[]) {
  return sum(arr) / arr.length
}
