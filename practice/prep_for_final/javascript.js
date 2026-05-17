// Map
let names = ["ali", "omar"]
let names2 = names.map((name) => {
     return name.toUpperCase();
});

let arr = [1, 2, 3, 4];
let newArray = arr.map(function(item) {
    return item * 2;
});

let arr1 = [10, 20, 30];
let NewArray1 = arr1.map(function(num, index) {
    return num + index;
});

// Filter
let prices = [100, 500, 1000, 50]
let NewPrices = prices.filter((item) => {
    return item > 200;
});

let arr2 = [-2, 5, -1, 8];
let posNums = arr2.filter(function(item) {
    return arr2 > 0;
});

let words = ["cat", "elephant", "dog", "tiger"];
let longWords = words.filter(function(word) {
    return word.length > 4;
});

let arr3 = [1,2,3,4,5,6];
let OddNums = arr3.filter(function(num) {
    return num % 2 != 0;
})

// Reduce
let numbers = [1, 2, 3, 4, 5]
let num = numbers.reduce((acc, cur) => {
    return acc * cur;
}, 1);

let arr4 = [1,2,3,4];
let sum = arr4.reduce(function(acc, num) {
    return acc + num;
}, 0);

let words1 = ["cat", "elephant", "dog"];
let longest = words1.reduce(function(long, word) {
    if(long.length <= word.length){
        return word;
    }
    return long;
}, words1[0]);

// mix
let nums = [5, 10, 15, 20];
let new_num = nums.filter(num => num > 10).map(num => num*3).reduce((acc, num) => acc + num, 0);

console.log(names2);
console.log(newArray);
console.log(NewArray1);
console.log(NewPrices);
console.log(posNums);
console.log(longWords);
console.log(OddNums);
console.log(num);
console.log(sum);
console.log(longest);
console.log(new_num);



// Optional chaining and nullish coalescing
let user = {
    name: "Ayau"
};

let city = user?.address?.city ?? "Unknown";

console.log(`Hello, ${user.name} from ${city}`);


// DOM
document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("text").innerText = "Hello, World!";
    document.querySelector(".url").setAttribute("href", "https://www.example.com");
})

