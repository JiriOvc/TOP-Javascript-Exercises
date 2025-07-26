// Exercise 1: Calculator

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

function palindromes(word) {
    let normal = 
    word
    .toLowerCase()
    .split("")
    .filter((char => /[a-zA-Z0-9]/.test(char)))
    .join("");

    let backwards = 
    word
    .toLowerCase()
    .split("")
    .filter((char => /[a-zA-Z0-9]/.test(char)))
    .reverse()
    .join("");

    console.log(normal)
    console.log(backwards)

    if (normal === backwards) {
        return true
    } else {
        return false
    }

}

console.log(palindromes("Racecar"))
console.log(palindromes("A car, a man, a maraca."))
console.log(palindromes("Animal loots foliated detail of stool lamina."))
console.log(palindromes("ZZZZ car, a man, a maracaz."))

