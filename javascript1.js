// const strObject={
//     id:0,
//     name:"debug",
//     company:"Google"
// };
// console.log( typeof strObject);


// // this is a JSON format 
// const strJson=`{
// "id": 0,
// "name": "debug",
// "company": "google"
// }`
// console.log( typeof strJson);

// const parsed = JSON.parse(strJson);
// console.log(parsed);


// let string = JSON.stringify(strObject);
// console.log(string);


// var a= {
//     b:"name",
//     c: 2,
//     d:false
// }
// // This is shallow cloning
// const g= {...a};

// console.log(a===g);


// // 
// const ar= ["jdk","kdk/dj","lflf"];
// console.log(...ar);

// const ob={
//     a:"32",
//     b:"jj",
//     c:"kd"
// }
// const obj={
//     d:"34",
//     g:43
// }
// console.log();


// let arr=[1,2,333,4,5,6,7];

// let a = Math.max(...arr);

// console.log(a);

// const v="marked";
// console.log(...ar,...v);

// const team= ["team","team1"];
// const team2= ["maet","1maet"];
// // This concatanation
// console.log(team.concat(team2));


    //    spread operater in function calls 

    // console.log(Math.min(3,343,5,45,756,77,43,2,1));



    // const o = [4,34,343,5,4,3434,23,45,677,80];

    // console.log(Math.max(...o));

                            //   [this is mutable ]mutability with spread opertor
        // const todos = [
        //     {
        //         task: 'reading',completed: true
        //     },{
        //         task: 'painting',completed : false
        //     }
        // ];
        // function addToDo(newtodo){
        //     todos.push(newtodo);
        // }

        // const newList = addToDo({task:'recording',completed: false});

        // console.log(todos);  //this is not correct way ,correct way is written down



        // const todos = [
        //     {
        //         task: 'reading',completed: true
        //     },{
        //         task: 'painting',completed : false
        //     }
        // ];
        // function addToDo(newtToDo) {
        //     return[
        //         ...todos,{...newtToDo}
        //     ]
        // }

        // const newList = addToDo({task:'recording',completed: false});

        // console.log(todos);
        // console.log(newList);



        
        // Template literals 

    
        // const vr="dlkjljs";//single line
        // const vrr="dlkfjljs";//single line
        // const vrrr= `dkjskfslfkjkfjdfkldffd   
        //  fdkjfjdjfdfkjdfkf`;//multi line 


        // const productName = "pen ";
        // const price= 13;
          
        // const value = `The ${productName} is ${price}  Rs.`;

        // const msg = ` The  Product is ${price > 10 ? "costly. " : "cheap."}`;

        // console.log(value);
        //  console.log(msg);



// Tagged Templates → special functions can process template literals.

// function tag(strings, value) {
//   return strings[0] + value.toUpperCase();
// }
// console.log(tag`hello ${"vyasasan"}`); // Hello VYAS



// function myfun(para){
//     console.log("Hello World",para);
// }

// const values = [1,2,3,4,5,6,7];

// values.forEach(myfun);


// There is another type funtion called anonymous functions . anonymous functions are nameless functions
   
//   const values = [1,2,3,4,5,6,7];

// values.forEach(function (para){ //This is a anonymous funtion. it can be used as arguments
//     console.log("Hello World",para);
// });

//  const fn=function (para){
//      console.log("Hello World",para);
//   };
  
// The anonymous  fn can only be called after decalaration. but normal fn can be used called .

// Arrow function
// it is new way of writing anonymous functions


// const fn = (a,b) => a+b;// we can write like this ,if the parameter is  single line .

// const add= fn(2,3);
// console.log(add);



// const fn = a => a+44;//if one argument is present we can remove the paranthese in the parameter 

// const add=fn(4);
// console.log(add);


// if we want to return object we want to use paranthese outside the curly braket of object

//  const fn = () => ({a:"dfjl",
//     b: 4
// });
// console.log(fn());


// Normaly we can write object in this way

// const fn = () => {
//     return{
//         a:"dkfj",
//         b:4
//     };
// };
// console.log(fn());



// const fn = {
//     a:5,            // we can console here but in arrow fn we cannot
//     b:4,
//     method: function(){
//         return this.a+ this.b;
//     }
// };

// console.log(fn.method());


// const fn = {     a:5,

//     b:4,                      //here it shows NAN
//     method: ()=>{
//         return this.a+this.b;
//     }
// };

// console.log(fn.method());




//  This is too hard ,to avoid this we use arrow function
// function addToCard(){
//     this.productName="laptop";
//     this.getProduct = function(){
//         console.log(this);
//         const that = this;
//         setTimeout(function(){
//             console.log(that);
//             console.log(that.productName)
//         },1000);
//     }

// }

// let ob =new addToCard();
// ob.getProduct();


// changed to arrow function
// function addToCard(){
//     this.productName="laptop";
//     this.getProduct = function(){
//         console.log(this);
//         setTimeout(()=>{
//             console.log(this.productName)
//         },1000);
//     }

// }

// let ob =new addToCard();
// ob.getProduct();

// const names= ["naem","jdk","kdjk","kdfj"];
// const re= names.map(na=> na.toUpperCase());
// console.log(re);



