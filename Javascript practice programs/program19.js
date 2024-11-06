// Set example
let nums = new Set("bookkeeper");
console.log(nums);

nums = new Set();
nums.add(3);
nums.add(4);
nums.add(3);
nums.add("Shadab");
nums.add("Abdul");
nums.add("Latif");
console.log(nums);

nums.forEach (value => {
    console.log(value);
});

// Map example
let map = new Map();
map.set("Shadab", "Java");
map.set("Abdul", "Android");
map.set("Latif", "ML");

// Mapping method 1.
for(let [k,v] of map){
    console.log(k, ":", v);
}

// Mapping method 2.
map.forEach((v,k) => {
    console.log(k, ":", v);
});

// Recursion example.
let num = 1;
function show(){
    console.log("Hi!", num);
    num++;
    if(num <= 5)
        show();
}
show();

// Finding factorial using recursion example.
function fact(n){
    if (n===0)
        return 1;
    else
        return n*fact(n-1);
}
num = 5;
let result = fact(num);

console.log(result);