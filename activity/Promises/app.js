
// savetoDb("apna collage",
//      () => {
    //     console.log("Your data was saved");
    //     savetoDb("new data",
//          () => {
//         console.log("success2:saved");
//         savetoDb("karan",()=>{
//             console.log("success3:saved");

//         },()=>{
    //             console.log("success3: Not saved");
            
//         })
//     },
//      () => {
//         console.log("success2: not saved");

//     })

// }, () => {
//     console.log("Your data was not save");

// })

// function savetoDb(data) {

//     return new Promise((resolve,reject)=>{
//         let internet = Math.floor(Math.random() * 10) + 1;
//         if(internet >4){

//             resolve("Success: data was saved");
//         }
//         else{
            
//             reject("Falied: Data cannot save , weak connection !!");
//         }
//     });
   
// }

// savetoDb("Apna Collage")
// .then(()=>{
//     console.log("data1: saved");
//    return savetoDb("ksks")
  
// })
// .then(()=>{
//     console.log("data2: saved");
//     return savetoDb("iisudb");
// })
// .then(()=>{
//     console.log("data3: saved");
    
// })

// .catch(()=>{
//     console.log("data: rejected, weak connection");
// });

// let request = savetoDb("apna collage");

// request
// .then(()=>{
//     console.log("promise was resolve");
    
// })
// .catch(()=>{
//      console.log("promiss was rejected");
// }

// async function great(){
//     throw ("404 page not found");
//     return ("Hello!!");
// }

// great()
// .then((result)=>{
//     console.log("promise resolved");
//     console.log(result);
    
// })

// .catch((result)=>{
//     console.log("promise rejected");
//     console.log(result);
// })

// let demo =async ()=>{
//     return 5;
// }

function getnum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num;
            num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo(){
   await getnum();
   await getnum();
   await getnum();
   await getnum();
   await getnum();
   await getnum();
   await getnum();
   
}
