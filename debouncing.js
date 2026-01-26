
let counter = 1; 
const getData = () =>{
    //calls an API  gets data
console.log("Fetching Data...",counter++);

}


// const debounce = function(fn,d){
//     let timer;
//  return function(){
//  let context = this;
//  args  =arguments;
// clearTimeout(timer);
//      timer = setTimeout(() => {
//         fn.apply(context,args)
//     }, d);
//  }
// }

// const betterFunction = debounce(getData,300)





// const throttle = (fn, delay) => {
//     let last = 0;
//     return function(...args) {
//         const now = Date.now();
//         if (now - last >= delay) {
//             fn.apply(this, args);
//             last = now;
//         }
//     };
// };
 
const betterFunction =throttle(getData,300)

