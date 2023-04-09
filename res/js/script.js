'use strict'

let number;

const inputNum = document.getElementById("input")
const button = document.getElementById("submit")
const output = document.getElementById("output")

button.addEventListener("click", ()=>{check()})

function check() {
    number = inputNum.value
    console.log(number)

    if(number == 0) { console.error('Invalid input') 
        output.innerHTML+=`<p style="color: red;">Invalid Input</p>`
    }
    else if(number % 3 == 0 && number % 5 == 0) { console.log('FizzBuzz') 
        output.innerHTML+=`<p>FizzBuzz</p>`
    } 
    else if(number % 3 == 0) { console.log('Fizz') 
        output.innerHTML+=`<p>Fizz</p>`
    } 
    else if(number % 5 == 0) { console.log('Buzz') 
        output.innerHTML+=`<p>Buzz</p>`
    } 
    else if(number > 0) { console.log('Input ' + number) 
        output.innerHTML+='<p>Input '+number+'</p>'
    }
    else { console.error("Invalid input") 
        output.innerHTML+='<p style="color: red;">Invalid Input</p>'
    }
}