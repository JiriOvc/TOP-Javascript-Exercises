
function repeatString(string, num) {
    let longString = "";
    for (let i = 0; i < num; i++) {
    longString += string
    }
    return longString
}

console.log(repeatString("Hello", 2))

function reverseString(string) {
    // create array out of string
    return string
    .split("")
    
    // reverse string order
    .reverse()

    // join string back together
    .join("")
}

console.log(reverseString("Hello beautiful world"))

function removeFromArray(array, remove) {
    let pos = array.indexOf(remove);
    array.splice(pos, 1,)
    return array
}


let array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(removeFromArray(array, 2))


function sumAll(a, b) {
    let result = 0;
    if (a < 0 || b < 0){
        return "ERROR"
    }
    if (a > b) {
        let newA = a
        a = b
        b = newA
    }

    for (let i = a; i <= b; i++) {
        result += i
    }
    return result
}

console.log(sumAll(123, 1))

function leapYears(year){
    if (year === undefined) {
        console.log(`Plese enter year`)
    }
    else if (year % 100 === 0 && year % 400 !== 0 ) {
        console.log(`No, ${year} is not a leap year.`)

    } else if (year % 4 === 0 || year % 400 === 0) {
        console.log(`Yes, ${year} is a leap year.`)
    } else {
        console.log(`No, ${year} is not a leap year.`)
    }
}

leapYears(700)

function convertToCelsius(tempInF) {
    let tempInC = (tempInF - 32) * 5/9
    let tempInCRounded = Math.round(tempInC * 10) / 10
    console.log(`${tempInF} degrees Fahrenheit is ${tempInCRounded} degrees Celsius`)
}

convertToCelsius(-100)

function convertToFahrenheit(tempInC) {
    let tempInF = (tempInC * 9/5) + 32
    let tempInFRounded = Math.round(tempInF * 10) / 10
    console.log(`${tempInC} degress Celsius is ${tempInFRounded} degrees Fahrenheit.`)
}

convertToFahrenheit(-10)

