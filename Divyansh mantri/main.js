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
