let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    // let h3 = document.querySelector("h3");
    // let randomcolor = getrandomcolor();
    // h3.innerText = randomcolor;

    // let div = document.querySelector("div");
    // div.style.backgroundColor = randomcolor;
    this    .style.backgroundColor = "blue";
   console.log(this);
});
let p = document.querySelector("p");
p.addEventListener("click",function(){
    console.log("its karan");
})

function getrandomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`
    return color;

}