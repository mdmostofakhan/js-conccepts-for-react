// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [43, 65]

// const [x, y] = numbers;


// console.log(x, y);

function boxify (num1, num2) {
    const nums = [num1, num2]
    return nums;
}

// const [first, second] = [54, 99];
const [first, second] = boxify(43, 54);

// console.log(boxify(43, 54));
const student = {
    name: 'shipon',
     id: 33, 
     code: 'www',
      job: 'webdevoloper',
      subject: ['physic', 'mathe', 'chemistry']
};

const [firstSubject, secondSubject] = student.subject;

// objects destructuring
const {age, id} = {name: 'mostfa', id: 'new'};

const {name, salary} = {name: 'mostfa', salary: 34444, age: 43, id: 'new'};

const employee = {
    ide: 'VS Code', 
    designation: 'developer',
    maching: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 60,
        weight: 45,
        address: 'Dhaka',
        drink: 'water',
        watch: {
            color: 'red',
            price: 5545,
            brand: 'garmi'
        }
    } 
}


const {maching, specification} = employee;
// console.log(maching, specification);

const {height, weight} = employee.specification;
// console.log(height, weight);

const {brand} = employee?.specification?.watch;
console.log(brand);