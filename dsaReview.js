// // class Node {
// //     constructor(value) {
// //         this.value = value;
// //         this.next = null;
// //     }
// // }
// // class LinkedList {
// //     constructor() {
// //         this.head = null;
// //         this.size = 0;
// //     }
// //     append(value) {
// //         const node = new Node(value);
// //         if (!this.head) {
// //             this.head = node;
// //         } else {
// //         let cur = this.head;
// //         while(cur.next){
// //             cur = cur.next
// //         }
// //         cur.next = node;
// //         }
// //         this.size++;
// //     }
// //     deleteMiddle(){
// //         let slow = this.head;
// //         let fast = this.head;
// //         let pre = null;

// //         while(fast !== null && fast.next !==null ){
// //             pre = slow;
// //             slow = slow.next;
// //             fast = fast.next.next;
// //         }
// //         pre.next = slow.next;
// //         return this.head;
// //     }
// //     print(){
// //         let cur = this.head;
// //         let listvalue ='';
// //         while(cur){
// //             listvalue +=` ${cur.value}`;
// //             cur = cur.next;
// //         }
// //         console.log(`list values : ${listvalue} `);
        
// //     }
// // }

// // const list = new LinkedList();

// // list.append(1)
// // list.append(2)
// // list.append(3)
// // list.append(4)
// // list.append(5)
// // list.deleteMiddle()
// // list.print()

// const arr = [2,4,6,8,9,12]
// function binarySearch(arr,tar){
// let l = 0 ;
//  let r = arr.length-1;
 
//  while(l<=r){
//     let mid = Math.floor((r+l)/2);

//     if(arr[mid] === tar){
//         return mid; 
//     }
//     if(arr[mid]< tar){
//         l= mid+1;
//     }else{
//         r = mid-1;
//     }
//  }
//  return -1;
// }
// console.log(binarySearch(arr,2));
