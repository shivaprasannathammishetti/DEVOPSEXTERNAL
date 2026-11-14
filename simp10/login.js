function login() {

    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;

    if(name == "" || pass == "") {
        alert("Fill all fields");
    }
    else {
        alert("Login Successful");

        document.getElementById("login").hidden = true;

        startExam();
    }
}