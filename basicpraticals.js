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

function bankAccount(){
    let balance = 2000;
    return {
        deposit(amount){
            balance +=amount
        }
   ,     checkBalance (){
            console.log(balance);
            
        }
    }
}
const ac = bankAccount()
ac.deposit(1000);
ac.checkBalance();
