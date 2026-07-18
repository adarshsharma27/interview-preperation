function findSecondLargest(array) {
  const sortedArray = array.sort((a, b) => b - a);
  return sortedArray[1];
}

console.log(findSecondLargest([20, 1, 33, 40, 55]));
