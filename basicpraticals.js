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

