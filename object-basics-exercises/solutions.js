// Exercise 1: Calculator

console.log("Exercise 1: Calculator")

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0)
};

const multiply = function(array) {
    if (array == ""){
        return 0
    } else {
    return array.reduce((total, current) => total * current, 1)
    }
};

const power = function(base, exponent) {
    let result = 1;
    for (i = 0; i < exponent; i++) {
        result *= base
    };
    return result
};

const factorial = function(number) {
    let result = 1;
    for (i = 0; i < number; i++) {
        result *= number - [i];
    }
	return result;
};

let factorial2 = function(number) {
    let result = 1;
    for (i = number; i > 0; i--) {
        result *= i;
    }
	return result;
};

console.log(add(2, 6));
console.log(subtract(-8, 7));
console.log(sum([1, 3, 5, 7, 9]));
console.log(multiply([2, 4, 6, 8, 10, 12, 14]));
console.log(power(3,10))
console.log(factorial(5))
console.log(factorial2(10))


// Exercise 2: Palindromes

console.log("")
console.log("Exercise 2: Palindromes")

function palindromes(string) {
    let normal = 
    string
    .toLowerCase()
    .split("")
    .filter((char => /[a-zA-Z0-9]/.test(char)))
    .join("");

    let backwards = 
    string
    .toLowerCase()
    .split("")
    .filter((char => /[a-zA-Z0-9]/.test(char)))
    .reverse()
    .join("");

    console.log(normal)
    console.log(backwards)

    return normal === backwards
}

console.log("--Test 1--")
console.log(palindromes("Racecar"))
console.log("--Test 2--")
console.log(palindromes("A car, a man, a maraca."))
console.log("--Test 3--")
console.log(palindromes("Animal loots foliated detail of stool lamina."))
console.log("--Test 4--")
console.log(palindromes("ZZZZ car, a man, a maracaz."))

// Exercise 3: Fibonacci

console.log("")
console.log("Exercise 3: Fibonacci")

function fibonacci(position) {
    if (position == 0) return console.log("0");

    if (position < 0) return console.log("Please use positive numbers only.");

    if (position > 0) {
    let fib = [0, 1]

        for (let i = 2; i <= position; i++){
        fib[i] = fib[i-1] + fib[i-2]
        };

        console.log(`Fibonacci sequence until chosen position: ${fib}`);
        console.log(fib[position]);
    }
}

fibonacci(10);

// Exercise 4: Get the Titles!

console.log("");
console.log("Exercise 4: Get the Titles!");

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];

function getTheTitles(array) {
    return array.map(item => item.title)
};

console.log(getTheTitles(books));

// Exercise 5: Find the Oldest

console.log("");
console.log("Exercise 5: Find the Oldest");

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]



function addAgeProperty(array){
for (let i = 0; i < array.length; i++) {
array[i].age = array[i].yearOfDeath - array[i].yearOfBirth
}
}


function findTheOldest(array) {
    
}

addAgeProperty(people)
console.log(people[0])
console.log(people[1])
console.log(people[2])





