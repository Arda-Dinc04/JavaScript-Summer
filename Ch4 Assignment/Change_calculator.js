
const processEntries = () => {
    processEntry();
};
document.addEventListener("DOMContentLoaded", () => {$(
    "#Calculate").addEventListener("click", processEntries)});

function processEntry(){
    let flag = true;
    do{
        var userInput = document.getElementById("totalChangeInput").value;
        if(userInput < 0 || userInput > 99){
            alert("You entered a wrong value. Please enter between (0-99).");
        }
        else
            makeChange(userInput);
            flag = false;
    }
    while(flag == true)

}

function makeChange(selector){
    //divide the given value by Q,D,N,P
    document.getElementById("Quarters").value = parseInt(selector/25);
    document.getElementById("Dimes").value = parseInt((selector%25) / 10);
    document.getElementById("Nickels").value = parseInt(((selector%25)%10) / 5);
    document.getElementById("Pennies").value = parseInt((((selector%25)%10) % 5) / 1);
}


