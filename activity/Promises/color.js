let h1 = document.querySelector("h1");

function changecolor(color){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            if(num < 3){
                reject("Promise:: rejected");
            }
            h1.style.color = color;
            console.log(color);
            resolve("color changed");
           
        },1000);
    });
    
}

async function demo(){
    try{

        await changecolor("red");
        await changecolor("blue");
        await changecolor("green");
        await changecolor("pink");
        await changecolor("orange");
    } catch(err){
        console.log("Error Found");
        console.log(err);
    }

    let a =8;
   console.log("Toatal is ",a+2);
   
}

demo();