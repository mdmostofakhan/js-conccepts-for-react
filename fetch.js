// 1. JSON => stringify, parse

const student = {
    name: 'shipon',
     id: 33, 
     code: 'www',
      job: 'webdevoloper',
      subject: ['physic', 'mathe', 'chemistry']
};

const studentJson = JSON.stringify(student);
// console.log(studentJson);
// console.log(student);
const studentObj = JSON.parse(studentJson);
// console.log(studentObj);

// 2. fetch

// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));


// keys. value
const key = Object.keys(student);
const value = Object.values(student);
// console.log(key);
// console.log(value);

// for
const numbers = [33, 43, 53, 56, 65, 43]
// numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop 0n an object using for in

  
// add or remove from an array
const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 6000, brand: 'iphone', color: 'gold'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'black'},
    {name: 'computer', price: 70000, brand: 'samsung', color: 'primary'},
    {name: 'sunglass', price: 300, brand: 'bangla', color: 'yellow'},
    {name: 'keybord', price: 2500, brand: 'chin', color: 'red'},
]

const newProduct = { name: 'webcam', price: 700, brand: 'Lal'}

// copy products array and then add newProduct
const newProducts = [...products, newProduct]
// console.log(newProduct)

// create a new array without one specific item
// remove phone means create a new array without then phone

const remainnig = products.filter(p => p.name !== ('computer'));
console.log(remainnig);