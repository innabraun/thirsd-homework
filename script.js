
let firstNumber=+prompt("write your first number")
let operator=prompt("write one of this operators +, -, *, /")
let secondNumber=+prompt("write second number")




function calc(firstNumber, operator, secondNumber){
    switch (operator){
        case "+" : console.log(firstNumber+secondNumber);
        break;

        case "-" : console.log(firstNumber-secondNumber);
        break;

        case "*" : console.log(firstNumber*secondNumber);
        break;

        case "/": console.log(firstNumber/secondNumber);
        break;
    }
} calc(firstNumber,operator,secondNumber);


//доп задание
/*while(isNaN(firstNumber,secondNumber)){
    +prompt("your was incorrect, so write your first number");
    +prompt("your was incorrect, so write second number");
}*/




