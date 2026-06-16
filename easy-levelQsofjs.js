// console.log(typeof null)
// console.log(Object.prototype.toString.call(null))
// console.log(typeof new Date)
// console.log(Object.prototype.toString.call(new Date))

//   let num = "10"
// console.log(Number(num))
// console.log(num)

// const arr = [1,2,3,4,5,6,7,8,9,0];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]," is an even number.")
//     }else{
//         console.log(arr[i]," is an odd number.")

//     }
// }

// let result=[]
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         result.push(arr[i]);
//     }
// }
//  console.log(result)

// let num = 889;
// if(num%2==0){
//     console.log("even number",num)
// }else{
//      console.log("odd number",num)
// }

// console.log(num%2==0 ? `even number ${num}`: `odd number is ${num}`);

// console.log(num%2 ==0 ? `${num} is even ` : `${num} is odd`)

// console.log(0===false)
// console.log(null === undefined)

// let num1=30;
// let num2 =3;

// if(num1>num2){
//     console.log(`${num1} is largest`)
// }else if(num2>num1){
//  console.log(`${num2} is largest`)
// }else{
//     console.log(`${num1} and ${num2} are equal `)
// }

// console.log(num1>num2 ? "num1 is largest" : num2>num1 ? "num2 is largest" : "both are equal")

// console.log(Math.max(num1,num2))

// @Check if a person is eligible to vote (age ≥ 18).

// const age = 3;
// if(age>=18){
//     console.log(`he is eligible to vote`)
// }else if(age>10){
//         console.log(`he is not eligible to vote`)
// }else{
//         console.log(`he is not eligible to vote , because he is a small child`)

// }

// console.log(age>=18 ? "eligible to vote" : age>10 ? "not eligible to vote" : "you are a child")

// @Print numbers from 1 to 10 using a for loop.

//  for(let i=1;i<=10;i++){
//      console.log(i)
//  }

// @Print all even numbers between 1 and 20.

// for(let i=;i<=20;i++){
//     if(i%2==0){
//         console.log(`${i} is even.`);
//     }
// }
// for(let i = 2;i<=20;i+=2){
//     console.log(i)
// }

// @Find the sum of numbers from 1 to 100.
// let sum=0;
// for(let i =1;i<=200;i++){
//     sum+=i;
//     }
// console.log(sum);
// const summ = (100*(100+1))/2;
// console.log(summ)

// for(let i =10;i>=1;i--){
//     console.log(i)
// }

// @Reverse a number using a loop.
// let num = 12345;
// let reverse = 0 ;
// while(num>0){
//     let digit=num%10;
//     reverse =(reverse *10)+digit;
//     num = Math.floor(num/10);
// }
// console.log(reverse);

// @Write a function that adds two numbers and returns the result.

// const add =(a,b)=> a+b;
// console.log(add(2,3));

// @What is the difference between a function declaration and a function expression?
// console.log(add( ));
//   function add(a,b){
//     return "kdkkd"
// }

// const add = (a,b)=>a+b;
// console.log(add(1,11))

//  @Write an arrow function to multiply two numbers.

// const multiply = (a,b)=> a*b;
// console.log(multiply(2,2))

// @Create a function that checks whether a string is a palindrome.
// function isP(str){
//     str=str.toLowerCase();
//     for(let i = 0 ; i<str.length/2;i++){
//         if(str[i]!==str[str.length-1-i]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isP("achafn"))

// @Create an array of 5 numbers and print all elements.

// const array = [1,2,3,4,5];
// array.push(6);
// array.shift()
//     console.log(array);
// for(i=0;i<array.length;i++){
// }

// @Find the largest number in an array.
// const array = [14,22,36,74,85,96];
// let larg = array[0];
// for(i=1;i<array.length;i++){
//     if(array[i]>larg){
//         larg =array[i]
//     }
// }

// const larg=array.reduce((max,num)=> num>max ? num:max )
// console.log(larg)

// @Reverse an array without using reverse().

//   const a = [14,22,36,74,85,96];
// const b = a.reverse();
// console.log(b)

