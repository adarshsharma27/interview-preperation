let input = ["apple", "apple", "banana", "orange", "orange", "orange"];
// let input="apple"
let countObject = {};

for (i = 0; i <= input.length - 1; i++) {
  let item = input[i];
  if (countObject[item]) {
    countObject[item]++;
  } else {
    countObject[item] = 1;
  }
}

console.log(countObject);
