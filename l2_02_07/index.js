// function calculate(param1){
//     console.log("Calculate the BL");
//     param1();
// }

// var sumOfTwo = ()=>{
//     console.log("SUM OF TWO WORKING");
// }

// calculate(sumOfTwo);

//main higer order function
// function calculate(logicFunction, a,b){
//     return logicFunction(a,b);
// }
//logical function
// function add(a,b){
//     return a+b;
// }
// //logical function
// function sub(a,b){
//     return a-b;
// }

// console.log(calculate(add,3,5));
// console.log(calculate(sub,3,5));



// function printStudentName(logicFunction,name,fees){
//     return logicFunction(name,fees);
// }

// function studentData(name,fees){
//     return {name,fees};
// }

// var fee=0;
// function emi(fees){
//     fee = fees/10;
//     return fee;
// }

// function welcome(name,fees,emi){
//     return` Student name is ${name} with fees ${fees}  & emi of ${emi} `;
// }

// console.log(studentData("srishti",30000));
// console.log(emi(30000));
// console.log(welcome("srishti","30000",fee));


setTimeout(()=>{
    console.log("HELLO SETTIMEOUT");
},3000)

setInterval(()=>{
    console.log("SET INTERVAL");
},2000)