//   let rev=[];
//   for(i=array.length-1;i>=0;i--){
//       rev.push(array[i])
//   }

// let left = 0;
// let right =a.length-1;
//  while(left<right){
// let temp = a[left];
// a[left] = a[right];
// a[right]= temp;
// left++;
// right--;
//  }

// for(i=0;i<a.length/2;i++){
//   let temp = a[i];
//   a[i]= a[a.length-1-i];
//   a[a.length-1-i] = temp;}
//   console.log(a)

// function isA(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     let count = {};
//     for (let ch of str1) count[ch] = (count[ch] || 0) + 1;
//     console.log("Count:", count);
//     for (let ch of str2) {
//         if (!count[ch]) return false;
//         count[ch]--;
//     }
//     return true;
// }
// console.log(isA("listen", "silteln"));

// const obj = {
//     name:"vyasan",
//     address:{
//         state:"kerala",
//         country:"india"
//     }
// }

// let clone = structuredClone(obj)
// clone.address.state= "bengal"
// console.log(obj)

// console.log(clone)m

// function deepcopy(obj){
//     if(obj===null || typeof obj !== "object") return obj;
//     let copy  = Array.isArray(obj)  ? [] : {};
//     for(let key in obj){
//         copy[key] = deepcopy(obj[key])
//     }
//     return copy ;
// }

// const ob = {
//     name:{ na:"rathi",me:"suhhu"},
//     age:3,city:"india"
// }

// let c = deepcopy(ob);
// c.name.na =8;
// console.log(ob)
// console.log(c)

// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "admin" },
//   { name: "David", role: "user" }
// ];

//  function groupBy(arr,key){
//      const map = new Map()

//      for(let item of arr){
//          const value = item[key]
//          if(!map.has(value)){
//              map.set(value,[])
//          }
//      map.get(value).push(item);

//      }
//      return map;

//  }

//  function groupBy(arr,key){
//      return arr.reduce((acc,obj)=>{
//          const value = obj[key];
//         if(!acc[value]){
//             acc[value]= [];
//         }

//         acc[value].push(obj);
//         return acc;
//      },{})
//  }
// function groupBy(arr, key) {
//   return arr.reduce((acc, obj) => {
//     const value = obj[key];

//     if (!acc[value]) {
//       acc[value] = [];
//     }

//     acc[value].push(obj);
//     return acc;
//   }, {});
// }

// console.log(groupBy(users, "role"));

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 30 }
// ];

//  users.sort((a,b)=> b.name.localeCompare(a.name));
// console.log(users)

// const sorted = [...users].sort((a,b)=>a.age - b.age);
// console.log(sorted);

// function RE(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("resolved")
//         },2000)
//     })
// }
// async function run(){
//     const re = await RE();
//     console.log(re);

// }
// run()
// RE().then(re=>console.log(re))

// function debounce(fn,delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer=setTimeout(()=>{
//             fn.apply(this,args)
//         },delay)
//     }
// }

// function throttle(fn,delay){
//     let lastcall = 0;
//     return function(...args){
//         const now = Date.now();
//         if(now-lastcall>=delay){
//             lastcall = now;
//             fn.apply(this,args)
//         }
//     }
// }
// function scroll(){
//     console.log("scrolling")
// }
//   throttle(scroll(),1000);

// function missingNum(arr){
//     const n = arr.length+1;
//     let expectedSum = n*(n+1)/2;
//     const sum = arr.reduce((sum,num)=>sum+num,0)
//     return expectedSum-sum;
// }

