let operator = ""

//create function for add, subtract, multiply and divide

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

let prevNum = ""
let currentNum = ""

let counter = false;

//create new function that takes in 2 numbers and an operator
//then calls one of the above functions
function operate(){

    num1 = Number(currentNum)
    num2 = Number(prevNum)

    console.log("This is the first" + num1)
    console.log("this is the 2nd " + num2)
    let result = 0;

    switch(operator){

        case '+':
            result = add(num1,num2);
        break;

        case 'x':
            result = multiply(num1,num2);
        break;

        case '-':
            result = subtract(num1,num2);
        break;
        
        case '/':
            result = divide(num1,num2);
        break;
    }

    display.textContent = result
    currentDisplay.textContent = " "
    prevNum = result;
    return result;
}

function numClicked(e){
    // make sure the number has less than 7 digits
    
    if(e.target.value <= 6)
    {
        prevNum += e.target.value
    }    
    display.textContent = prevNum
}

function operatorClicked(e)
{
    currentNum = prevNum
    operator = e.target.value
    console.log("this is the " + operator)
    currentDisplay.textContent = prevNum + " " + operator 
    display.textContent = " "
    prevNum = " "
    
}

//function for when the clear button is clicked
function clearClicked(){
   
    //reload the page
    location.reload();
}

//get access to display element
let display = document.querySelector('.display');

let currentDisplay = document.querySelector('.display-current')

//access the button numbers
const numButtons = document.querySelectorAll('.num');

numButtons.forEach( button => {
    button.addEventListener('click', numClicked);
})



//access equal button
let equal = document.querySelector('.equal');

equal.addEventListener('click', operate);

//access the operator buttons and create event listener
const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach( button => {
    button.addEventListener('click', operatorClicked )
    
})

//get access to clear button
const clear = document.querySelector('.clear');

clear.addEventListener('click', clearClicked);
