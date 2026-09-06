const pi = 3.14;
pi = 3.142;
const name = {"fname":"Jon","lname":"Doe"}
name.fname = 'Jane'

const means the variable cannot be reassigned after declaration.
For primitive values (number, string, boolean), the value cannot be changed.
For objects and arrays, the reference cannot change, but their properties or elements can be updated.


console.log(0.1 + 0.2); -->0.3000
console.log(0.1 + 0.2 == 0.3); false
console.log(0.4 + 0.5); 0.9000


Floating-point numbers in JavaScript (Interview Points):

JavaScript stores numbers using the Number data type.
All numbers (integers and decimals) are stored internally as 64-bit IEEE 754 floating-point values.
Floating-point representation uses binary format, so some decimal values cannot be stored exactly.
This can cause small precision errors during calculations.

Example:

0.1 + 0.2 // 0.30000000000000004
Avoid direct comparison (===) for decimal values.
Use methods like toFixed() or a tolerance value (Number.EPSILON) for accurate comparisons.





out of the two example which is the correct way is to return an object in JS

return {
    bar: "hello"
};

return
{
    bar: "hello world"
};


let x = 10;
const y = '20';

x+y -->1020
x-y -->-10
undefined + 1 --> NAN




import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function App() {
    const check = 0;
        return (
            <div className="App">
                { 0 && <span>Hello</span> }
            </div>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



What is the difference between useEffect and useLayoutEffect in React?

Difference between functional and class component in React?

Difference Between Props and State in React?

What 2 approaches/ways data can be passed between react components. 
Not using any State management Libraries like Redux, Recoil

Parent to child – props
Child to parent –  callback function
between Siblings – lifting state up


IIFE
Closure
Hoisting



const myName = 'Jim'; // Line 1  Type Error
if(myName){ // Line 2
  myName = 'Joe'; // Line 3
}
const myName = 'Jim'; // Line 1   Reference Error
if(myName){ // Line 2
  myName = 'Joe'; // Line 3
  let myName = 'Jeff'; // Line 4
}
const myName = 'Jim'; // Line 1  Syntax Error
if(myName){ // Line 2
  myName = 'Joe'; // Line 3
  var myName = 'Jeff'; // Line 4
}

// Same name + same scope = ❌ not allowed.SyntaxError: Identifier 'myName' has already been declared



/// Final Round
const initialState = {
  users: [
    { id: 1, name: "John", active: true },
    { id: 2, name: "Mary", active: false },
    { id: 3, name: "David", active: true }
  ],
  loading: false,
  error: null
};

// what causes unnecessary re render

const result = data.map(async item => {
  return await processItem(item);
});

// issue which return value