export function sum(arr: number[]) {
  return arr.reduce((acc, cur) => acc + cur, 0)
}

export function average(arr: number[]) {
  return sum(arr) / arr.length
}

export function median(arr: number[]) {
  if (arr.length % 2 == 0) {
    const upper = Math.floor(arr.length / 2)
    const lower = Math.ceil(arr.length / 2)
    return (arr[upper] + arr[lower]) / 2
  }
  return arr[arr.length / 2 - 1]
}
