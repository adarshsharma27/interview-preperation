



const users = [
  { id: 1, name: "Alice", dept: "IT", salary: 50000, skills: ["JS", "React"] },
  { id: 2, name: "Bob", dept: "HR", salary: 40000, skills: ["Recruiting"] },
  { id: 3, name: "Charlie", dept: "IT", salary: 70000, skills: ["JS", "Node"] },
  { id: 4, name: "David", dept: "Finance", salary: 60000, skills: ["Excel"] },
  { id: 5, name: "Eve", dept: "IT", salary: 45000, skills: ["React"] },
];
const result={}

for(i=0;i<users.length;i++){
  const user=users[i]
  const deptKey= users[i].dept
  // console.log(deptKey)
  
  if(!result[deptKey]){
    result[deptKey]={}
  }
  for(j=0;j<user.skills.length;j++){  
    const skillKey= user.skills[j]
    console.log(skillKey)
    if(!result[deptKey][skillKey]){
    result[deptKey][skillKey]={employees: [], totalSalary: 0,         count: 0}
  }
   result[deptKey][skillKey].employees.push(user.name);
    result[deptKey][skillKey].totalSalary += user.salary;
    result[deptKey][skillKey].count += 1;
  }
}
for (const dept in result) {
  for (const skill in result[dept]) {
    const info = result[dept][skill];
    info.avgSalary = info.totalSalary / info.count;
    delete info.totalSalary;
    delete info.count;
  }
}


console.log(result)







// Q1

//  const user1 = { id: 1, name: "Suresh", dept: "IT", salary: 50000, skills: ["JS", "React"] }
 
//  const user2 = user1;
//  const user3 = { ...user1 };
 
// user2.name = "Dev";
// user3.name = "Mohit";

// console.log(user1.name, user2.name, user3.name); 
//  "Dev","Dev","Mohit"

// user2.skills.push('Anugular JS');
// JS", "React,Anugular JS
// user3.skills.push('Vue JS');

// "JS", "React",Vue JS

// console.log(user1.skills.length, user2.skills.length, user3.skills.length); 

// 4,4,4

// Q2

// 📝 Problem: Department & Skill Report with Salaries

// Input Example:

// const users = [
//   { id: 1, name: "Alice", dept: "IT", salary: 50000, skills: ["JS", "React"] },
//   { id: 2, name: "Bob", dept: "HR", salary: 40000, skills: ["Recruiting"] },
//   { id: 3, name: "Charlie", dept: "IT", salary: 70000, skills: ["JS", "Node"] },
//   { id: 4, name: "David", dept: "Finance", salary: 60000, skills: ["Excel"] },
//   { id: 5, name: "Eve", dept: "IT", salary: 45000, skills: ["React"] },
// ];


// Expected Output:
// {
//   IT: {
//     JS: {
//       employees: ["Alice", "Charlie"],
//       avgSalary: 60000,
//     },
//     React: {
//       employees: ["Alice", "Eve"],
//       avgSalary: 47500
//     },
//     Node: {
//       employees: ["Charlie"],
//       avgSalary: 70000
//     }
//   },
//   HR: {
//     Recruiting: {
//       employees: ["Bob"],
//       avgSalary: 40000
//     }
//   },
//   Finance: {
//     Excel: {
//       employees: ["David"],
//       avgSalary: 60000,
//     }
//   }
// }
