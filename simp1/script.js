document.getElementById("form").onsubmit=function(e){
    e.preventDefault();
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let gender=document.getElementById("gender").value;
let cname=document.getElementById("cname").value;
let dept=document.getElementById("dept").value;
let ios=document.getElementById("yos").value;
let event=document.getElementById("event").value;
if(name==""||email==""||phone==""||gender==""||cname==""||dept==""||ios==""||event=="")
    msg.innerHTML="Fill all the fields";
else if(!email.includes("@")||!email.includes("."))
    msg.innerHTML="enter email is invaild";
else if(phone.length!=10||isNaN(phone))
    msg.innerHTML="enter correct phone number";
else{
    msg.style.color="red";
    msg.innerHTML="Registered successfull<br>"+"Name:"+name+"<br>"+"phone:"+phone+"<br>"+"gender"+gender+"<br>"+"Cname"+cname+"<br>"+"dept"+dept+"<br>"+"ios:"+ios+"<br>"+"event:"+event+"<br>"
}};
document.getElementById("form").onreset=function(){
    document.getElementById("msg").innerHTML="";
};