// function missingNum(arr){
//     arr.sort((a,b)=>a-b);
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i] !==i+1){
//             return i+1
//         }
//     }
// }

// console.log(missingNum([11,12,14,15]));
// let day = 2
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid");
// }

// let sum = 0
// for(i=0;i<arr.length;i++){
//     sum+=arr[i]
// }

// let i = 0;
// let sum = 0
// while(i<arr.length){
//     sum+=arr[i];
//     i++;
// }

// let i=0;
// let sum=0

// do{
//     sum+=arr[i];
//     i++;
// }while(i<arr.length)
// console.log(sum)

// const arr = [1,2,3,4,5,6,7,8,9,10];

// for(i=0;i<arr.length;i++){
//     if(arr[i]===5) continue;
//     console.log(arr[i])
// }

//  const arr = [9,19,35,2,18,66,8,1,3,22,4,5];
//  let temp;
//  for(i=0;i<arr.length;i++){
//      for(j=i+1;j<arr.length;j++){
//          if(arr[i]<arr[j]){
//              temp = arr[i];
//              arr[i] = arr[j];
//              arr[j]  =temp;
//          }
//      }
//      console.log(arr[i])
//  }

// function sortBy(arr,str){
//     let temp;
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j] && str==="asc"){
//                 temp=arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }else if(arr[i]<arr[j] && str=="desc"){
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//   return [...arr]
// }

// console.log(sortBy([9,19,35,2,18,66,8,1,3,22,4,5],"desc"))

// function sortBy(arr,str){
//     let result =[...arr]
//     let temp;
//     for(let i=0;i<result.length;i++){
//         for(let j=i+1;j<result.length;j++){
//           if(str==="asc" && result[i]>result[j] || str==='desc' && result[i]<result[j]){
//               temp = result[i];
//               result[i] = result[j] ;
//               result[j] = temp
//           }
//         }
//     }
//   return result;
// }

// console.log(sortBy([9,19,35,2,18,66,8,1,3,22,4,5],"desc"))
//  const arr = [1,2,4,5,6,66,7,6,8,9,0,5,3,7,8,3,56,54,3,0,0];
//  let uniq = [];
//  for(i=0;i<arr.length;i++){
//      if(!uniq.includes(arr[i])){
//          uniq.push(arr[i])
//      }
//  }

// console.log(uniq)
// function uniq(arr){
//     let u = [];
//     for(let i of arr){
//         if(!u.includes(i)){
//             u.push(i)
//         }
//     }
//     return u;

// }

// console.log(uniq([2,4,6,7,9,3,2,4,6,7,8]))

//  const arr = [1,2,4,5,6,66,7,6,8,9,0,5,3,7,8,3,56,54,3,0,0];
//  let uniq=[];
//  let count ={}
//  for(let i=0;i<arr.length;i++){
//      const value = arr[i]
//      if(!uniq.includes(value)){
//          uniq.push(value)
//      }
//      count[value] = (count[value] || 0 )+1;

//  }
//  console.log(count);
//  console.log(uniq)

// function countuni(arr){
//     let count={};
//     for(let i of arr){
//  count[i] = (count[i] || 0)+1

//     }
//     return count;
// }

// console.log(countuni([1,2,4,5,6,66,7,6,8,9,0,5,3,7,8,3,56,54,3,0,0]))

// function memoize(fn){
//     let cache = {};
//     return function(...args){
//     const key = JSON.stringify(args);
//     if(cache[key]){
//         return cache[key]
//     }

//     const result  = fn.apply(this,args);
//     cache[key] = result;
//     return result;
//     }
// }

// function slowAdd(a,b){
//     console.log('calculating');
//     return a+b;
// }

// console.log( memoize(slowAdd(7,1)))

// const arr = [1,2,3,4,5];
// let lar = -Infinity;
// let sec = -Infinity;

// for(i=0;i<arr.length;i++){
//     if(arr[i]>lar){
//         sec= lar;
//     lar = arr[i]
// }else if(arr[i] >sec && arr[i]<lar){
//     sec = arr[i]
//     }
// }
// console.log(lar)
// console.log(sec)

// function isA(str1,str2){
//     if(str1.length!==str2.length) return false;
//     const format = (str)=> str.toLowerCase().replace(/[^a-z0-9]/gi,'').split('').sort().join('')

//     return format(str1)=== format(str2);
// }

//      function isA(str1,str2){
//          if(str1.length!== str2.length) return false;

//     let count   = {};
//     for(let ch of str1) count[ch] = (count[ch] || 0)+1;
//     console.log(count)
//     for(let ch of str2) {
//         if(!count[ch])return false;
//         count[ch]--;
//     }
//     return true;
//      }
// console.log(isA("listun","silten"))

// const arr =[0,1,0,2,0,4,5,6];

// function moveZero(arr){
//     let r=[]
//     for(i=0;i<arr.length;i++){
//         if(arr[i]!==0){
//             r.push(arr[i])
//         }
//     }
//     console.log(r.length)
//     console.log(arr.length)

//     while(r.length <arr.length){
//       r.push(0)
//     }
//     return r;
// }

// console.log(moveZero(arr))

// function missingN(arr){
//     let sum=0
//     const n  = arr.length+1;
//     const expectedSum = n*(n+1)/2;
//     for(let i of arr) sum+=i;
//     return expectedSum - sum
// }

// console.log(missingN([1,4,3,5]))

// const arr = [1,2,3,4,6]
// let value=0;
// for(let i of arr){
//     if(arr[i+1]-arr[i]===1) {
//         i++
//     }else{
//          value = arr[i]+1;
//          break;}
// }

// console.log(value)

// const str = "aaabbcc";
//     let count =1;
//     let result ='';
// for(i=0;i<str.length;i++){

//     if(str[i]===str[i+1]){
//         count++;
//     }else{
//         result+=str[i]+count;
//         count=1
//     }

// }
// console.log(result);

// const str = 'aaabbcc'
// function com(str){

// let count = 1;
// let re= ""
// for(i=0;i<str.length;i++){
//     const value = str[i]
//     if(value === str[i+1]){
//         count++
//     }else{
//         re+=value+count;
//         count=1;
//     }
// }
// return re
// }

// const str = "swiss";
// let count={}
// let ch=''
// for(i=0;i<str.length;i++){
//     const value = str[i];
//   count[value] = (count[value] || 0)+1;
// }

// for(i=0;i<str.length;i++){
//     if(count[str[i]]===1) {ch+=str[i]
//     break;}
// }

// console.log(ch)

// function nonrep(str){
//     let count={};
//     let ch=''
//     for(i=0;i<str.length;i++){
//         count[str[i]] = (count[str[i]] || 0)+1;
//     }

//     for(i=0;str.length;i++){
//         if(count[str[i]]===1){
//             ch+=str[i];
//             break;
//         }
//     }
//     return ch;

// }
// console.log(nonrep("swiss"))

// let even =[]
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         even.push(arr[i])
//         console.log(arr[i])
//     }
// }
// console.log(even)


// function isPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i * i <= n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// function get(arr) {
//     let result = [];
//     for ( let i = 0; i < arr.length; i++) {
//         if (isPrime(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(get(arr));
// const arr = [1,2,3,4,5,6,7,8,9,10]; 
 
// function isPrime(n) {
//   if (n <= 1) return false;

//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) return false;
//   }

//   return true;
// }

// function getPrimes(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (isPrime(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(getPrimes(arr));


// const obj = {
//     name:"vyasan",
//     address:{
//         state:"kerala",
//         country:"india"
//     }
// }

// let clone = structuredClone(obj)
// clone.address.state= "bengal"
// console.log(obj)

// console.log(clone)m  

// function deepcopy(obj){
//     if(obj===null || typeof obj !== "object") return obj;
//     let copy  = Array.isArray(obj)  ? [] : {};
//     for(let key in obj){
//         copy[key] = deepcopy(obj[key])
//     }
//     return copy ;
// }

// const ob = {
//     name:{ na:"rathi",me:"suhhu"},
//     age:3,city:"india"
// }

// let c = deepcopy(ob);
// c.name.na =8;
// console.log(ob)
// console.log(c)

// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "admin" },
//   { name: "David", role: "user" }
// ];
 
//  function groupBy(arr,key){
//      const map = new Map()
     
//      for(let item of arr){
//          const value = item[key]
//          if(!map.has(value)){
//              map.set(value,[])
//          }
//      map.get(value).push(item);
         
//      }
//      return map;
     
//  }
 
//  function groupBy(arr,key){
//      return arr.reduce((acc,obj)=>{
//          const value = obj[key];
//         if(!acc[value]){
//             acc[value]= [];
//         }
        
//         acc[value].push(obj);
//         return acc;
//      },{})
//  }
// function groupBy(arr, key) {
//   return arr.reduce((acc, obj) => {
//     const value = obj[key];

//     if (!acc[value]) {
//       acc[value] = [];
//     }

//     acc[value].push(obj);
//     return acc;
//   }, {});
// }

// console.log(groupBy(users, "role"));

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 30 }
// ];

