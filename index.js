//accessing the counter-value:
const countValue = document.querySelector('#counter-btn')
//applying increment function:
function  increment(){
    //getting the value of counter from the UI:
    let value = parseInt(countValue.innerText);
    //updating the value:
    value = value+1
    //setting the value onto  UI:
    countValue.innerText = value;
}

function decrement(){
    //getting the value of counter from the UI:
    let value = parseInt(countValue.innerText);
    //updating the value:
    value = value-1
    //setting the value onto  UI:
    countValue.innerText = value;
}