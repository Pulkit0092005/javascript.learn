import {products} from './products_100.js';
// console.log(products);
products.forEach(p => console.log(p.name, p.price));
//store name ,rating and price
const newProducts = products.map((p) =>{
    const {name, rating, price} = p;
    return {name, rating, price};
});
console.log(newProducts);
//name,price,category,total price=price*quantity
const newProducts2 = products.map((p) =>{
    const {name, price, category, quantity} = p;
    return {
    name,
    price,
    category,
    totalPrice: price * quantity,
}
});

console.log(newProducts2);
const newProducts3 = products.filter(p => p.rating > 4);
console.log(newProducts3);