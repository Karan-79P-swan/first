// let smallimg = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallimg.length; i++) {
//     smallimg[i].src = "assets/spiderman_img.png";
//     console.log(`value for image ${i} is changed `);
// }
// console.log(document.querySelector("div a"));
let para = document.querySelector("p");
let links = document.querySelectorAll(".box a");

// for(let i=0;i<links.length;i++){
//     links[i].style.color = "green";
// }
for(i of links){
    i.style.color = "red";
}
