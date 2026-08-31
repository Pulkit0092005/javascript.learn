// const hello =(a,b)=> a+b;
// console.log(hello(2,3));
// const msg=(name='guest')=> `Hello, ${name}`;
// console.log(msg);   
// console.log(msg("pulkit"));
// const msg2 =(name)=>{
//     let x = name || "guest";
//     return `Hello, ${x}`;
// }
// console.log(msg2());
// console.log(msg2("pulkit"));
const sumofdigit =(num)=>{
    let sum =0;
    while(num>0){
        let digit = num %10;
        console.log(num,digit);
        sum += digit;
        num = Math.floor(num/10);
        num=Number(num);
    }
    return sum;
}
console.log(sumofdigit(1234));