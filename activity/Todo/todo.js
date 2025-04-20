let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let delet = document.querySelector(".delete");

btn.addEventListener("click",function(){
   let item = document.createElement("li");
   item.innerText = inp.value;
   
   let delet = document.createElement("button");
   delet.innerText = "delete";
   delet.classList.add("delete");
   item.appendChild(delet);
   
   ul.appendChild(item);
   inp.value = "";
});

ul.addEventListener("click",function(event){
   if(event.target.nodeName == "BUTTON"){
      let listItem = event.target.parentElement;
      listItem.remove();
   }
})

// let btns = document.querySelectorAll(".delete");
// for(dlt of btns){
//    dlt.addEventListener("click",function(){
//       let par = this.parentElement;
//       console.log("delete");
//       par.remove();
//    })
// }