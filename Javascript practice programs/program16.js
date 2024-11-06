// Function example.
function greet1()
{
    console.log("Hello World!");
}

greet1();

// Function return example.
function greet2()
{
    return "Hello World Again!"
}

let str = greet2();
console.log(str);

// Function passing example.
function greet3(user)
{
    return `Hello ${user}!`
}

let user = 'Shadab';
str = greet3(user);
console.log(str);

// Function expression example.
let add = function(num1, num2){
    return num1 + num2;
}
let sum = add(5,6)

console.log(sum);

// Arrow function example.
let subtract = (num1, num2) => num1 - num2;
let result = subtract(11,6)

console.log(result);