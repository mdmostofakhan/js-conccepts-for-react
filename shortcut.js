// 'almas', 5, true, {}, []
// '', 0, false, null, undefiend
// check truthy
let myVar = 5;
// check any truthy
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}
// console.log(myVar);


let myMoney = 50;
// you check negative or falsy anything
if(!myMoney){

}

const money = 600;
let food;
if(money > 100){
    food = 'biryani';
}
else{
    food = 'cha biscuit';
}
// console.log(food);

// ternart=y
let food1 = money > 100 ? 'biryani' : 'cha biscuti';
// console.log(food1);

const drink = (money > 100 || myVar > 100) ? 'coke' : 'filter water'
// console.log(drink);

// number to string conversion
 const num1 = 55;
//  console.log(num1);
 const numStr = num1 + '';
//  console.log(numStr);

// string to numbers
const input = "666";
const output = + input;
// console.log(output);

//
let isActive = false;
const showUser = () => console.log('display user')
const hideUser = () => console.log('hide user')
// isActive ? showUser() : hideUser();
// use && if the left side is true right side will ve executed
isActive && showUser();
// use || if the left side is true right side will ve executed
isActive || hideUser();

// toggol
isActive = ! isActive;