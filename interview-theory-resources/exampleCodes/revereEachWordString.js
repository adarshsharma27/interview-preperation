function reverseWords(string) {
  const reversed = string
    .split(" ")
    .map((string) => string.split("").reverse().join(""));
  return reversed.join(" ");
}

console.log(reverseWords("hello my is adarsh"));
