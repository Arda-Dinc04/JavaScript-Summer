document.getElementById("subtotal").focus();//puts user cursor on subtotal box

//attach calculate with click 
const processEntries = () => {
    processEntry();
};
document.addEventListener("DOMContentLoaded", () => {$(
    "#calculate").addEventListener("click", processEntries)});

//attach clear with click 
const eraseEntries = () => {
        eraseEntry();
    };
document.addEventListener("DOMContentLoaded", () => {$(
        "#clear").addEventListener("click", processEntries)});



function processEntry(){
    let flag = true;
    do{
        var userInput = document.getElementById("subtotal").value;
        var userInputTax = document.getElementById("taxRate").value;
        if(userInput < 0 || userInput > 10000){
            document.getElementById("subtotal").value = "";
            alert("Subtotal must be > 0 and < 10000");
            document.getElementById("subtotal").focus();
        }
        else if(userInputTax < 0 || userInputTax > 12){ 
            document.getElementById("taxRate").value = "";
            alert("Tax Rate must be > 0 and < 12");
            document.getElementById("taxRate").focus();
        }
        else
            displayResult(userInput, userInputTax );
            flag = false;
    }
    while(flag == true)

}

//Responsible for clearing all boxes
function eraseEntry(){
    document.getElementById("subtotal").value = "";
    document.getElementById("taxRate").value = "";
    document.getElementById("salesTax").value ="";
    document.getElementById("total").value ="";
    document.getElementById("subtotal").focus();
}

//Responsible for displaying results
function displayResult(subtotalInput, taxInput){
    document.getElementById("salesTax").value = (subtotalInput*(taxInput/100)).toFixed(2);
    let total = (Number(subtotalInput) + Number(subtotalInput*(taxInput/100)));
    document.getElementById("total").value = total.toFixed(2);
}
