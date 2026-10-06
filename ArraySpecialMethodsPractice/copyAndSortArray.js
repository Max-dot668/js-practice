function copySorted(arr) {
  const sortedArr = arr.toSorted();
  return sortedArr;
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);