//  users.sort((a,b)=> b.name.localeCompare(a.name));
// console.log(users)

// const sorted = [...users].sort((a,b)=>a.age - b.age);
// console.log(sorted);


// function RE(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("resolved")
//         },2000)
//     })
// }
// async function run(){
//     const re = await RE();
//     console.log(re);
    
// }
// run()
// RE().then(re=>console.log(re))



// function debounce(fn,delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer=setTimeout(()=>{
//             fn.apply(this,args)
//         },delay)
//     }
// }

// function throttle(fn,delay){
//     let lastcall = 0;
//     return function(...args){
//         const now = Date.now();
//         if(now-lastcall>=delay){
//             lastcall = now;
//             fn.apply(this,args)
//         }
//     }
// }
// function scroll(){
//     console.log("scrolling")
// }
//   throttle(scroll(),1000); 


// function missingNum(arr){
//     const n = arr.length+1;
//     let expectedSum = n*(n+1)/2;
//     const sum = arr.reduce((sum,num)=>sum+num,0)
//     return expectedSum-sum;
// }


// function missingNum(arr){
//     arr.sort((a,b)=>a-b);
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i] !==i+1){
//             return i+1
//         }
//     }
// }



// console.log(missingNum([11,12,14,15]));
// let day = 2
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid");
// } 

// let sum = 0
// for(i=0;i<arr.length;i++){
//     sum+=arr[i]
// }

// let i = 0;
// let sum = 0
// while(i<arr.length){
//     sum+=arr[i];
//     i++;
// }

// let i=0;
// let sum=0

// do{
//     sum+=arr[i];
//     i++;
// }while(i<arr.length)
// console.log(sum)


// const arr = [1,2,3,4,5,6,7,8,9,10];

// for(i=0;i<arr.length;i++){
//     if(arr[i]===5) continue;
//     console.log(arr[i])
// }
 
//  const arr = [9,19,35,2,18,66,8,1,3,22,4,5];
//  let temp;
//  for(i=0;i<arr.length;i++){
//      for(j=i+1;j<arr.length;j++){
//          if(arr[i]<arr[j]){
//              temp = arr[i];
//              arr[i] = arr[j];
//              arr[j]  =temp;
//          }
//      }
//      console.log(arr[i])
//  }

// function sortBy(arr,str){
//     let temp; 
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j] && str==="asc"){
//                 temp=arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }else if(arr[i]<arr[j] && str=="desc"){
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             } 
//         }
//     }
//   return [...arr]
// }

