// promises example
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("resolved");
  } else reject("rejected");
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Closures

function outerFunction() {
  let name = "adarsh";
  return function innerFunction() {
    console.log(name);
  };
}

const outer = outerFunction();
outer();

// Least occured elment in the string

function findLeastOccured(string) {
  const object = {};
  for (let char of string) {
    // console.log(char)
    if (object[char]) {
      object[char]++;
    } else object[char] = 1;
  }
  for (let char of string) {
    if (object[char] === 1) return char;
  }
}

console.log(findLeastOccured("abbcccdd"));

// object methods

const user = {
  id: 11,
  name: "adarsh",
  role: "developer",
};
console.log(user, "1");
// Object.freeze(user);
Object.seal(user);
user.salary = "12LPA";
console.log(user, "fz");

/// print 100 times array of elemenst
const array = [1, 2, 3, 4];

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < array.length; j++) {
    console.log(array[j]);
  }
}

// add with reduce method

const array = [1, 2, 3, 4];

const total = array.reduce((acc, cur) => acc + cur, 0);
console.log(total);

// Falttern nestd array without flat
const array = [1, 2, [3, 4, [5, 6, [7]]]];

function flat(array) {
  const faltternArray = [];
  for (let element of array) {
    console.log(element, "el");
    if (Array.isArray(element)) {
      console.log(element);
      faltternArray.push(...flat(element));
    } else {
      faltternArray.push(element);
    }
  }
  return faltternArray;
}

console.log(flat(array));

//Reverse String with reverse
function reverseString(string) {
  const reversedString = string.split("").reverse().join("");
  return reversedString;
}
console.log(reverseString("adarsh"));

//Reverse String without reverse

function reverse(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = `${reversedString}${string[i]}`;
  }
  return reversedString;
}
console.log(reverse("adamsharma"));

// check for palindrome

function checkPalindrome(string) {
  const reversedString = string.split("").reverse().join("");
  if (string === reversedString) {
    return "It is Palidrome";
  } else return "It is Not Palidrome";
}

console.log(checkPalindrome("madam"));

// check for anagram

function checkAnagram(string1, string2) {
  const sortedStrig1 = string1.split("").sort().join("");
  const sortedStrig2 = string2.split("").sort().join("");
  if (sortedStrig1 === sortedStrig2) {
    return "It is Anagram";
  } else return "It is Not Anagram";
}

console.log(checkAnagram("abc", "bca"));

// capital first letter of word

function capitalFirstLetter(string) {
  const capitalisedLetter = string.slice(0, 1).toUpperCase();
  return `${capitalisedLetter}${string.slice(1)}`;
}

console.log(capitalFirstLetter("ram"));

// Find Length of string without Length

function findLength(string) {
  let count = 0;
  for (let char of string) {
    if (char) count++;
  }
  return count;
}

console.log(findLength("adarsh"));
console.log(findLength("rohitsharma"));

// Find Longest String in the Array

function longestString(array) {
  let longestString = "";

  for (let string of array) {
    if (string.length >= longestString.length) longestString = string;
    else longestString = longestString;
  }
  return longestString;
}

console.log(longestString(["JS", "React", "HTML", "CSS"]));

// Count Words in sentence
// \s → whitespace
// + → one or more times
// \s+ → one or more consecutive spaces/whitespace characters
function longestString(string) {
  let wordArray = string.trim().split(/\s+/);
  let wordCount = wordArray.length;
  return wordCount;
}
console.log(longestString(" I Love India India   pp"));

// Reverse every words in sentence

function reverseWords(string) {
  const reversed = string
    .split(" ")
    .map((string) => string.split("").reverse().join(""));
  return reversed.join(" ");
}

console.log(reverseWords("hello my is adarsh"));

//  largest ,secondLargest

function largestNumber(array) {
  const sortedArray = array.sort((a, b) => a - b);
  let largest = sortedArray[sortedArray.length - 1];
  let secondLargest = sortedArray[sortedArray.length - 2];
  return { largest, secondLargest };
}
console.log(largestNumber([25, 10, 35, 5]));

//  Difference with largest and smallest Numbers

function differenceLargestSmallest(array) {
  const sortedArray = array.sort((a, b) => a - b);
  let largest = sortedArray[sortedArray.length - 1];
  let smallest = sortedArray[0];
  let diff = largest - smallest;
  return diff;
}
console.log(differenceLargestSmallest([50, 10, 35, 5]));

//  check are numbers in array are positive

function checkPostiveValue(array) {
  for (let element of array) {
    if (element <= 0) {
      return "Array contain negative number";
    }
  }
  return "all are postive";
}
console.log(checkPostiveValue([50, 10, 35, -5]));
console.log(checkPostiveValue([50, 10, 3]));

//  find missing number in array

function findMissingNumber(array) {
  const n = Math.max(...array);
  const actualSum = array.reduce((acc, cur) => acc + cur, 0);
  const expectedSum = (n * (n + 1)) / 2;
  return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 3, 5]));
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]));

//  find occurence of freaquency in array or string

function findOccurence(string) {
  const object = {};
  for (let char of string) {
    if (object[char]) {
      object[char]++;
    } else object[char] = 1;
  }
  return object;
}
console.log(findOccurence("abbbaccccd"));

//  remove duplicate from array with method and without method and duplicate items

const duplicateArray = new Set([1, 2, 1, 2, 4, 5]);
console.log([...duplicateArray]);

function removeDuplicate(array) {
  const uniqueArray = new Set();
  const duplicateItems = new Set();
  for (let element of array) {
    if (uniqueArray.has(element)) {
      duplicateItems.add(element);
    } else uniqueArray.add(element);
  }
  return {
    uniqueArray: [...uniqueArray],
    duplicateItems: [...duplicateItems],
  };
}
console.log(removeDuplicate([2, 2, 3, 3, 4, 4, 5, 6, 6, 7]));

//  remove duplicate and return unique value, duplicate value from  string

function removeDuplicateString(string) {
  let uniqueString = new Set();
  let duplicateString = new Set();
  for (let char of string) {
    if (uniqueString.has(char)) {
      duplicateString.add(char);
    } else uniqueString.add(char);
  }
  return {
    uniqueString: [...uniqueString].join(""),
    duplicateString: [...duplicateString].join(""),
  };
}

console.log(removeDuplicateString("adarsh"));

// Debounce
<input type="search" id="search" />;

let timer = "";

document.getElementById("search").addEventListener("input", (e) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log(e.target.value);
  }, 1000);
});
