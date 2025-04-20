// let arr = [1,2,3,4,5,6,7,8];

// let print = function (el) {
//     console.log(el);
// }

// arr.forEach( (el) => {
//     console.log(el);
// });

// let student =[{name:"karan",
//     marks:23,
// },{
//     name:"sunil",
//     marks:90,
// },{
//     name:"deepak",
//     marks:110,
// }];

// student.forEach((ss) => {
//     console.log(ss.marks,ss.name);
// });

// let arr=[1,2,3,4];
// let double=arr.map((el) => {
//     return(el*2);
// });

// let nums =[1,2,3,4,5,6,7,8,9,0,9,8,8,77,6,5,43,44,22,56];
// let newnums = nums.filter((el)=>{
//     return (el%2 == 0);
// });

// let arr = [1,2,23,43,444444,554,3,2,334,,5,43,555,7898,67,11,3,4];
// let newarr=arr.every((el) => el%2 == 0);
// let finalvalue = arr.reduce((res,el) => {
//     console.log(res);
//     return res+el;
// });
// console.log(

// )
// let max = -1;
// for(let i=0;i<arr.length;i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// let max = arr.reduce((max,el) => {
//     if(max < el){
//         return el;
//     } else{
//        return max;
//     }
// });

// console.log(max);
// let arr=[20,30,40,5,50];
// let ans=arr.every((el) => {
//     return (el%10 == 0);
// });
// console.log(ans);
// let min =arr.reduce((min,el)=>{
//     if(min>el){
//         return el;
//     } else{
//         return min;
//     }
// });
// console.log(min);

// let arr= [2,3,4,6,7,8,9,7,5,4433,5];
// let min = Math.min(...arr);
// // console.log(...arr);
// let names = ["karan" ,"sunil","deepak","sachin"];
// let [winner,runnerup,...runnerup2] = names;
const student = {
    name : "karan",
    rollno: 109,
    sub:["math","english","hindi","science"],
    username: "karannnn",

}

let {name,username:user,city: lucation="Delhi",sub}=student;