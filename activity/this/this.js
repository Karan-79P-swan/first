// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

let btn = document.querySelector("button");
let ipt = document.querySelector("input");

btn.addEventListener("click",function(event){
    console.log(event);
});

ipt.addEventListener("keyup",function(){
    // console.log("button pressed");
    console.log("key = ",event.key);
    console.log("code = ",event.code);
});
// function setcolor() {
//     console.dir(this.innerText);
//     this.style.backgroundcolor = "blue";
// }
// btn.addEventListener("click", setcolor);
// h1.addEventListener("click", setcolor);
// h3.addEventListener("click", setcolor);
// p.addEventListener("click", setcolor);