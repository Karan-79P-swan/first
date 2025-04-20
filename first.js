// console.log("You are Hacked");
// name = "KARAN";
// // console.log(b);
// age = 28;
// price = 33.423;
// X = null;
// Y = undefined;
// let a=90;
// const b=undefined;
// // console.log(a);

// let day = 9;
// switch (day) {
//     case 1: {
//         console.log("Sunday");
//         break;
//     }

//     case 2: {

//         console.log("Monday");
//         break;
//     }
//     case 3: {

//         console.log("Tuesday");
//         break;
//     }
//     case 4: {

//         console.log("Wednusday");
//         break;
//     }
//     case 5: {

//         console.log("Thursday");
//         break;
//     }
//     case 6: {

//         console.log("frieday");
//         break;
//     }
//     case 7: {

//         console.log("Saturday");
//         break;
//     }
//     default: {
//         console.log("Inavlid day");
//         break;
//     }
// }

// alert("this is alert");
// console.error("there is error");
// console.warn("there is warning");

// let name = prompt("Enter your name ");
// console.log(name);
// let str = "ilovecoading";

// console.log(str.replace("love","do"));

// let student = ["karan","aman","shradha","sunil","deepak"];

// let favrt = "Annabelle";
// let user = prompt("Guess Your Movie");
// while((user != favrt) && (user != "quit"))
// {   
//     user = prompt("Guess Again !");
// }
// if(user == favrt) {
//     console.log("Congratulations!!");
// }
// else if(user == "quit") {
//     console.log("You Exited !!");
// }

// let arr = [[1,2] , [3,4], [5,6]];
// for(let i=0;i<arr.length;i++) {
//     console.log(arr[i]);
// }

// function rollDice(){
//     let rdm = Math.floor(Math.random()*6)+1;
//     console.log(rdm);
// }

// rollDice();

function cal(a,b,c) {
    let avrage = (a+b+c)/3;
    return avrage;
}
function table(n) {
    for(let i=1;i<=10;i++) {
        mul = i*n;
        console.log(`${n} * ${i} = ${mul}`);
    }
}
// console.log(cal(3,3,cal(3,23,3)));

function sum(n) {
    let sum = 0;
    for(let i=1;i<=n;i++) {
        sum = sum + i;
    }

    return sum;
}

// console.log(sum(10000));


function concatS(str) {
    let result ;
    for(let i=0;i<str.length;i++) {
        result += string[i];
    }
    
    return result;
}

// let string = ["I","am","karan","kumar","Paswan"];
// console.log(concatS(string));

function multiple(func,n){
    for(let i=0;i<n;i++) {
        func();
    }
}

function great(){
    console.log("Hello");
}

// multiple(great,100);

function mult(request) {
    if(request == "odd") {
        let odd = function(n) {
           console,log(n%2 == 0);
        }
        return odd;
    } else if(request == "even") {
        let even = function(n) {
            console.log(n%2 == 0);
        }
        return even;
    } else {
        console.log("Wrong number");
    }
}

let request ="odd";
// mult(request);
const student = {
   name : "karan",
   age: 20,
   math: 98,
   phy: 84,

   avg(){
    let avg = (this.math+this.phy);
    console.log(avg);
   }
}

function avg(){
    let avg = (this.math+this.phy);
    console.log(this);
}

// console.log("hello");
// console.log("hello");
// let a=0;
// try{
//     console.log(a);
// } catch {
//     console.log("Error found");
// }
// console.log("hello");
// console.log("hello");
// console.log("hello");

// const zod = (a,b) => {
//     console.log(a**b);
// }

// console.log("Hi there");
// setTimeout( () => {
//     console.log("Babupara");
// },4000);
// console.log("Wellcome to")

// let square = (n) => n*n;
// console.log(square(12));

let id = setInterval (() => {
    console.log("Hello World! ");
},2000);

setTimeout(() =>{
    clearInterval(id);
    console.log("Programe is stoped!!")
},10000);