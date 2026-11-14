function calculate() {

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');

    if(!q1 || !q2) {
        alert("Answer all questions");
    }
    else {

        let score = Number(q1.value) + Number(q2.value);

        document.getElementById("exam").hidden = true;

        document.getElementById("result").innerHTML =
        "Your Score: " + score + "/2";
    }
}