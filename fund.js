// 1. How to declare a variable using let and const
const fatherName = 'Shamsuddin'
let season = 'rainy';
    season = 'winter';

// 2. condition
// 6 basic conditions: >, <, ===, !--, <==, >=
// multiple cinditions: &&, ||or 

if(fatherName === 'shamsuddin' || season === 'winter'){

}
else if (fatherName === 'Shamsuddin'){

}
else{

}

// 3. array declare
// index,
// length, push
const numbers = [33, 33, 21, 75, 43, 23]
numbers[3] = 666;
// console.log(numbers);

// 4. for loop
for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(number);
}

// 5. function
function multiple(num1, num2){
    const result = num1 + num2;
    return result
}
const total = multiple(33, 22);
// console.log(total);

// 6. objects
// 3 ways to accesse proparty by name
const student = {
    name: 'shipon',
     id: 33, 
     code: 'www',
      job: 'webdevoloper',
      subject: ['physic', 'mathe', 'chemistry']
};
const myJob = 'job';

// console.log(student);
console.log(student.subject); // direct proparty
console.log(student['id']); // accesse vai proparty by neme string 
console.log(student[myJob]); // accesse vai proparty name in a variable
