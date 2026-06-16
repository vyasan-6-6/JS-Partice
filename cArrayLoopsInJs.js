
            //  function findeven(n){
            // if(n%2==0){
            //     console.log("it is even number.");
            // }return 0;
            //  };
            //  findeven();

            //  function findOdd(n){
            //     if(n%2!==0){
            //         console.log("it is odd number.");
            //     };
            //     return 0;
            //  };

            //  findOdd(5);

            ////////////

//   let arr= [0,10,20,30]
//             let result = [];
//             for(i=0;i<arr.length;i++){
//                 if(arr[i]>10){
//                     result.push(arr[i]);
//                 } 
//                     }
// console.log(result);

////////////////
// const arr = [1,2,3,4,5];

// const result = [];
// for(let i = arr.length-1;i>=0; i--){
//     result.push(arr[i]);
// };
 
// console.log(result);

 //////////find prime no.
// let num = 7;
// let isPrime = true;
// for(let i=2;i<num;i++){
//     if(num%i===0){
//         isPrime = false;
//         break;
//     }
// };

// if(isPrime){
//     console.log("it is prime number");
// }else{
//     console.log("not a prime  number");
    
// }

//////////find prime no. in an array
// const arr = [3, 4, 7, 9, 11, 12];
// const result=[];
// let isPrime  = true;
// for(let i =0; i<arr.length;i++){
//    let num = arr[i];
//    let isPrime = true;
//    for(let j =2;j<num;j++){
// if(num%j===0){
//     isPrime=false;
//     break;
// }
//    } 
//    if(isPrime){
//     // console.log(num + " is prime");
//     result.push(arr[i])
//    }
// }
 
// console.log(result);


// -------------------------- REVERSE A STRING  BY LOOP AND JS IN-BUILD FUNCTION-----------------

// function revereString(str){
//    let reversed = "";
//    for(i=str.length-1;i>=0;i--){
//       reversed +=str[i];
//    }
//    return reversed;
// }
// console.log(revereString("nam  lufrewop  a si nasayv"));


// shortcut way

// function  revereString(str){
// return str.split("").reverse().join("")
// };

// console.log(revereString("vyasan "));



// ---------------------WRITE A FUNCTION THAT RETURNS THE LONGEST WORD IN THE SENTENCE-------------

// function findLongestWord(sentence){
//    let longestWord = "";
//    const words = sentence.split(" ");

//    for(let word of words){
//       if(word.length > longestWord.length){
//          longestWord  = word;
      
//       }
//    }
//        return longestWord;
// }
// console.log(findLongestWord(" i am vyasan from the india hindustain "));


// ------------------------------WRITE A FUNCTION THAT CHECKS WHETHER A GIVEN STRING IS A PALINDROME OR NOT ?-----------------

// function isPalindrome(str){
//    let reversedStr = str.split("").reverse().join("");
//    return str === reversedStr;
// }

// console.log(isPalindrome("rarar"));



// function isPalindrome(str){
//   let reversed = "";
//   for( let i = str.length-1; i>=0;i--){
//    reversed += str[i];
//   } 
//   return str === reversed;
    
// }

// console.log(isPalindrome("rarar"));


// -------------------QRITE A FUNCTION TO REMOVE DUPLICATE EMELMENTS FROM AN ARRAY.-----------

// function removeDuplicates(arr){
//   let uniqueElements = [];
//   for(let i = 0;i<arr.length;i++){
//    if(uniqueElements.indexOf(arr[i] === -1)){
//       uniqueElements.push(arr[i]);
//    }
//   }
//   return uniqueElements;
// };

// console.log(removeDuplicates([1,2,3,4,4,5,5,6,7,8,6,5,4]));




// function removeDuplicates(arr){
//    return  [...new Set(arr)]
// }
 
// console.log(removeDuplicates([1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,0]));

// ------------------------------- WRITE A FUNCTION THAT CHECKS TWO STRINGS ARE ANAGRAMS OR NOT ----------------------------

// function areAnagrams(str1,str2){
//     const str = str1.split("").sort().join("");
//     const st = str2.split("").sort().join("");
//     return str === st;
// }

// console.log(areAnagrams("silent","listen"));



//----------------------------------------- WRITE THE FUNCTION THAT RETURNS THE NUMBER OF VOWELS IN A STRING ----------------------------------------

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

// console.log(countVowels("Hello , World A IO"));


// -----------------------------------------------WRITE IN A FUNCTION TO FIND TLARGEST NUMBER IN AN ARRAY ----------------

// function findLargestNumber(arr){
//     let largest = arr[0];

//     for(let n of arr){
//         if(n>largest){
//          largest = n;            //n is the value 
//         }                          
//     }
    
//     return largest;
// }

// console.log(findLargestNumber([2,4,5,90,80]));

