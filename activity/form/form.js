let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
    // let input= document.querySelector("#inp");
    // let pass= document.querySelector("#pas");
    // // console.dir(input);
    // console.log("username is - ",input.value);
    // console.log("password is - ",pass.value);
    // // alert("form submitted");
    // alert("")
// })

let user = document.querySelector("#user");
let p = document.querySelector("p");


// user.addEventListener("change",function(){
//     console.log("input changed");
//     console.log("final value",user.value);
// });
user.addEventListener("input",function(){
    p.innerText = user.value;
    
    // console.log("input changed");
    console.log(user.value);
});