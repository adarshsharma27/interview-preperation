// call ,apply bind
// call apply bind is used for function browwing in function and controlling thethis values


function getDetails(salary) {
  console.log(`${this.name} ${salary}`)
}

getDetails.call({ name: 'adarsh' }, '1500')

getDetails.apply({ name: 'virat' }, ['5000'])


const getAll = getDetails.bind({ name: 'rohit' }, '2000')
getAll();