// Events

// this is most reccommended way
// function onAlert(){
//      alert("You have clicked the button.");
//  }

// we can also call the button by using id in here

// let btn= document.getElementById("btn");
// addEventListener("click",function(){
//   alert("clicked");
// });

// let str = "banana";
// let count = 0;
// for(const char of str){
//     if(char==='a'){
//         count++
//     }
// }
// console.log(count);

// let str = 'vyasan';
// let re='';
// for(let i=str.length-1;i>=0;i--){
//     re+=str[i]//space = O(1) ,time = O(n)
// }
// console.log(re)

// let nums = [1, 2,5,7,11]
// let lar = nums[0];

// for(const n of nums){
// if(lar<n){
//     lar=n;
// }
// }
// console.log(lar)
// let nums = [1, 2, 5, 7, 11];
// let right = nums.length - 1;
// let left = 0;
// while (left<right) {

//     let temp = nums[right];
//     nums[right] = nums[left];
//     nums[left] =temp;
//     left++;
//     right--;
// }
// console.log(nums)
// let nums = [1, 2, 5, 7, 11];
// const rev  = [];
// for(let i = nums.length-1;i>=0;i--){
// rev.push(nums[i])
// }
// console.log(rev);

// function reverseArr(arr){
//     let left = 0;
//     let right =arr.length-1;
//     while(left<right){
//         [arr[left],arr[right]] = [arr[right],arr[left]]
//         left++;
//         right--;
//     }
//     return arr;
// }
// let nums = [1, 2, 5, 7, 11];

// console.log(reverseArr(nums))

// let str = "hello";
// let re='';
// for(let  i = str.length-1;i>=0;i--){
//     re+=str[i]
// }
// console.log(re)

// let str = "hello";
// function reverseStr(str) {
//     let st = str.split("");
//     let r = st.length - 1;
//     let l = 0;
//     while (l < r) {
//         [st[l], st[r]] = [st[r], st[l]];
//         l++;
//         r--;
//     }
//     return st.join("");
// }
// console.log(reverseStr(str));

// let uni = new Set();
// let nums = [1,2,2,3,5,4,5]
// for(let i =  0 ; i<=nums.length-1;i++){
//     if(!uni.has(nums[i])){
//         uni.add(nums[i])
//     }

// }
// console.log([...uni]);
// function uniq(nums){
//     return [...new Set(nums)]
// }
// console.log(uniq(nums))

// let nums = [1, 2, 2, 3, 5, 4, 5];
// function unq(nums) {
//     let re = [];
//     for (let i = 0; i <= nums.length - 1; i++) {
//         if (!re.includes(nums[i])) {
//             re.push(nums[i]);
//         }
//     }
//     return re;
// }

// console.log(unq(nums));

// let nums =  [3, 3, 1, 2, 1, 4, 4];
// let re = [];
// for(let i = 0;i<=nums.length-1;i++){
//     let found =false;
//     for(let j =0;j<=re.length-1;j++){
//          if(nums[i]===re[j]){
// found=true
// break;
//          }

//     }
//     if(!found){
//         re.push(nums[i])
//     }
// }
// console.log(re)

// let str = 'racar';

// function isPalindrome(str){//O(n),O(n)
//     let reversed  = str.split("").reverse().join("");
//     return  str ===reversed

// }
// function isPalindrome(str){//O(n),O(1)
//     let r = str.length-1;
//     let l = 0;
//     while (l<r){
// if(str[l]!==str[r]){
//     return false;
// }
// l++;
// r--;

//     }
//     return true;

// }
// console.log(isPalindrome(str));
// const arr = [1,'adnd',null,undefined,`??`]
// console.log(arr);

// const map = new Map();
// console.log(map);

// const arr = [1, 2, 2, 3, 3, 3];
// fre= {};
// for(const item of arr){
//     fre[item] = ( fre[item]|| 0)+1
// }
// console.log(fre);

// const map = new Map();

// map.set("name", "John");
// map.set("name", "Benny");
// map.set("age", 25);
// console.log(map.get('name'))

// const user = {
//   name: "John",
//   age: 25,
//   1:8,
//   fn:(a)=> a,

// };

// console.log('name' in user);
// console.log(user.length);

// const arr = [1, 2, 2, 3, 3, 3];

// const map = new Map();
// for(const n of arr){
//     map.set(n,(map.get(n) || 0)+1);
// }
// console.log(map);

//        let arr = [2,  11, 15,7]
// let tar = 9
//         function twoSum(arr,tar){
//             for(let i =0;i<arr.length;i++){
//                 for(let j = i+1;i<arr.length;j++){
//                     if(arr[i]+arr[j]===tar){
//                         return [i,j]
//                     }
//                 }
//             }
//         }

//         console.log(twoSum(arr,tar));
// let arr = [2, 11, 15, 7];
// let tar = 9;
// function twoSum(arr, tar) {
//     let map = {};
//     for (let i = 0; i < arr.length; i++) {
//         let x = tar - arr[i];
//         if (x in map) {
//             return [i, map[x]];
//         }
//         map[arr[i]] = i;
//     }
// }

// console.log(twoSum(arr, tar));
// const map = new Map()
// map.set(1,2)
// map.set("sm",33)
//  for(const [key,value] of map){
//     console.log(`${key}:${value}`);

//  }

// const arr = [5, 5, 1, 2, 1, 2];
// function firstNonRepeating(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;

//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }

//         if (count === 1) {
//             return arr[i];
//         }
//     }

//     return -1;
// }
// function firstNonRepeating(arr){
//     let fre =new Map();
//     for(const n of arr){
//        fre.set(n,(fre.get(n) || 0)+1);
//     }
//     console.log(fre);
//     for(const n of arr){
//         if(fre[n]===1){
//             return n
//         }
//     }
//     return -1;

// }
// console.log(firstNonRepeating(arr))

// let arr = [1,10000, 3, 5, 9, 8];

// function bubbleSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j+1] ; 
//          arr[j+1]  = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort(arr));

// let arr = [1,10000, 3, 5, 9, 8];

// function bubbleSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
 
//         [arr[j],arr[j+1]] = [arr[j+1],arr[j]]   
       
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort(arr));

// let arr = [1,10000, 3, 5, 9, 8];

// function bubbleSortReverse(arr) {
//     const n = arr.length;
//     for (let i = n - 1; i > 0 ; i--) {
//         for (let j =  n - 1 - i; j > 0; j--) {
//             if (arr[j] > arr[j - 1]) {
 
//         [arr[j],arr[j-1]] = [arr[j-1],arr[j]]   
       
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSortReverse(arr));

