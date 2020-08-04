firstName = document.getElementById("defaultRegisterFormFirstName");
lastName = document.getElementById("defaultRegisterFormLastName");
email = document.getElementById("defaultRegisterFormEmail");
password = document.getElementById("defaultRegisterFormPassword");
signIN = document.getElementById("signIN");
let goodForm = false;
firstName.addEventListener("input",e=>{
    if(e.target.value.length < 2){
        document.getElementById("firstNameCheck").innerHTML = "Please type valid first name";
        document.getElementById("firstNameCheck").style.color = "RED";
        goodForm = false;
    } else {
        document.getElementById("firstNameCheck").innerHTML = "";
        goodForm = true;
    }
});
lastName.addEventListener("input", e=>{
    if(e.target.value.length < 2){
        document.getElementById("lastNameCheck").innerHTML = "Please type valid last name";
        document.getElementById("lastNameCheck").style.color = "RED";
        goodForm = false;
    } else {
        document.getElementById("lastNameCheck").innerHTML = "";
        goodForm = true;
    }
});

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
function validatePassword(password)
{
    var rege = /^(?=.*\d)[0-9a-zA-Z]{8,}$/;
    return rege.test(password);
}
email.addEventListener("input",e=>{
    if(validateEmail(e.target.value) === false){
        document.getElementById("emailCheck").innerHTML = "Please verify your email";
        document.getElementById("emailCheck").style.color= "RED";
        goodForm = false;
    }else{
        document.getElementById("emailCheck").innerHTML = "";
        goodForm = true;
    }
});
password.addEventListener("input",e=>{
    if(validatePassword(e.target.value) == false){
        document.getElementById("passwordCheck").innerHTML = "Please verify the condition below";
        document.getElementById("passwordCheck").style.color= "RED";
        goodForm = false;
    } else {
        document.getElementById("passwordCheck").innerHTML = "";
        goodForm = true;
    }
});
signIN.addEventListener('click',()=>{
    if(goodForm == true) {
    document.getElementById('thankyou').innerHTML = "Thank you for signing in";
    document.getElementById('thankyou').style.color = "GREEN";
}
});
