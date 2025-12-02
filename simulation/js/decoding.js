var rand = [];

function getNumber() {
    for (var i = 0; i < 9; i++) {
        rand[i] = Math.floor(Math.random() * 2);
    }

    const bitstream = document.getElementById("bitstream");
    bitstream.innerHTML = "<b>" + rand[0] + rand[1] + rand[2] + rand[3] + rand[4] + rand[5] + rand[6] + rand[7] + rand[8] + "</b>";

    return false;
}


function verify() {
    const m1 = document.getElementById("m1").value;
    const m2 = document.getElementById("m2").value;
    const m3 = document.getElementById("m3").value;
    const ans = document.getElementById("answer");
    
    const temp = rand.slice();

    
    const cnt1 = temp[0] + temp[1] + temp[2];
    const cnt2 = temp[3] + temp[4] + temp[5];
    const cnt3 = temp[6] + temp[7] + temp[8];

    if (cnt1 >= 2) {
        c1 = 1;
    }

    else {
        c1 = 0;
    }

    if (cnt2 >= 2) {
        c2 = 1;
    }

    else {
        c2 = 0;
    }

    if (cnt3 >= 2) {
        c3 = 1;
    }

    else {
        c3 = 0;
    }

    if (m1.length == 0 || m2.length == 0 || m3.length == 0) {

        ans.style.color = "black";
        ans.innerHTML = "Enter all the bits.";
        return;

    }

    else if (m1.length > 1 || m2.length > 1 || m3.length > 1) {

        ans.style.color = "black";
        ans.innerHTML = "Enter values from the set {0, 1}.";
        return;

    }

    else if (m1 > 1 || m1 < 0 || m2 > 1 || m2 < 0 || m3 > 1 || m3 < 0) {

        ans.style.color = "black";
        ans.innerHTML = "Enter values from the set {0, 1}.";
        return;

    }

    else if (m1 == c1 && m2 == c2 && m3 == c3) {
        ans.innerHTML = "<b>Correct Answer!!!</b>";
        ans.style.color = "green";
    }
    else {
        if (ans.innerHTML == "<b>Wrong Answer :(</b>") {
            ans.innerHTML = "<b>Wrong Again :(</b>";
            ans.style.color = "red";
            return;
        }

        else {
            ans.innerHTML = "<b>Wrong Answer :(</b>";
            ans.style.color = "red";
            return;
        }
    }
}

function ref() {

    const ans = document.getElementById("answer");
    const form =document.getElementById("form");

    ans.innerHTML="";

    form.reset();
    getNumber();
}


