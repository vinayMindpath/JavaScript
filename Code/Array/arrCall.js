const { type } = require("os");

function Product(name,price){
    this.name = name;
    this.price = price;
    this.category = 'food';
};


function Food(name,price){
    Product.call(this,name,price);
    // this.category = 'food';
    console.log(this )
}

a = new Food('cheese',5)
console.log(typeof a);
console.log(a)

