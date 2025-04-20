// let para1 = document.createElement("p");
// para1.textContent = "Hey I'm Blue .Can you give me glue";
// document.querySelector("body").append(para1);

// para1.classList.add("red");

// let h3 = document.createElement("h3");
// h3.textContent = "I'm a blue h3!";
// document.querySelector("body").append(h3);
// h3.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.textContent = "I'm in a div";
// para2.textContent = "ME TOO!";
// div.append(h1);
// div.append(para2);
// div.classList.add("style");

// document.querySelector("body").append(div);

let btns = document.querySelectorAll("button");
for (btn of btns) {
    // btn.onmouseenter = function say() {
    //     console.log("OK");
    //     // alert("Button clicked");
    // }

    btn.addEventListener("dblclick",function(){
        console.log("you clicked double")
    });
    // btn.addEventListener("click",sayhello);
 
}
function sayhello(){
    alert("Hello!!");
}

function sayName(){
    alert("Karan Paswan");
}