// console.log(sortBy([9,19,35,2,18,66,8,1,3,22,4,5],"desc"))




// function sortBy(arr,str){
//     let result =[...arr]
//     let temp; 
//     for(let i=0;i<result.length;i++){
//         for(let j=i+1;j<result.length;j++){
//           if(str==="asc" && result[i]>result[j] || str==='desc' && result[i]<result[j]){
//               temp = result[i];
//               result[i] = result[j] ;
//               result[j] = temp
//           }
//         }
//     }
//   return result;
// }

// console.log(sortBy([9,19,35,2,18,66,8,1,3,22,4,5],"desc"))
//  const arr = [1,2,4,5,6,66,7,6,8,9,0,5,3,7,8,3,56,54,3,0,0];
//  let uniq = [];
//  for(i=0;i<arr.length;i++){
//      if(!uniq.includes(arr[i])){
//          uniq.push(arr[i])
//      }
//  }
 

// console.log(uniq)
// function uniq(arr){
//     let u = [];
//     for(let i of arr){
//         if(!u.includes(i)){
//             u.push(i)
//         }
//     }
//     return u;

    
// }

// console.log(uniq([2,4,6,7,9,3,2,4,6,7,8]))

//  const arr = [1,2,4,5,6,66,7,6,8,9,0,5,3,7,8,3,56,54,3,0,0];
//  let uniq=[];
//  let count ={}
//  for(let i=0;i<arr.length;i++){
//      const value = arr[i]
//      if(!uniq.includes(value)){
//          uniq.push(value)
//      }
//      count[value] = (count[value] || 0 )+1; 
      
      
//  }
//  console.log(count);
//  console.log(uniq)


