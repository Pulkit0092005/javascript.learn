// function greet(name) {
//     return `Hello, ${name}`;
// }

// const msg =greet("pulkit");
// console.log(msg);
// console.log(greet("means"));
// rest and spread operator (...)
const person = {email: 'abc@gmail.com',password:'12345'};
const oldAdmin={}
oldAdmin.email=person.email
oldAdmin.password=person.password
const admin ={...person,role:"admin"};
console.log(admin);
console.log(person);
const arr1=[10,20,30,40];
const arr2=[...arr1,50,60];
console.log(arr1);
console.log(arr2);
//  rest operator
const sum=(...args)=>{
   console.log(args);
}
sum();
sum(10);
sum(10,20);
sum(10,20,30);
sum(10,20,30,40);
sum(10,20,30,40,"hello");
sum(10,20,30,40,"hello",false);
sum(10,20,30,40,"hello",false,{uname:"abc",type:"kuchv"});
const test=(num1,num2,...rest)=>{
    console.log("spread operator v2");
    console.log(num1);
    console.log(num2);
    console.log(rest);
};
test(10,20);
test(10,20,30,40);
test(10,20,30,40,50,60,70,80);