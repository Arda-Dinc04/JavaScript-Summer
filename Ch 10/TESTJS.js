
$(document).ready(function(){
var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
var flag=1; //this will prevent page from changing

document.getElementById("arrival_date").focus(); //focus on arrival date textbox

$( "#reservation_form" ).submit(function( event ) {
//responsible to check if arrival date is empty
if(document.getElementById("arrival_date").value=="" ){
    document.getElementById("arrival_date_info").textContent="This field is required";
    flag=0;
}
//responsible to check if nights is empty
if(document.getElementById("nights").value=="" ){
    document.getElementById("nights_info").textContent="This field is required";
    flag=0;
}
// night field numeric or not
if(isNaN(document.getElementById("nights").value)){
    document.getElementById("nights_info").textContent="This field must be numeric";
    flag=0;
}
//responsible to check if name field is empty
if(document.getElementById("name").value=="" ){
    document.getElementById("name_info").textContent="This field is required";
    flag=0;
}
// email empty or not
if(document.getElementById("email").value=="" ){
    document.getElementById("email_info").textContent="This field is required";
    flag=0;
}
// phone field empty or not
if(document.getElementById("phone").value=="" ){
    document.getElementById("phone_info").textContent="This field is required";
    flag=0;
}

// checks if email is within the pattern
if(!emailPattern.test(document.getElementById("email").value)){
    document.getElementById("email_info").textContent="Must be a valid email address";
    flag=0;
}
//prevents field from being submitted
if(flag == 0)
    event.preventDefault();
});

});