// function findLargestNumber(arr){
//     let largest = arr[0];
// for(let i = 1 ; i<arr.length ; i++){        //i = index
//         if(arr[i]>largest){
//             largest = arr[i];
//         }
//     }
    
//     return largest;
// }

// console.log(findLargestNumber([2,4,5,90,80]));

// ----------------------------------------------------------- find the second largest number ------------------------


// function secondLargest_Sec(arr){
//     if(arr.length<2) return null;

//     let larg = arr[0];
//     let sec = null;

//     for(let i = 1 ; i<arr.length ; i++){
//       if(arr[i]>larg){
//       sec = larg;
//       larg = arr[i];
//       }else if (arr[i]!==larg && (sec === null || arr[i] >sec)){
//         sec = arr[i];
//       }
//     }return sec;
// }

// console.log(secondLargest_Sec([1,2,3,4,5,6,7,8]));
// to find  second smallest just change the > to <;

// ---------------------------------nth largest number --------------------

// function nLargest(arr,n){
    //     if(arr.length < n) return null;
    
    //     let Ntop = [];
    //     for(let i = 0 ; i<arr.length ; i++){
        
    //         let  num = arr[i];
    
    //         if(Ntop.includes(num)) continue;
    //         Ntop.push(num);
    
    //         Ntop.sort((a,b)=>b-a);
    
    //         if(Ntop.length > n){
        //             Ntop.pop();
        //         }
        //     } 
        //     return Ntop[n-1] || null;
        
        // }
        // console.log(nLargest([2,4,6,1,3,5,7,90,900]));
        
        

        
// function secondLargest_Sec(arr){
//     if(arr.length<2) return null;

//     let larg = arr[0];
//     let largIn = 0;
//     let sec = null;
//     let secIn = null;

//     for(let i = 1 ; i<arr.length ; i++){
//       if(arr[i]>larg){
//       sec = larg;
//       secIn = largIn;
//       larg = arr[i];
//       largIn = i
//       }else if (arr[i]!==larg && (sec === null || arr[i] >sec)){
//         sec = arr[i];
//         secIn = i;
//       }
//     }return {Index:secIn , value:sec};
// }

//         console.log(secondLargest_Sec([1,2,3,4,5,6,7,8]));
//  -----------------------------------------

//   function secondLargestWithCount(arr) {
//   if (arr.length < 2) return null;
  
//   let largest = arr[0];
//   let secondLargest = null;
//   let count = 0;
  
//   for (let i = 1; i < arr.length; i++) {
//     let num = arr[i];
    
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//       count = 1; // Reset count for new second largest
//     } else if (num !== largest && (secondLargest === null || num > secondLargest)) {
//       secondLargest = num;
//       count = 1;
//     } else if (num === secondLargest) {
//       count++;
//     }
//   }
  
//   return {
//     value: secondLargest,
//     count: count
//   };
// }

// console.log(secondLargestWithCount([5, 2, 9, 7, 7, 1])); 
// // { value: 7, count: 2 }

// ----------------------------------------FIND COUNT OF VOWELS IN THE STRING WITHOUT DUPLICATES----------------



// let str = "mentorbroStudents";
// let vowels = "aeiou";
// let uniq = [];

// for(let char of str.toLowerCase()){
//   if(vowels.includes(char)){
//     if(!uniq.includes(char)){
//       uniq.push(char);
//     }
//   }

// };

// console.log(uniq);

// console.log(uniq.length);

// // in function 

// function vowelsCount(str){
//   let vowels = "aeiou"
//   let uniq = '';

//   for(let char of str){
//     if(vowels.includes(char) && !uniq.includes(char)){
//       uniq += char;
//     } 
//   }
//   return uniq.length;
// }
// console.log(vowelsCount("mentorbroStudents"));


// -------------MOVE ZERO'S TO END OF THE ARRAY----------

