// Promises

const promise= new Promise((resolve,reject)=>{

let suceess=suceess
if(suceess)
resolve("Promise Success")
else 
reject("Promise failure")

})

promise.then((promise)=>console.log(promise)).catch((promise)=>console.log(promise)).finally(()=>console.log('finally'))
