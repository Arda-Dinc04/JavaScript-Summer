const processEntries = () => {
    processEntry();
};
document.addEventListener("DOMContentLoaded", () => {$(
    "#calculate").addEventListener("click", processEntries)});


function processEntry(){
    let flag = true;
    do{
        var userInput = document.getElementById("subtotal").value;
        var userInputTax = document.getElementById("taxRate").value;
        if(userInput < 0 || userInput > 10000){
            alert("Subtotal must be > 0 and < 10000");
        }
        else if(userInputTax < 0 || userInputTax > 12){
            alert("Tax Rate must be > 0 and < 12");
        }
        else
            makeChange(userInput, userInputTax );
            flag = false;
    }
    while(flag == true)

}

function makeChange(subtotalInput, taxInput){
    //divide the given value by Q,D,N,P
    document.getElementById("salesTax").value = parseFloat(subtotalInput*taxInput);
    document.getElementById("total").value = parseFloat(subtotalInput*taxInput) + subtotalInput;
}