// const arr = [2,0,3,9,0,2,8,0,9,4];
// let index = 0;

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]!==0){
//         arr[index] = arr[i];
//         index++;
//     }
// }
// while (index<arr.length){
//     arr[index++]=0;
// }
// console.log(arr);

//in function 

// function moveZerosToEnd(arr){
//     let index = 0;
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i]!==0) {
//             arr[index++] = arr[i];
//         }
//     }
//     while(index < arr.length){
//       arr[index++] = 0;
//     }
//     return arr;

// }

// console.log(moveZerosToEnd([1,0,2,0,3,4,0,5,0,6,9,0,9]));



// function counter(){
//     let count = 1;//private variable

//     return{
//         incre:function(){
//           return  count++;
//             // return count;
//         },
//         decre:function(){
//            return count--;
//             // return count;
//         },
//         reset:function(){
//             return count;
//         }
//     }
// };

// const count = counter();

// console.log(count.incre());
// console.log(count.decre());
// console.log(count.reset());
 

// Array.prototype.last = function(){
//     if(this.length ===0){
//         return -1;                              
//     };
//     return this[this.length-1];
// };

// const a = [2,2,24,4,5,6];
// console.log(a.last());




// function compressString_forLoop(str) {
//     /**
//      * Time: O(n), Space: O(1)
//      * 
//      * Simpler approach using for loop
//      */
//     if (str.length === 0) return '';
    
//     let result = '';
//     let count = 1;
    
//     for (let i = 0; i < str.length; i++) {
//         // If next character is different or end of string
//         if (i + 1 >= str.length || str[i] !== str[i + 1]) {
//             result += str[i] + count;
//             count = 1;
//         } else {
//             count++;
//         }
//     }
    
//     return result;
// }

// console.log(compressString_forLoop("abbaacccdddla"))



//  let len = nums.length;
//     let xor1=0,result=0;


//     for(let i = 0 ; i < len ; i++){
//         xor1 ^= nums[i];
//         result ^= (i+1);
//     }
//     return xor1 ^ result;


// let n = [1, 2,5,7,11]; 

// console.log(missinNo(n));

// function missinNo(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] - arr[i] > 1) {
//       for (let j = arr[i]+1; j < arr[i+1] ; j++) {
//         res.push(j);
//       }
//     }
//   }
//   return res;
// }

// //output : [ 3, 4, 5 ]


// const str = "mentorbroStudents";
 
// const vowels = ["a","e","i","o","u"];
// let count=0;
// const uniq = new Set()
// for(let char of str){
//   if(vowels.includes(char)){
//    uniq.add(char) 
//   }
// }

// console.log(uniq.size);



// function nonRepeatingChar(str){
//   const count = {};

//   for(let ch of str){
//    count[ch] = (count[ch] || 0)+1;
//   }

//   for(let ch of str){
//     if(count[ch] === 1){
//       return ch;
//     }
//   }
//   return null;
// }

// console.log(nonRepeatingChar("leetcode"));


// function noRepeating(str){
//   let count ={};
//   for(let ch of str){
//     count[ch] = (count[ch] || 0)+1;
//   }

//   for(let ch of str){
//     if(count[ch] === 1){
//       return ch;
//     }
//   }
//   return null;
// }
// console.log(noRepeating("swiss"));


            

// const arr = [55,54,56,73,90,85];
 
// arr.filter((a)=>{
//     return a
    
// })


// const person ={
//     name:"vyasan",
//     phone:342323,
// }

// console.log(person.phone);

// console.log(Array.isArray([3,24,43,4]))
// const date = new Date();
// console.log(date instanceof Date
// )

// console.log(Object.prototype.toString.call(null));

//   let num = "10";
//   let n = 103;
// console.log(parseInt(num))
// console.log(n);
// parseInt("399");
// console.log(parseFloat("3"))


//  function fetchData(){
//     return new Promise((re,rej)=>{
//         setTimeout(() => {
//             re("setted");
            
//         }, 2000);
//     })
//  }

//  fetchData().then(resu=>{console.log(resu);
//  }).catch(er=>{console.error(er);
//  })

//  async function show(){
//     const data = await fetchData();
//     console.log(data);
    
//  }
//  show();

//  const arr=[1,2,3,4,5,6,7,8,9,10];
// let re=[]
//  for(let i =0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         re.push(arr[i])
//     }
//  };

//  console.log(re);
 
//  const even = arr.filter((it)=>it%2==0)
//  console.log(even);
 
//  let whie =0
//  while(arr.length>whie){
// console.log(whie);
// whie++;
//  }
  
//  const person ={
//     name:"vyas",
//     age:38
//  }
//  person.home = "kunj"
//  let key = "country";
//  person[key] = "india"
//  const persons = {
//     ...person,
//     love:"god"
//  }

//  console.log(person);
 
//  const forEac = arr.forEach(function(it,inf){
//     console.log(`${inf} : ${it}`)
    
//  }
 
//  )
 
//  arr.filter((i,index,array)=>{
//     console.log(array);
    
//  });
 
 
//  arr.map((i,ind,array)=>{
//     console.log(ind);
    
//  });

//  const findd = arr.find((i,ind,array)=>{
//     console.log(i*i);
//     return i+6
//  })
//  console.log("findd",findd);
 
//  const mapp = arr.map((i,ind,arr)=>{
//     return i*2
//  });

//  const ree = arr.reduce((acc,i)=>acc+=i,0)

//  console.log(ree);
 
//  const result = arr.flatMap(x=>x%2===0 ?[x]:[]);
//  console.log(result);
 

//  const arrr = [1,2,3,4,5];
//  const array= [1,2,3,4,5];
  
//  arrr.splice(1,0,2,3);
 
//  console.log("splice",arrr);
 
//  const arrays = array.slice(1,3)

//  console.log("array",arrays);
 