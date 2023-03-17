
const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 6000, brand: 'iphone', color: 'gold'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'black'},
    {name: 'computer', price: 70000, brand: 'samsung', color: 'primary'},
    {name: 'sunglass', price: 300, brand: 'bangla', color: 'yellow'},
    {name: 'keybord', price: 2500, brand: 'chin', color: 'red'},
]

const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {
    const result = product.brand;
    // console.log(result);
})

// 3. filter

const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const chepingName = products.filter(prd => prd.name.includes('w'));
// console.log(chepingName);

// 4. find
 const specials = products.find(pod => pod.name.includes('n'));
 console.log(specials);