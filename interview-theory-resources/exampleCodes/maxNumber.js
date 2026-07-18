const array = [1, 2, 4, 5, 100, 88];

let maxNumber = "";

for (i = 0; i < array.length; i++) {
  if (maxNumber == "") maxNumber = array[i];
  else if (array[i] > maxNumber) {

    maxNumber = array[i]
  }

}

console.log(maxNumber)