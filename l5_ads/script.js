 console.log("START SCRIPT");

// const myPromise = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve("Pransh will not get the Placement");
//     },3000);
// });

// myPromise
// .then((res)=>console.log(res))
// .then(()=>setTimeout(()=>{
//     console.log("PRANSH PARTY");
// },2000))
// .then(()=> setTimeout(()=>{
//     console.log("PRANSH WILL WORK");
// },4000))
// .then(()=> setTimeout(()=>{
//     console.log("PRANSH GO LAY OUT");
// },1000))
// .catch((err)=>console.log(err));

// console.log(myPromise);


// function pranshPlacemenet(placementStep,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Pransh will get the placement"+ placementStep);
//             console.log("Pransh will get the placement"+ placementStep);
//         },delay);
//     });
// }

// pranshPlacemenet("PRANSH GOT THE PLACEMENT",5000)
// .then(()=>pranshPlacemenet("Party Time",3000))
// .then(()=>pranshPlacemenet("Pransh Woeking",4000))
// .then(()=>pranshPlacemenet("Layoff",1000))
// .catch((err)=>console.log(err));

const myPromise1 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        reject("placement1");
        console.log("placement1")
    },3000);
});

const myPromise2 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        reject("Placement2");
        console.log("Placement2");
    },4000);
});

const myPromise3 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        reject("PLACEMENT3");
        console.log("PLACEMENT3");
    },2000);
});

const myPromise4 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        reject("Placement4");
        console.log("Placement4");
    },5000);
});
/*IF ALL RESOLVED: TB KYA OUTPUT HAI = all
IF ALL REJECTED: TB KYA OUTPUT HAI = allSettled
SIRF 1 REJECCTED: TB KYA OUTPUT HAI = allSettled
Sirf 1 resolve : tb kya output hai = any**/

// Promise.all([myPromise1,myPromise2,myPromise3,myPromise4]);
// Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4]);
Promise.any([myPromise1,myPromise2,myPromise3,myPromise4]);
// Promise.race([myPromise1,myPromise2,myPromise3,myPromise4]);