// function countuni(arr){
//     let count={}; 
//     for(let i of arr){
//  count[i] = (count[i] || 0)+1
        
//     }
//     return count;
// }

// console.log(countuni([1,2,4,5,6,66,7,6,8,9,0,5,3,7,8,3,56,54,3,0,0]))


// function memoize(fn){
//     let cache = {};
//     return function(...args){
//     const key = JSON.stringify(args);
//     if(cache[key]){
//         return cache[key]
//     }
    
//     const result  = fn.apply(this,args);
//     cache[key] = result;
//     return result;
//     }
// }

// function slowAdd(a,b){
//     console.log('calculating');
//     return a+b;
// }

// console.log( memoize(slowAdd(7,1))) 




// const arr = [1,2,3,4,5];
// let lar = -Infinity;
// let sec = -Infinity;

// for(i=0;i<arr.length;i++){
//     if(arr[i]>lar){
//         sec= lar;
    //     lar = arr[i]
    // }else if(arr[i] >sec && arr[i]<lar){
    //     sec = arr[i]
//     }
// }
// console.log(lar)
// console.log(sec)

// function isA(str1,str2){
//     if(str1.length!==str2.length) return false;
//     const format = (str)=> str.toLowerCase().replace(/[^a-z0-9]/gi,'').split('').sort().join('')
  
//     return format(str1)=== format(str2);
// }
 
//      function isA(str1,str2){
//          if(str1.length!== str2.length) return false;
         
//     let count   = {};
//     for(let ch of str1) count[ch] = (count[ch] || 0)+1;
//     console.log(count)
//     for(let ch of str2) {
//         if(!count[ch])return false;
//         count[ch]--;
//     } 
//     return true;
//      }
// console.log(isA("listun","silten"))

// const arr =[0,1,0,2,0,4,5,6];

// function moveZero(arr){
//     let r=[]
//     for(i=0;i<arr.length;i++){
//         if(arr[i]!==0){
//             r.push(arr[i])
//         }
//     } 
//     console.log(r.length)
//     console.log(arr.length)
    
//     while(r.length <arr.length){
//       r.push(0)
//     }
//     return r;
// }

// console.log(moveZero(arr))

// function missingN(arr){
//     let sum=0
//     const n  = arr.length+1;
//     const expectedSum = n*(n+1)/2;
//     for(let i of arr) sum+=i;
//     return expectedSum - sum
// }

// console.log(missingN([1,4,3,5]))

// const arr = [1,2,3,4,6]
// let value=0;
// for(let i of arr){
//     if(arr[i+1]-arr[i]===1) {
//         i++
//     }else{
//          value = arr[i]+1;
//          break;}
// }

// console.log(value)


// const str = "aaabbcc";
//     let count =1;
//     let result ='';
// for(i=0;i<str.length;i++){
     
//     if(str[i]===str[i+1]){
//         count++;
//     }else{
//         result+=str[i]+count; 
//         count=1
//     }

// }
// console.log(result);

// const str = 'aaabbcc'
// function com(str){
    
// let count = 1;
// let re= ""
// for(i=0;i<str.length;i++){
//     const value = str[i]
//     if(value === str[i+1]){
//         count++
//     }else{
//         re+=value+count;
//         count=1;
//     }
// }
// return re
// }


// const str = "swiss";
// let count={}
// let ch=''
// for(i=0;i<str.length;i++){
//     const value = str[i];
//   count[value] = (count[value] || 0)+1;
// } 

