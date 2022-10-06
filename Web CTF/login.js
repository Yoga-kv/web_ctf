var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("Email Address").value;
var password = document.getElementById("password").value;
if ( username == "kamini@carrier.com" && password == "123456"){
alert ("Login successfully");
window.location = "Flag.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
}