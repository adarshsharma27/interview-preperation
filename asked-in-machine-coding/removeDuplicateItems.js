const array=[1,2,3,2,4,4,5]
// const array=[1,2,3,2,4,4,5,2,2] use set for both items and duplicateItems
function findDuplicate(array){
  const items= new Set()
  const duplicateItems=[]
     for(let i=0;i<array.length;i++){
      if(items.has(array[i])){
        duplicateItems.push(array[i])
      }
      else items.add(array[i])
     }
return duplicateItems
}

console.log(findDuplicate(array))