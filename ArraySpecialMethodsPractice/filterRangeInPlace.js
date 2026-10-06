function filterRangeInPlace(arr, a, b) {
  const filtered = arr.filter((num) => num >= a && num <= b);
  arr.splice(0, arr.length, ...filtered);
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr);
