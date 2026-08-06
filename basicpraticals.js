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

console.log(x);
var x ;
x= 10 ;

hello();//entire fn is hoisted.
function hello(){
    console.log("hi");
}

he();// the variable declaration is hoisted , not the assigned fn.
const he = ()=>{
    console.log("hey");
    
}
