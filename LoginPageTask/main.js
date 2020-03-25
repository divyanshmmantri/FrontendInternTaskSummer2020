/* ========================WRITE YOUR JS FROM HERE======================== */

function val()
{
var pno=document.getElementById("phno").value;
var pno1=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(pno.length===10 && pno.match(pno1))
{
document.getElementById("message").style.color="green";
document.getElementById("message").innerHTML="valid no";
}
else
{
document.getElementById("message").style.color="red";
document.getElementById("message").innerHTML="invalid no";
}
}
function val1()
{
var pass=document.getElementById("pass").value;
var cpass=document.getElementById("cpass").value;
if(pass!=cpass)
{
    alert("password and confirm password should match");
}
}
=======
function validateForm() {
    var x = document.forms["myForm"]["user"].value;
    console.log(x); 
    var email=document.forms["myForm"]["email"].value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    console.log(email);
    var phone=document.forms["myForm"]["phone"].value;
    console.log(phone);
    var password=document.forms["myForm"]["password"].value;
    console.log(password);
    var message=document.forms["myForm"]["message"].value;
    //Validation of username is done
    if (x == "" || name==null) {
      alert("Name must be filled out");
      return false;
    }
   //Validation of email id
   if( email == "" ||atpos < 1 || ( dotpos - atpos < 2)) {
    alert( "Please provide your  correct Email!" );
    return false;
 }
 //Validating phone number
 if(isNaN(phone)||phone.indexOf(" ")!=-1||phone.length<9)
 {
    alert( "Please provide your  correct Phone" );
    return false;
 }
 if ( message== "" || message==null) {
    alert("Please write some message");
    return false;
  }
//  Validating the password
 if (password.match(/[a-z]/g) && password.match( 
    /[A-Z]/g) && password.match( 
    /[0-9]/g) && password.match( 
    /[^a-zA-Z\d]/g) && password.length >= 8) 
return true; 
else 
alert( "Please provide your  valid password" );
    return false

  }

