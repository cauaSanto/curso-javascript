//4 map

const products= [
    {name:'camisa', price:10.99, category: 'roupas'},
    {name:'chaleira elétrica', price:49.99, category: 'eletro'},
    {name:'fogão', price:400, category: 'eletro'},
    {name:'calça jeans', price:50.99, category: 'roupas'}
]

products.map((product)=>{
    if(product.category==='roupas'){
        product.onSale = true
    }
})

console.log(products)