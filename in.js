// var is function scoped :
// old version of javascript
// in a parent function it will be used completely
// It  adds directly to the window object


// function name(){
//     var a='hi'
//     console.log(a);
// }
// name()
// console.log(a);

// function abcd(){
//     for(var i=0;i<12;i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abcd()

//let and const not newer version
//let and const is braces scoped (it will used only in the braces thats it)
//let and const not directly added to the window object
// function abcd(){
//     for(let i=0;i<12;i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abcd()


//  let a=null

//  console.log(a)

//stack and heap memory(storing of the intermediate data)

//execution context: It is imaginary container where the function code is going to be executd , it is going to create when the function is called or executed and it contains three things that are variables,functions ,lexical environment
// execution context (when the function is exceuted the function makes the imaginary container and in it having three properties )
// 1)variable
// 2)functions which was inside the parent function (which  was inside the imaginary conatainer)
// 3)Lexical environment of that functions


//Lexical environment:It ia a chart which is going to tell the functions about which are the variables and 
// functions which is going to be accessed
//Lexical environment of a  function which is going to teel the scope of the function and its scope chain also



//Reeferece of values
// let a=45;
// let b=a
//  b=b+1
// console.log(a,b);
// let array=[1,2,3,4,5]
// let ba=array
// ba.pop()
//it is just referung to copy this use spread operator

// let array=[1,2,3,4,5]
// let ba=[...array]
// ba.pop()
// console.log(array,ba);


//truthy and falsy values
//falsy value= 0,false,undefined,null,NaN,document.all
// let a=null;
// if('harsh'){
//     console.log('hey');
// }
// else{
//     console.log('hello');
// }

//forEach //for arrays 
// var a=[1,22,33,2,5,4,7]

// for(let i=0;i<a.length;i++){
//     console.log(a[i]+2);
// }
// console.log(a);
// a.forEach(function(ar){
//     console.log(ar+2);
// })

// a.forEach((an)=>{
// console.log('Bindusagana'); 
// })

var obj={
    name:'y',
    age:245
}

// for(let key in obj){
//     console.log(key);
// } for printing the keys

// for(let key in obj){
//     console.log(obj[key]);
// }  for printing the value

// for(let key in obj){
//     console.log(key,obj[key]);
// }


// do while loop



//callback functions :The functions which are going to be executed after some time is known as the callback functions when the time completes the function come ti js and tells that i am completed then that code will be executed using call back functions
//when you want run the code after sometime 
// setTimeout(()=>{

//     console.log('hi');

// },2000)
// setTimeout(()=>{
// console.log('rakshith');
// },2000)



// console.log('n');

// function fetchData(callback) {
//     // Simulate fetching data asynchronously
//     setTimeout(function() {
//         const con = 'Some data from the server';
//         callback(con); // Invoke the callback function with the fetched data
//     }, 1000); // Simulate a delay of 1 second
// }

// function processData(data) {
//     console.log('Processing data:', data);
// }

// fetchData(processData); // Pass the processData function as a callback



//first class functions:In js we can use the function in variable as value



// var a=function(){
    
// }

// function abcd(a){
// a()
// }
// abcd(function(){console.log('hey');})
// abcd(()=>{console.log('ko');})



// let c=[2,5]
// function an(a){
//     console.log(a);
// }
// an(c)



//how arrays are made in javascript
// var a=[1,2,3]
// a[3]=4

// a[-1]=8


// var a={
//     name:'rakshi',
//     age:'23',
// }
// a.age=22
// delete a.age
// console.log(a);

