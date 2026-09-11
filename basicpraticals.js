// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// const counter = outer();
// counter();
// counter();
// counter();

// function bankAccount(){
//     let balance = 2000;
//     return {
//         deposit(amount){
//             balance +=amount
//         }
//    ,     checkBalance (){
//             console.log(balance);

//         }
//     }
// }
// const ac = bankAccount()
// ac.deposit(1000);
// ac.checkBalance();

// console.log(x);
// var x ;
// x= 10 ;

// hello();//entire fn is hoisted.
// function hello(){
//     console.log("hi");
// }

// he();// the variable declaration is hoisted , not the assigned fn.
// const he = ()=>{
//     console.log("hey");

// }

// console.log('start');
// setTimeout(() => {
//     console.log('timer');

// }, 0);
// Promise.resolve().then(()=>console.log('resolved'))
// console.log('end');//First, start goes to the call stack and executes. Then setTimeout() is registered with the browser or Node.js APIs, and its callback waits until the timer finishes. Next, end executes, and the call stack becomes empty. The resolved Promise callback is placed in the microtask queue, which has higher priority than the callback (macrotask) queue. After the timer expires, the setTimeout callback is placed in the callback queue. The event loop checks whether the call stack is empty. It first moves the Promise callback from the microtask queue to the call stack and executes it. After the microtask queue is empty, it moves the setTimeout callback from the callback queue to the call stack and executes it.

// const promise = new Promise((res,rej) => {
//     let success = false;
//     if(success){
//         res("ok")
//     }else{
//         rej("not")
//     }
// });

// promise.then(re=>console.log(re)).catch(e=>console.log(e)
// );

// const user = new Promise((res)=>{
//     setTimeout(() => {
//         res("okey")
//     }, 2000);
// });
// user.then(data => console.log(data));

// Promise.resolve(5).then(num=>num+1).then(num=>num*2).then(re=>console.log(re))

// async function hello(){
//     return 'hello';
// }

// hello().then(re=>console.log(re));

// function fetch(){
//     return new Promise(res=>{
//         setTimeout(() => {
//             res('fetched')
//         }, 1000);
//     })
// };

// async function user() {
//    const data = await fetch();
//    console.log(data);

// }
// user();

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHi = function () {
//   console.log("Hi, I am " + this.name);
// };

// const p1 = new Person("John");
// const p2 = new Person("Alice");

// p1.sayHi();
// p2.sayHi();

// class Person{
//   constructor(name){
//     this.name = name
//   }
// greet(){
//   console.log('hi my name :'+ this.name)
// }
// }
// const p = new Person();
// p.greet();

// const numbers = [1, 2, 3, 4];

// const [first,...rest] = numbers;

// console.log(first);
// console.log(rest);

// const user = {
//   name: "John",
//   address: {
//     city: "Kochi"
//   }
// };

// const copy = {...user,address:{...user.address}};

// copy.address.city = "Delhi";

// console.log(user.address.city); // "Delhi"

// const arr = [1,2,3,4,5,6,7,8,9];

// const arrr=arr.reduce((acc,e)=>{
// return acc+e
// },10);
// console.log(arrr);

// const numbers = [1,2,3];
// numbers.forEach(num => {
//      return num*2;
// });
// console.log(numbers);

// const arr=[1,2,3,4];

// console.log(arr.slice(1,3));

// function removeDuplicates(arr){
//    return  [...new Set(arr)]
// }

// console.log(removeDuplicates([1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,0]));

// function countVowels(str){
//     const vowels = ["a","e","i","o","u"];
//     let count =0;
//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
// return count;
// };

// const products = ["Laptop", "Phone", "Mouse"];
// const [lapp,,phone] = products;
// console.log(lapp,phone);

// const arr1 = [1, 2, 3];
//  const arr2 = [...arr1,4,5]
// console.log(arr2);
// // [1, 2, 3, 4, 5]

// function calculateSum(...numbers) {

// return numbers.reduce((sum,n)=>{return sum+n},0)
// }
// console.log(calculateSum(10, 20));
// calculateSum(10, 20, 30, 40);

// const x = 10;

// if (true) {
//   const x = 20;
//   console.log(x);
// }

// console.log(x);

// function outer(){
//     let x =  0;
//    return function inner(){
// x++;
// console.log(x);

//     }
// }
//  const counter =outer();
//  counter();
//  counter();
//  counter();

// function greet(name,cb){
// console.log(name);
// cb();

// }
// function done(){console.log('done');
// }
// greet('vyasan',done )

// function calculate(a, b, operation) {

//    operation(a,b);

// }

// function add(a,b){console.log(a+b);
// }

// function subtract(a,b){console.log(a-b);
// }

// function multiply(a,b){console.log(a*b);
// }

// calculate(10, 5, add);
// calculate(10, 5, subtract);
// calculate(10, 5, multiply);

// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(`hi user vyasan;`);
//     }, 2000);
// });

// async function getUser() {
//     const user = await promise;

//     return user;
// }
// // getUser();

// async function fetch() {
//     try {
//         const user = await getUser();
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetch()


// function getPro(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(`produ are feche`)
//         }, 2000);
//     })
// }

// async function shwo(params) {
//     const produc = await getPro();
//     console.log(produc);
//     return produc;
// }
// shwo();;

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero");
//   }

//   return a / b;
// }

// try {
//   console.log(divide(10, 0));
// } catch (error) {
//   console.log(error.message);
// }

// function riskyTask() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Something went wrong!");
//     }, 2000);
//   });
// }

// async function run() {
//   try {
//     const result = await riskyTask();
//     console.log(result);
//   } catch (error) {
//     console.log("Caught error:", error);
//   }
// }

// run();
// // after 2 seconds prints: "Caught error: Something went wrong!"

const products = [
  { name: "Laptop", price: 60000, category: "electronics", stock: 5 },
  { name: "Phone", price: 30000, category: "electronics", stock: 0 },
  { name: "Shirt", price: 1500, category: "clothing", stock: 10 },
  { name: "Shoes", price: 3000, category: "clothing", stock: 3 }
];

 
function pro(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(products)
        }, 2000);
    })
}

async function fet(params) {
    try {
        console.log(`fetching products...`);
        
        const prod = await pro();
        console.log(prod);
        return prod
    } catch (error) {
        console.log(error);
    
        
    }
}
fet();