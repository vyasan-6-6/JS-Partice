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

// ------------bubblesort------------
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

// function sortAscending(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }

//   return arr;
// }

// console.log(sortAscending([1,4,3,5,2]));

// ------------insertion sort------------

//                 function insertionSort(arr) {
//     let n = arr.length;

//     for (let i = 1; i < n; i++) {

//         let current = arr[i];
//         let j = i - 1;

//         while (j >= 0 && arr[j] > current) {
//             arr[j + 1] = arr[j];
//             j--;
//         }

//         arr[j + 1] = current;
//     }

//     return arr;
// }

// console.log(insertionSort([5, 3, 4, 1]));

// ------------Linear Search------------

// function linearSearch(arr,tar) {
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]===tar){
//     return i;
//     }
// }
// return -1
// }
// console.log(linearSearch([4,8,2,7,5,9],7));

// ------------binarySearch  ------------
// function binarySearch(arr, tar) {
//     let left   = 0;
//     let right = arr.length - 1;
//     while(left   <= right) {
//         let mid = Math.floor((left+right)/2);
//         if(arr[mid]===tar){
//             return mid;
//         }
//         if(tar<arr[mid]){
//             right= mid - 1;
//         }else{
//             left = mid + 1;
//         }
//     }
//     return -1;
// }
// console.log(binarySearch([1, 3, 5, 7, 9, 11],7));
//--------- Find the sum of all even numbers and the count of all odd numbers in an array.---------
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function eo(arr) {
//     let evenSum = 0;
//     let oddCount = 0;
//     for (const n of arr) {
//         if (n % 2 === 0) {
//             evenSum += n;
//         } else if (n % 2 !== 0) {
//             oddCount++;
//         }
//     }
//     return `evenSum : ${evenSum} and oddCount : ${oddCount}`;
// }
// console.log(eo(arr));

//---------Queue Implementation-------------

// class Queue{
//     constructor(){
//         this.items= [];
//     }

//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(){
//         return this.items.shift()
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
//     size(){
//         return this.items.length;
//     }
//     peek() {
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
// return null;
//     }
//     print(){
//         console.log(this.items.toString());

//     }

// }
// const q = new Queue();
// q.enqueue(10)
// q.enqueue(15)
// q.enqueue(14)
// q.enqueue(12)
// q.enqueue(11)
// q.dequeue()
// console.log(q.isEmpty())
// console.log(q.peek())
// console.log(q.size())
// q.print()

//---------Queue Implementation using fn-------------

// function createQueue() {
//     let items = [];
//     return {
//         enqueue(element) {
//             items.push(element);
//         },
//         dequeue() {
//             return items.shift();
//         },
//         isEmpty() {
//             return items.length === 0;
//         },
//         size() {
//             return items.length;
//         },
//         peek() {
//             if (!isEmpty()) {
//                 return items[0];
//             }
//             return null;

//         },
//         print() {
//             console.log(items.toString());
//         },
//     };
// }

// const q = createQueue();
// console.log(q.isEmpty());

// q.enqueue(10);
// q.print()

//---------Stack Implementation using class-------------

// class Stack {
//     constructor() {
//         this.items = [];
//     }
//     push(element) {
//         this.items.push(element);
//     }
//     isEmpty() {
//         return this.items.length === 0;
//     }
//     pop() {
//          if (this.isEmpty()) {
//             return "Stack Underflow";
//         }
//         return this.items.pop();
//     }
//     peek() {
//         if (!this.isEmpty()) {
//             return this.items[this.items.length - 1];
//         }
//         return null;
//     }
//     size(){
//         return this.items.length;
//     }
//     print() {
//         console.log(this.items);
//     }
// }
// const s = new Stack();

// s.pop()
// console.log(s.isEmpty());
// console.log(s.size());
// s.print()

//---------Stack Implementation using fn-------------

// function createStack() {
//     let items = [];
//     return {
//         push(element) {
//             items.push(element);
//         },
//         isEmpty() {
//             return items.length === 0;
//         },
//         pop() {
//             if (this.isEmpty()) {
//                 return "Stack Underflow";
//             }
//             return items.pop();
//         },
//         peek() {
//             if (!this.isEmpty()) {
//                 return items[items.length - 1];
//             }
//             return null;
//         },
//         size(){
//             return items.length;
//         },
//         print() {
//             console.log(items);
//         }
//     };
// }

// const q = createStack();
// console.log(q.isEmpty());

// q.push(10);
// q.print()

//--------------Node-----------

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     insertAtBeginning(value) {
//         const node = new Node(value);

//         node.next = this.head;
//         this.head = node;
//     }

//     insertAtEnd(value) {
//         const node = new Node(value);

//         if (!this.head) {
//             this.head = node;
//             return;
//         }

//         let current = this.head;

//         while (current.next) {
//             current = current.next;
//         }

//         current.next = node;
//     }

//     print() {
//         let current = this.head;
//         let result = "";

//         while (current) {
//             result += current.value + " -> ";
//             current = current.next;
//         }

//         console.log(result + "null");
//     }
// }
// const l =    new LinkedList();
// l.insertAtEnd(8);
//  l.insertAtBeginning(1)
//  l.print()

//----fibonacci sequence---

// function fibonacci(n){
//     if(n===0)return [0];
//     if(n===1)return [1];

//     const fib=[0,1];
//     for(let i=2;i<n;i++){
//      fib[i] = fib[i-2]+fib[i-1]
//     }
//     return fib;
// }

// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(7));

//----factorial-----
// function factorial(n) {
//     let res = 1;
//     for (let i = 2; i <= n; i++) {
//         res *= i;
//     }
//     return res;
// }

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(7));

//----prime number-----

// function isPrime(n){
//     if(n<2) return false;
//     for(let i =2;i < n;i++){
//         if(n%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(7));

// function isPrime(n){//O(sqrt(n))
//     if(n<2) return false;
//     for(let i =2;i <=Math.sqrt(n);i++){
//         if(n%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(0));
// console.log(isPrime(2));
// console.log(isPrime(1));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(7));

//-------powerof two----------

// function isPowerOfTwo(n){// O(log n ) , because of inputsize is halfed
//     if(n<1){
//         return false;
//     }
//     while(n>1){
//         if(n%2!==0){
//             return false;
//         }
//         n/=n;
//     }
//     return true;
// }
// console.log(isPowerOfTwo(0));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(4));
// console.log(isPowerOfTwo(5));
// console.log(isPowerOfTwo(7));

// function isPowerOfTwoBitiwise(n){// O(1) , because of inputsize is halfed
//     if(n<1)   return false;

//     return (n & (n-1)) === 0  ;
// }
// console.log(isPowerOfTwoBitiwise(0));
// console.log(isPowerOfTwoBitiwise(2));
// console.log(isPowerOfTwoBitiwise(1));
// console.log(isPowerOfTwoBitiwise(4));
// console.log(isPowerOfTwoBitiwise(5));
// console.log(isPowerOfTwoBitiwise(7));

// class Queue {
//     constructor(){
//         this.items=[];
//     }
//     enqueue(e){
//         this.items.push(e)
//     }
//     dequeue(){
//         return this.items.shift();
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null;
//         }
//         return this.items[0];
//     }
//     size(){
//         return this.items.length;
//     }
//     isEmpty(){
//         return this.items.length===0;
//     }
// }

// const scheduler = new Queue();

// scheduler.enqueue("Send Email");
// scheduler.enqueue("Generate Report");
// scheduler.enqueue("Backup Database");

// while (!scheduler.isEmpty()) {
//     const currentTask = scheduler.dequeue()
//     console.log("Processing:", currentTask);
// }

//---------recursive fibonacci sequence-------

// function fibonacci(n){ //O(2^n)
//     if(n < 2){
//         return n;
//     }
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(0));
// console.log(fibonacci(6));
// console.log(fibonacci(7));

//---- recursive factorial-----

// function recursiveFactorial(n){//O(n)
//     if(n===0){return 1  }
//      return n * recursiveFactorial(n-1)
// }
// console.log(recursiveFactorial(1));
// console.log(recursiveFactorial(0));
// console.log(recursiveFactorial(5));

// const arr = [1,8,20,10,7,9];
// function linearSearch(arr,tar){
//     if(arr.length===0) return 0;
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i]===tar){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(linearSearch(arr,89));

// function recursiveBinarySearch(arr,tar){//O(log n )
// return search(arr,tar,0,arr.length-1);
// }
// function search(arr,tar,left,right){
//     if(left>right) {return -1;}
//     let mid = Math.floor((left+right)/2);
//     if(tar===arr[mid]){
//         return mid;
//     }
//     if(tar<arr[mid]){
//         return search(arr,tar,0,mid-1);
//     }else{
//         return search(arr,tar,mid+1,right);

//     }
// }
// console.log(recursiveBinarySearch(arr,50));

// const arr = [1,9,8,0,38,19,928,198,-183,-2];
// function bubbleSort(arr) {//O(n^2)
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//     return arr;
// }
// console.log(bubbleSort(arr));

// const arr = [4,3,2,1];
// function insertionSort(arr){
// for(let i = 1 ; i < arr.length ; i++){
//     let current = arr[i];
//     let j = i-1;
//     while(j>=0 && arr[j] > current){
//         arr[j+1] =arr[j];
//         j--;
//     }
//     arr[j+1] = current;

// }
// return arr;
// }
// console.log(insertionSort(arr));

//---------------Quick sort-----------

// const arr = [4, 3, 2, 1];
// function quickSort(arr) {
//     if(arr.length <=1){
//         return arr;
//     }
//     let pivot = arr[arr.length - 1];
//     let right = [];
//     let left = [];
//     for (let i = 0; i < arr.length-1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort(arr));

// const arr = [3, 5, 1, 5, 0, 2, 13, 6, 7, 88, 654];

// function mergeSort(arr) {
//     if(arr.length <2) return arr;
//     const mid = Math.floor(arr.length / 2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);

//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//     let sorted = [];
//     while (left.length && right.length) {
//         if(left[0]<=right[0]){
//             sorted.push(left.shift());
//         }else{
//             sorted.push(right.shift());
//         }
//     }
//     return [...sorted,...left,...right]
// }

// console.log(mergeSort(arr));

//---Optimized Queue implementation-------------

// class Queue{
//     constructor(){ //this has O(1) for dequeue and enqueue ,while using object
//         this.items = {};
//         this.rear=0;
//         this.front=0;
//     }
//     enqueue(e){
//         this.items[this.rear] = e;
//     this.rear++;
//     }
//     dequeue(){
//         const item = this.items[this.front];
//         delete this.items[this.front];
//         this.front++;
//         return item;
//     }
//     isEmpty(){
//         return this.rear-this.front === 0 ;
//     }
//     size(){
//         return this.rear-this.front;
//     }
//     peek(){
//         return this.items[this.front]
//     }
//     print(){
//         console.log(this.items);

//     }
// }

// const q =  new Queue();
// q.enqueue(2);
// q.enqueue(8);
// q.enqueue(98)
// q.dequeue()
// q.dequeue()
// console.log(q.size());
// q.print()

// //----find the largest even number in a array--------
// const arr = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10];

// function larEven(arr) {
//     let larE = null;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             if ((larE = null || arr[i] > larE)) {
//                 larE = arr[i];
//             }
//         }
//     }
//     return larE;
// }
// console.log(larEven(arr));

//----------Find the sum of all even numbers greater than 10.------------

// const arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 10, 1, 2, 3, 4];

// function sumE10(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0 && arr[i] > 10) {
//             sum += arr[i];
//         }
//     }

//     return sum;
// }

// console.log(sumE10(arr));

//----Linked List Implementation-------------

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
//     isEmpty() {
//         return this.size === 0;
//     }
//     getSize() {
//         return this.size;
//     }
//     prepend(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }
//     append(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//         } else {
//             let pre = this.head;
//             while (pre.next) {
//                 pre = pre.next;
//             }
//             pre.next = node;
//         }
//         this.size++;
//     }
//     insert(index, value) {
//         if (index === 0 || index > this.size) {
//             return;
//         }
//         if (index === 0) {
//             this.prepend(value);
//         } else {
//             let node = new Node(value);
//             let pre = this.head;
//             for (let i = 0; i < index - 1; i++ ) {
//                 pre = pre.next;
//             }

//             node.next = pre.next;
//             pre.next = node;
//         }
//         this.size++;
//     }
//     removeValue(value) {
//         if (this.isEmpty()) {
//             return null;
//         }
//         if (this.head.value === value) {
//             this.head = this.head.next;
//             this.size--;
//             return value;
//         } else {
//             let pre = this.head;
//             while (pre.next && pre.next.value !== value) {
//                 pre = pre.next;
//             }
//             if (pre.next) {
//                 const removedNode = pre.next;
//                 pre.next = removedNode.next;
//                 this.size--;
//                 return value;
//             }
//             return null;
//         }
//     }
//     removeFrom(index) {
//         if (index < 0 || index >= this.size) {
//             return null;
//         }
//         let removedNode;
//         if (index === 0) {
//             removedNode = this.head;
//             this.head = this.head.next;
//         } else {
//             let pre = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 pre = pre.next;
//             }
//             removedNode = pre.next;
//             pre.next = removedNode.next;
//         }
//         this.size--;
//         return removedNode.value;
//     }
//     search(value) {
//         if (this.isEmpty()) {
//             return -1;
//         }

//         let i = 0;
//         let curr = this.head;
//         while (curr) {
//             if (curr.value === value) {
//                 return i;
//             }
//             curr = curr.next;
//             i++;
//         }
//         return -1;
//     }
//     reverse(){
//         let pre = null ;
//         let curr = this.head;
//         while(curr){
//             let next = curr.next;
//             curr.next = pre;
//             pre =  curr;
//             curr = next;
//         }
//         this.head = pre;
//     }
//     print() {
//         if (this.isEmpty()) {
//             console.log(`LinkedList is empty.`);
//         } else {
//             let curr = this.head;
//             let listValues = "";
//             while (curr) {
//                 listValues += `${curr.value} `;
//                 curr = curr.next;
//             }
//             console.log(listValues);
//         }
//     }
// }
// const list = new LinkedList();
// list.prepend(8);
// list.prepend(1);
// list.prepend(12);
// list.append(9);
// list.insert(4, 10);
// list.removeFrom(1);
// console.log(list.removeValue(8));
// console.log(list.search(320));
// list.reverse()
// list.print();

// const arr = [1,2,3,4,5,6,7,8,9,10];
// for(let i = 0 ; i < arr.length; i++){
//     if(arr[i]%2===0){
//         arr[i] = 1;
//     }else {
//         arr[i] = 2;
//     }
// }
// console.log(arr)

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
//     getSize() {
//         return this.size;
//     }
//     isEmpty() {
//         return this.size === 0;
//     }
//     prepend(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }
//     append(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             node = this.head;
//         } else {
//             let pre = this.head;
//             while (pre.next) {
//                 pre = pre.next;
//             }
//             pre.next = node;
//         }
//         this.size++;
//     }
//     insert(ind, value) {
//         if (ind < 0 || ind > this.size) {
//             return "invalid index";
//         }
//         if (ind === 0) {
//             this.prepend(value);
//         } else {
//             const node = new Node(value);
//             let pre = this.head;

//             for (let i = 0; i < ind - 1; i++) {
//                 pre = pre.next;
//             }
//             node.next = pre.next;
//             pre.next = node;
//             this.size++;
//         }
//     }
//     removeFrom(ind) {
//         if (ind < 0 || ind > this.size) {
//             return "invalid index";
//         }
//         let removedNode;
//         if (ind === 0) {
//             removedNode = this.head;
//             this.head = this.head.next;
//         } else {
//             let pre = this.head;
//             for (let i = 0; i < ind - 1; i++) {
//                 pre = pre.next;
//             }
//             removedNode = pre.next;
//             pre.next = removedNode.next;
//             this.size--;
//             return removedNode.value;
//         }
//     }
//     removeValue(value) {
//         if (this.isEmpty()) {
//             return "No value to be removed present";
//         }

//         if (this.head.value === value) {
//             this.head = this.head.next;
//             this.size--;
//             return value;
//         } else {
//             let pre = this.head;
//             while (pre.next && pre.next.value !== value) {
//                 pre = pre.next;
//             }
//             if (pre.next) {
//                 const removedNode = pre.next;
//                 pre.next = removedNode.next;
//                 this.size--;
//                 return removedNode.value;
//             }
//         }
//         return null;
//     }

//     search(value) {
//         if (this.isEmpty()) {
//             return -1;
//         }
//         let i = 0;
//         let curr = this.head;
//         while (curr) {
//             if (curr.value === value) {
//                 return i;
//             }
//             curr = curr.next;
//             i++;
//         }
//         return -1;
//     }
//     reverse() {
//         let pre = null;
//         let curr = this.head;

//         while (curr) {
//             let next = curr.next;
//             curr.next = pre;
//             pre = curr;
//             curr = next;
//         }
//         this.head = pre;
//     }
//     countEvenNodes() {
//         let curr = this.head;
//         let count = 0;
//         while (curr) {
//             if (curr.value % 2 === 0) {
//                 count++;
//             }
//             curr = curr.next;
//         }
//         return count;
//     }
//     middle() {
//         let slow = this.head;
//         let fast = this.head;
//         while (fast !== null && fast.next !== null) {
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         return slow.value;
//     }
//     middleDelete() {
//         if (this.head === null) return null;
//         if (this.head.next === null) return null;
//         let slow = this.head;
//         let fast = this.head;
//         let pre = null;
//         while (fast !== null && fast.next !== null) {
//             pre = slow;
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         pre.next = slow.next;
//         return this.head;
//     }
//     print() {
//         if (this.isEmpty()) {
//             console.log(`LinkedList is empty`);
//         } else {
//             let curr = this.head;
//             let listValues = "";
//             let count = 0;
//             let sum = 0;
//             while (curr) {
//                 listValues += `${curr.value} `;
//                 sum += curr.value;
//                 count++;
//                 curr = curr.next;
//             }
//             console.log(`list values : ${listValues} and count : ${count} sum: ${sum} `);
//         }
//     }
// }
// const list = new LinkedList();
// list.prepend(52);
// list.append(8);
// list.append(18);
// list.prepend(3);
// list.append(82);
// list.append(9);
// list.insert(2, 9);
// list.middle();
// console.log(list.middleDelete());

// // console.log(l.removeFrom(2));
// // console.log(l.removeValue(3));
// // console.log(l.search(5));
// // l.reverse();
// // console.log(l.countEvenNodes());
// list.print();

// const arr = 'string';
// let ar = arr.split('');
// let re =[]
// for(let i =  ar.length-1 ; i >=0 ;i--){
//     re.push(ar[i])
// }
// console.log(re.join(""));

// const arr = 'string';
// const ar= arr.split('').reverse().join('');
// console.log(ar);

// const arr = [1,2,3,4,5,6,7,8,9,10];
// // let re = []
// // for(let i =  arr.length-1 ; i >=0 ;i--){
// //     re.push(arr[i])
// // }
// let l = 0 ;
// let r = arr.length-1;
// while(l<r){
//    [arr[l],arr[r]] = [arr[r],arr[l]];
//    l++;
//    r--;
// }

// const arr ='hello';
//   const s = arr.split("");
// let l = 0 ;
// let r =s.length-1;
// while(l<r){
//    [s[l],s[r]] = [s[r],s[l]];
//    l++;
//    r--;
// }

// console.log(s.join(''));

// for(let i = 0 ; i < arr.length-1;i++){}
// const arr = [1,3,2,4,2,5,6,7,5,3,2,3,5,6];
// let re = [];
// for(let i = 0 ; i < arr.length-1;i++){//time o(n^2) space o(n). includes () is o(n) , so nested loops gives you o(n^2);
// if(!re.includes(arr[i])){re.push(arr[i])}
// }
// console.log(re);

// const arr = [1,3,2,4,2,5,6,7,5,3,2,3,5,6];//time o(n) space o(n).
//  function removeDuplicates(arr){
//     return [...new Set(arr)]
//  }
//  console.log(removeDuplicates(arr));

// function isPalindrome(str){
//     let char = str.split('').reverse().join('');
//     return char===str;
// }
// console.log(isPalindrome("amadama"));

// function isPalindrome(str){
//     let l = 0 ;
//      let r = str.length-1;
//      while(l<r){
//     if(str[l]!==str[r]){
//         return false;
//     }
//     l++;
//     r--;
//      }
//      return true;
// }
// console.log(isPalindrome('madama'));

// function twoSum(arr,tar){
// let map = {};
// for(let i = 0 ; i < arr.length ; i++){
//     let x = tar - arr[i];
//     if(x in map ){
//         return [i,map[x]];
//     }
//     map[arr[i]] = i;
// }
// }
// console.log(twoSum([1,3,2,6],8));

// function twoSum(arr,tar){
// let map = new Map();
// for(let i = 0 ; i < arr.length ; i++){
//     let x = tar - arr[i];
//     if(map.has(x)){
//         return [map.get(x),i];
//     }
//     map.set(arr[i],i)
// }
// }
// console.log(twoSum([1,3,2,6],8));

// function Anagrams(s,t){
//     if(s.length!==s.length){return false};

//     let map = new Map();

//     for(const char of s){
//         map.set(char,(map.get(char) || 0)+1);
//     }
//     for(const ch of t){
//         if(!map.get(ch)){
//             return false;
//         }
//         map.set(ch,map.get(ch)-1);
//         if(map.get(ch) === 0 ){
//             map.delete(ch)
//         }
//     }
//     return map.size===0
// }
// console.log(Anagrams('cllsa','clsal'));

// function firstNonRepeating(arr) {
//     let map = new Map();
//     for (const cha of arr) {
//         map.set(cha, (map.get(cha) || 0) + 1);
//     }
//     for (const char of arr) {
//         if (map.get(char) === 1) {
//             return char;
//         }
//         return null;
//     }
// }
// console.log(firstNonRepeating([1, 5, 7, 1, 5, , 7]));

// const arr = [1,2,3,4,5,6,7,8,9,0,0]
// const sortAscending = arr.sort((a,b)=>b-a);
// console.log(sortAscending);

const arr = [5, 3, 8, 4, 2];

function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr;
}

// function bubbleSort(arr) {
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//     return arr;
// }
console.log(bubbleSort(arr));
