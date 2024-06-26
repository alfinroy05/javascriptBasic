console.log("hello world");
console.warn("hello world");
console.error("hello world");

var a = 10;
console.log(a);
var a = "name";
console.log(a);


let name = "john";
console.log(name);


const pi = 3.14;
console.log(pi);



let valueOne = 2;
let valueTwo = "a";

console.log(valueOne + valueTwo);

console.log(valueOne + parseInt(valueTwo));


const nam = "john";
const age=30;
const rating = 4.5;
const isCool = true;
const x = null;
var y;

console.log(typeof name);
console.log('my name is ' + name + ' and i am '+ age);
console.log('my name is ${nam} and i am ${age}');


// // array
arrayOne = ["john",30,true,null,undefined]

console.log(arrayOne);
 
// // push

arrayOne.push("apple");
console.log(arrayOne);


//pop

arrayOne.pop();
console.log(arrayOne);

//unshift

arrayOne.unshift("mango");
console.log(arrayOne);

console.log(arrayOne[3]);

arrayOne[3]="bananana";
console.log(arrayOne);

console.log(arrayOne.length);
arrayOne.splice(3,2);
console.log(arrayOne);


let valuee = 16;

if (valuee >= 18) {
    console.log("You are adult");
} else {
    console.log("You are a minor");
}

// ternary 

let ge = 20;

let type = (ge >= 18) ? "Adult" : "Minor"

console.log(type);



console.log("functions");
function showstring()
{
    console.log("hello world");
}

showstring();

var showstring = function()
{
    console.log("hello world");
}

showstring();

var showstring =() =>{
    console.log("arrow function hello world");

}

showstring();


//map

var number = [1,2,3,4];
 
var square = number.map((num) => {return num * num;

})

console.log(square);

var fruits = ["apple","banana","mango"];

var uppercase = fruits.map((fruit) => {
    return fruit.toUpperCase();
});

console.log(uppercase);


//ENHANCED OBJECT LIT6ERALS

var ame = "john";
var aage = 20;

var person = {
    ame,aage,isstudent: true
}

console.log(person);

//day 3

console.log("Function");

function showSting() {
    console.log("Hello World");
}

showSting();

var showString = function () {
    console.log("Hello World");
}

showSting();


var showSting = () => {
    console.log(" Arrow Function Hello World");
}

showSting();


// Map

var number = [1, 2, 3, 4, 5];


var square = number.map((num) => {
    return num * num;
})

console.log(square);

var fruits = ["Apple", "Banana", "Mango"];

var upperCase = fruits.map((fruit) => {
    return fruit.toUpperCase();
});

console.log(upperCase);

// Enhanced Object Literals

var name = "John";
var age = 20;

var person = {
    name,
    age,
    isStudent: true
}

console.log(person);

// Destructuring

var person = {
    name: "Akhil",
    age: 20,
    isStudent: true
}
var { name, age, isStudent } = person;

console.log(name);
console.log(age);
console.log(isStudent);

// promises

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 2000);
})

promise.then((reslut) => {
    console.log(reslut);
})


// ! Spread Operator

var numbers = [1, 2, 3, 4, 5];

var newNumber = [...numbers, 6, 7, 8];

console.log(newNumber);