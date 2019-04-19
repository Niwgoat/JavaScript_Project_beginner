var emailText = document.getElementById("mail");
var validationEmailMassage = document.getElementById("validationMassage");
var userText = document.getElementById("userName");
var validateUsernameMassageLength = document.getElementById("validateUserNameLength");
var validateUsernameMassageCase = document.getElementById("validateUserNameCase");
var passwordText = document.getElementById("pass1");
var reEnnteredPassword = document.getElementById("pass2");
var validatePasswordMassage = document.getElementById("validatePass");
var validatePassMatchMassage = document.getElementById("validatePassMatch");
function validateForm(){
     var user = validateUsername();
    var mail = ValidateEmail();
    var pass = validatePassword();
    if(user==false || mail==false || pass==false)
    return false;
    return true;
}

function validatePassword(){
    if(passwordText.value.length < 8 ){
     validatePasswordMassage.style.display="block";
    return false;
    }
    else if(passwordText.value != reEnnteredPassword.value){
    validatePasswordMassage.style.display="none";
    validatePassMatchMassage.style.display="block"
    return true;
    }
    else
    return true;
}
function validateUsername(){
if (userText.value.length < 8 && userText.value.toLowerCase() == userText.value){
    validateUsernameMassageLength.style.display="block";
    validateUsernameMassageCase.style.display="block";
    return false;
}
else if (userText.value.length >=8 && userText.value.toLowerCase() == userText.value){
    validateUsernameMassageLength.style.display="none";
    validateUsernameMassageCase.style.display="block"
    return false;
}
else if(userText.value.length <8 && userText.value.toLowerCase() !== userText.validateForm){
    validateUsernameMassageLength.style.display="block";
    validateUsernameMassageCase.style.display="none";
    return false;
}
else {
    validateUsernameMassageLength.style.display="none";
    validateUsernameMassageCase.style.display="none"
    return true;
}
}
function ValidateEmail(){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(emailText.value.match(mailformat)){
validationEmailMassage.style.display="none";
return true;
}
else
{
    validationEmailMassage.style.display="block";
    return false;
}
}
