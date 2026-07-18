const checkEmptyObject = (objectTest) => {
  if (Object.keys(objectTest).length === 0) {
    console.log('Object is Empty')
  }
  else console.log('Object is not Empty')


}

checkEmptyObject({ })
