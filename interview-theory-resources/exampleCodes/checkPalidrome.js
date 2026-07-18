function checkPalidrome(input){
  let originalString= input.split('').join();
  let stringReverse= input?.split('').reverse().join();
  console.log(originalString,stringReverse)
  if(originalString===stringReverse){
  console.log("Palindrome")
  }
  else
  console.log("Not Palindrome")
}