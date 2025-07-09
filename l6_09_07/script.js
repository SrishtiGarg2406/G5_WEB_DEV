// //way of getting the data from any link or url
 console.log("START SCRIPT");

// async function fetchDataProduct(){
//     const data = await fetch('https://dummyjson.com/products');
//     const finialData = await data.json();
//     console.log(finialData);
    
// }

// fetchDataProduct();

// const promiseByPransh = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I will complete the assignment by 1PM");
//     },3000)
// });

// async function checkAssignment(){
//     const assignData = await promiseByPransh;
//     console.log(assignData);
// }

// checkAssignment();

// const grandParent = document.getElementById('grandparent');
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');

// grandParent.addEventListener('click',()=>{
//     console.log("THIS IS THE GRANDPARENT DIV");
// },true)

// parent.addEventListener('click',()=>{
//     console.log("THIS IS THE PARENT DIV");
// },true)

// child.addEventListener('click',()=>{
//     console.log("THIS IS THE CHILD DIV");
// },true)


function admissionProcess(studentZone,studentCampus){
    console.log(`hi ${this.studentName}, from Class: ${this.studentClass}. Your Zone ${studentZone}: Campus: ${studentCampus}`)
}

const student1={
    studentName:"Srishti",
    studentClass:"G5"
}

const student2={
    studentName:"Jeenal",
    studentClass:"12"
}

admissionProcess.call(student1,"Zeta cluster","Punjab Campus");
admissionProcess.apply(student2,["Zeta cluster","Punjab Campus"]);
const b1=admissionProcess.bind(student1,"Zeta cluster","Punjab Campus");
b1();