//Destructure name and city from the object below:
const person = {
  name: "ram",
  age: 15,
  add: {
    city: "fbd"
  }
};

const {name, add:{city}}=person

//  What will be the output?
let person = {
  name: "ram",
  age: 15,
  add: {
    city: "fbd"
  }
};

let employ = person;
employ.name = "shyam";
employ.add.city = "blb";