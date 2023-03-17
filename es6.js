const numbers = [33, 3, 21, 75 ]

const student = {
    name: 'shipon',
     id: 33, 
     code: 'www',
      job: 'webdevoloper',
      subject: ['physic', 'mathe', 'chemistry']
};

// 1. template string
const abuot = `My Name is ${student.name}
 my student id ${student.id}
 my jod name ${student.job}
 also liked subjects ${student.subject[1]}
 my numbers ${numbers[0]};
 `;
// console.log(abuot);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const total = addSixtyFive(3);
// console.log(total);

const isEven = x => x % 2 == 0;
const addTeree = (x, y, z) => x + y + z;

const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum ;
}
const result = doMath(33, 44);
// console.log(result);

// spread operator
const newNumbers = [...numbers];

 numbers.push(99);
 numbers.push(99);
 numbers.push(99);

 console.log(numbers);
 console.log(newNumbers);

 // creat a new array from an plder array and add an element
 const currentNumbers = [...numbers, 66];

 console.log(numbers);
 console.log(newNumbers);
 console.log(currentNumbers);
