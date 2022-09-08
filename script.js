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

//create array
let values = [];

//used to concatenate strings 
let currentNumElement = '';

//create new function that takes in 2 numbers and an operator
//then calls one of the above functions
function operate(num1, num2, operator){

    let result = 0;

    switch(operator){
        case "+":
        result = add(num1,num2);
        case "-":
        result = subtract(num1,num2);
        case "*":
        result = multiply(num1,num2);
        case "/":
        result = divide(num1,num2);
    }

    return result;
}

//function for when a number button is clicked
function numClicked(e){
    counter = true;
    let num = e.target.value;
    display.textContent += num;
    currentNumElement += num;
}

//function for when an operator button is clicked
function operatorClicked(e){
    let op  = e.target.value
    display.textContent += op
    addElementToArray(op)
}


//function will be used to store elements in the values array
function addElementToArray(element){

     //convert type number then add it to string
    values.push(Number(currentNumElement));

    //then initialize to empty string
    currentNumElement = '';

    //then push operand
    values.push(element);

    console.log(values);
}



function evaluate(){
    //convert type number then add it to string
    values.push(Number(currentNumElement));

    //then initialize to empty string
    currentNumElement = '';


    console.log(values);

    //get the three first elements in the array values 
    //check if the even elements are numbers 
    // check if the odd elements are string

}

//function for when the clear button is clicked
function clearClicked(){
   
    //initialize var to empty string
    currentNumElement = '';

    //remove all elements from values array
    values.splice(0, values.length);
    console.log(values);

    //clear the text on display element
    display.textContent = '';

}

//get access to display element
let display = document.querySelector('.display');

//access the button numbers
const numButtons = document.querySelectorAll('.num');

numButtons.forEach( button => {
    button.addEventListener('click', numClicked);
})

//access equal button
let equal = document.querySelector('.equal');

equal.addEventListener('click', evaluate);

//access the operator buttons and create event listener
const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(button => {
    button.addEventListener('click', operatorClicked);
})

//get access to clear button
const clear = document.querySelector('.clear');

clear.addEventListener('click', clearClicked);
