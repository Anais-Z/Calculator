//create function for add, subtract, multiply and divide

function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

//create new function that takes in 2 numbers and an operator
//then calls one of the above functions

function operate(num1, num2, operator){

    switch(operator){

        case "+":
            add(num1,num2)
        case "-":
            subtract(num1,num2)
        case "*":
            multiply(num1,num2)
        case "/":
            divide(num1,num2)
    }
}

function numClicked(e){
    let num = e.target.value
    display.innerHTML += num
}


//get access to display element
let display = document.querySelector('.display')

//access the button numbers
const numButtons = document.querySelectorAll('.num')

numButtons.forEach( button => {
    button.addEventListener('click', numClicked)
})
