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

const promise = new Promise((res,rej) => {
    let success = false;
    if(success){
        res("ok")
    }else{
        rej("not")
    }
});

promise.then(re=>console.log(re)).catch(e=>console.log(e)
);

const user = new Promise((res)=>{
    setTimeout(() => {
        res("okey")
    }, 2000);
});
user.then(data => console.log(data))