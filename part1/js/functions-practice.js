//STEP 1
function halfNumber(num) {
    "use Strict";
    var result = num / 2;
    return "Half of " + num + " is " + result;
}

//STEP 2
function squareNumber(num) {
    "use Strict";
    var result = num * num;
    return "The result of squaring the number " + num + " is " + result;
}

//STEP 3
function percentOf(num1, num2) {
    "use Strict";
    var result = (num1 * 100) / num2;
    return num1 + " is " + result + "% of " + num2;
}

//STEP 4
function findModulus(num1, num2) {
    "use Strict";
    var result = num2 % num1;
    return result + " is the modulus of " + num1 + " and " + num2;
}

//STEP 5

function findSum() {
    "use Strict";
    var i;
    var sum = 0;
    var numbers = window.prompt("Enter numbers seperated by commas");
    numbers = numbers.split(",");
    for(i = 0; i < numbers.length; i++){
        sum += parseInt(numbers[i]);
    }
    return sum;
}


window.console.log(halfNumber(5));
window.console.log(squareNumber(5));
window.console.log(percentOf(5, 2));
window.console.log(findModulus(5, 3));
window.console.log(findSum());