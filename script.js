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

let counter = false;

//create new function that takes in 2 numbers and an operator
//then calls one of the above functions
function operate(num1, num2, operator){

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

    return result;
}

//function for when a number button is clicked
function numClicked(e){
    if(counter == true){
        display.textContent = '';
        counter = false;
    }
    
    let num = e.target.value;
    display.textContent += num;
    currentNumElement += num;
}

//function for when an operator button is clicked
function operatorClicked(e){
    let op  = e.target.value;

    if(counter == true){
        counter = false;
        display.textContent += op;    
    }else{
        display.textContent += op;
    }
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

    let firstNum = 0;

    console.log(values);

    //keep evaluating until there is only 1 element in values array
    while(values.length != 1){

        //get the three first elements in the array values and store it into a new array
        let arr = values.slice(0,3);

        //then remove the first 3 elements from values array
        values.splice(0, 3);

        //check if the 1st and 3rd element are numbers 
        if(typeof(arr[0]) == 'number' && typeof(arr[2]) == 'number'){

            //check if the 2nd element is an operator
            if(arr[1] == '+' || arr[1] == 'x' || arr[1] == '-' || arr[1] == '/' ){

                //then call the operate function
                firstNum = operate(arr[0], arr[2], arr[1]);

                //add the fistNum to the front of values array
                values.unshift(firstNum);

            }

        }

    }

    console.log(firstNum);
    //return and display the result
    display.textContent = firstNum;
    values.splice(0, values.length)
    counter = true;

}

//function for when the clear button is clicked
function clearClicked(){
   
    //reload the page
    location.reload();

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
