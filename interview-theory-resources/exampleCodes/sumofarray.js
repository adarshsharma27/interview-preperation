const array=[5,5,5,5,5];
let sum="";

for(i=0;i<array.length;i++){
if(!sum) sum=array[i]
else  sum = sum+ array[i]
}

console.log(sum)