//6 destructuring

const fruits=["maçã","laranja","mamão"];

const [f1,f2,f3]=fruits;

console.log(f2);

const productDetails={
    name:"mouse",
    price:39.99,
    category:"perifericos",
    color:"cinza"
};

const {name: productname,price, category: productcategory, color}= productDetails;

console.log(`o nome do produto é ${productname}, custa R$${price},pertence a categoria ${productcategory} e é da cor ${color}`)