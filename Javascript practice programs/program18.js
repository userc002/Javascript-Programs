// Adding a number to array lineup example.
let values = [5,7,8];
values.push(10);

console.log(values);

// Mixed datatype array example.
let data = ['Shadab', 5, {tech: 'JS'}, function(){
    console.log("Hello World!");
}];

console.log(data);
data[3]();

// For of loop in array example.
let nums = [1,2,3,4,5];
for (let n of nums){
    console.log(n);
}

// For in loop with an array example.
for (let key in nums){
    console.log(nums[key]);
}

// Array destructuring example 1.
nums = [5,7,2,4]
console.log(nums);
[a,b,,d] = nums;

console.log(d);

// Array destructuring example 2.
let words = "My name is Shadab Sheikh".split(' ');
[a,b,c,d,e] = words;

console.log(d,e);

// Storing multiple members in a singe variable example.
[a,b,,...d] = words

console.log(d);

// Array For Each method example.
nums = [42,51,24,98,65,12];
nums.forEach((n) => {
    console.log(n);
});

// Array Filter, Map and Reduce example.
nums = [1,2,3,4,5,6]
let result = nums.filter(n => n%2 === 0);
console.log(result);
result = nums.filter(n => n%2 === 0).map(n => n*2);
console.log(result);
result = nums.filter(n => n%2 === 0).map(n => n*2).reduce((a,b) => a+b);
console.log(result);