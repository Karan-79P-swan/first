// let jsonRes = 
//     '{"fact":"Approximatrly 1/3 of cat owners think thier pets are able to read thier minds","length":78}';
// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//     name: "karan",
//     marks: 100,
//     roll_no: 109,
// }

// let url = "https://catfact.ninja/fact";

// fetch(url);

// fetch(url)
//     .then((response) => {
//         console.log(response);
//         response.json().then((data) => {
//             console.log(data);
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// <-------------Get Facts----------------->

// let btn = document.querySelector("button");
// let para = document.querySelector("p");
// let url2 = "https://dog.ceo/api/breeds/image/random";
// let img = document.querySelector("img");

// btn.addEventListener("click",async()=>{
//    let link = await getimage();
//    console.log(link);
//    img.setAttribute("src",link);
// })

// async function getimage(){
//     try{
//         let res = await axios.get(url2);
//         return res.data.message
 
       
//     } catch(e){
//         return "no image";
//     }
// }

// btn.addEventListener("click",async ()=>{
//     console.log("butn clicked");
//     let fact =await getfact();
//     para.innerText = fact;
//     console.log(fact);
// })
// let url = "https://catfact.ninja/fact";

// async function getfact(){
//     try{

//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(err){
        
//         return "No fact Found";
//     }
// }

// <-----------GET COLLAGES ----------->

let input = document.querySelector("input");
let btn = document.querySelector("button");

let url = "http://universities.hipolabs.com/search?name=";
btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    getcollages(country);
});

async function getcollages(country){
    try{
        let res = await axios.get(url + country);
        console.log(res);
    }catch(err){
        console.log("errer: ",err);
    }
}