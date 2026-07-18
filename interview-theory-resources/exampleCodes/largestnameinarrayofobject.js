const data = [
  {
    id: 0,
    name: "Ash",
  },
  {
    id: 0,
    name: "rohit",
  },
  {
    id: 0,
    name: "abhisheksharma",
  },
  {
    id: 0,
    name: "jack",
  },
  {
    id: 0,
    name: "viratkholi",
  },
];

let result = [];
for (i = 0; i < data.length; i++) {
  result.push(data[i]?.name);
}
console.log(result);
let largest = 0;
let value = "";
for (i = 0; i < result.length; i++) {
  const length = result[i]?.length;
  if (largest < length) {
    largest = length;
    value = result[i];
  }
}
console.log(value);
