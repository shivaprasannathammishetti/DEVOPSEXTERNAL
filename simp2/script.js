function add(){
    let name=document.getElementById("name").value;
    let roll=document.getElementById("roll").value;
    if(name==""||roll=="")
        document.getElementById("res").innerHTML="fill all fields";
    else
        document.getElementById("res").innerHTML="student details"+"name:"+name+"<br>"+"roll no:"+roll+"<br>";
}