

const input = document.querySelector('.text');
const btn = document.querySelector('.button');
const paragraph = document.querySelector('.paragraph');

let splitInput;
let arr = [];

btn.onclick = () => {
    if (input.value.length === 0) {
        alert("Please first write something in the input box");
    } else {
        let inputString = input.value;
        splitInput = inputString.split("");
        input.value = " ";
        console.log(inputString);
        console.log(splitInput);
    }
    DisplayValue();
}

let i = 0;

function DisplayValue() {
    let timer = setInterval(() => {
        if (i < splitInput.length) {
            paragraph.innerHTML += splitInput[i]; 
            i++;
        } else {
            clearInterval(timer);
        }
    }, 300);
    
    returnValue()
}


