function camelize(str) {
  str = str.split("-");
  const firstWord = str.shift();
  let mapped = str.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return firstWord + mapped.join("");
}

console.log(camelize("hello-there-my-dear-friend"));