// for(i=0;i<str.length;i++){ 
//     if(count[str[i]]===1) {ch+=str[i]
//     break;}
// }

// console.log(ch)

// function nonrep(str){
//     let count={};
//     let ch=''
//     for(i=0;i<str.length;i++){
//         count[str[i]] = (count[str[i]] || 0)+1;
//     }
    
//     for(i=0;str.length;i++){
//         if(count[str[i]]===1){
//             ch+=str[i];
//             break;
//         }
//     }
//     return ch;
    
// }
// console.log(nonrep("swiss"))

// let even =[]
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         even.push(arr[i])
//         console.log(arr[i])
//     }
// }
// console.log(even)

// const arr = [1,2,3,4,5,6,7,8,9,10]; 
 
//  function isPrime(n){
//     if(n<=1) return false;
//     for(let i=2;i*i<=n;i++){
//         if(n%i===0) return false;
//     }
//     return true;
//  }

// function get(arr){
//     let result=[]
// for(let i=0;i<arr.length;i++){

// if(isPrime(arr[i])){
//     result.push(arr[i])
// }
    
// }
// return result;
// }

// console.log(get(arr))

//  function isPalindrome(num){
//      let ori = num;
//      let reversed =0;
     
//      while(num>0){
//          let di = num%10;
//          reversed = reversed*10+di;
//          num = Math.floor(num/10)
//      }
//      return ori === reversed;
//  }
 
//  console.log(isPalindrome(1011))
 
//  let num = 101;
//  const ori = num;
//  let reversed = 0 ; 
//  while(num>0){
//      let di = num%10;
//      reversed = reversed * 10 +di;
//      num = Math.floor(num / 10);
//  }
//  if(reversed === ori){
//      console.log("it is palindrome")
//  }else{
//      console.log("not a palindrome")
//  }


// function sumOf(num){
//   let sum = 0 ;
//   while(num!=0){
//       let dig = num%10;
//       sum+=dig;
//       num = Math.floor(num/10)
        
//   }
//     return sum;
// }
// console.log(sumOf(28))

// let a  = 1;
// let b = 2 ;
// a = a+b;
// b= a-b;
// a = a-b;

 
//  console.log(a)
//  console.log(b)

// function memoize(fn){
//     let cache ={};
//     return function(...args){
//         const key =  JSON.stringify(args);
//         if(cache[key]) return cache[key];
//         const result = fn.apply(this,args);
//         cache[key] = result ; 
//         return result;
//     }
// }

// function debounce(fn,delay){
//             let timer;
//             return function(...args){
//                 clearTimeout(timer);
//                 timer = setTimeout(()=>{
//                     fn.apply(this,args)
//                 },delay)
//             }
                          
// }
// function slow(n){
//     console.log("calculating...",   n*n*n*n*n*n*n*n*n*n*n*n*n) 
// }
//     const m = debounce(slow,500)
//  m(5)

// function isPalindrome(str){
//     const strr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
//     let left=0;
//     let right = strr.length-1;
//     while(left<right){
//         if(strr[left]!==strr[right]){
//             return false;
//         }
//         left++;
//         right--;
//     }
//         return true
// }
// const str = "| mam  jkhjkhjghjghjg                            |"
// console.log(isPalindrome(str))


// function throttle(fn,delay){
//     let lastCall = 0 ;
//     return function(...args){
//         const now = Date.now();
//             if(now-lastCall>=delay){
//                 lastCall = now;
//         fn.apply(this,args)
//             }
//     }
// }

// function fn( ){
//     console.log(Date.now())
// }
// const th = throttle(fn,500)
//   th()



// @IIFE
// (function  (name){
//     console.log("hi "+name)
// })("vyasan")

// ((namee)=>{
//     console.log(namee)
// })("nnn")


//PRACTICE SESSION
function palindrome(num){
    let og = num; 
    let reverse=0;
    while(num>0){
        let di = num%10;
        reverse=reverse*10+di;
        num = Math.floor(num/10)
    }
    return og === reverse
}
console.log(palindrome(18001))






