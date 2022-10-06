const form = document.querySelector("form");
eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");


var username = document.forms["myform"]["Email"].value;
var password = document.forms["myform"]["pwd"].value;
	
function validateForm(){
var username = document.forms["myform"]["Email"].value;
var password = document.forms["myform"]["pwd"].value;
if ( username == "kamini@carrier.com" && password == "123456"){
 return true
}
return false
}

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
//alert("Valid email address!");
document.forms["myform"]["Email"].focus();
return true;
}
else
{
//alert("You have entered an invalid email address!");
document.forms["myform"]["Email"].focus();
return false;
}
}








    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");

            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address": errorTxt.innerText = "Email can't be blank";
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }
	
	function checkPass() {
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } 

		
		else {
            pField.classList.remove("error");
            pField.classList.add("valid");
			
		}
	}