function  findMissing(array){
for(i=1;i<=array.length+1;i++){
  if(!array.includes(i)) return i
}
}
console.log(findMissing([1,2,3,5]))