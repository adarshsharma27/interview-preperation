function findMissingNumber(array){
    const n= Math.max(...array)
    let expectedSum =  (n*(n+1))/2
    let totalSum= array.reduce((acc,cur)=>acc+cur,0)
    console.log(expectedSum,totalSum)
    let msNumber=expectedSum-totalSum
    console.log(msNumber)
}

findMissingNumber([1, 2, 4, 5])
findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12])
findMissingNumber([1, 2, 3, 4, 6, 7,8])