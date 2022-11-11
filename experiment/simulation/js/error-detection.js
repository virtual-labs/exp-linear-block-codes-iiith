var rand = [];

function getNumber() {
    for (var i = 0; i < 6; i++) {
        rand[i] = Math.floor(Math.random() * 2);
    }

    const bob = document.getElementById("bob");
    bob.innerHTML = "<b>" + rand[0] + rand[1] + rand[2] + rand[3] + rand[4] + rand[5] + "</b>";

    return false;
}

function verify() {
    const temp = (rand[0] + rand[1] + rand[2] + rand[3] + rand[4] + rand[5]) % 2;
    const ans = document.getElementById("answer");
    const choose = document.getElementById("choose");
    const selectedText = choose.options[choose.selectedIndex].text;
    
    if(selectedText=="--- Select ---")
    {
        ans.innerHTML = "Choose an option";
        ans.style.color = "black";
    }
    else if ( (temp == 0) && (selectedText=="Received") || (temp == 1) && (selectedText=="Resend")) {
        ans.innerHTML = "<b>Correct Answer!!!</b>";
        ans.style.color = "green";

        // getNumber();
    }
    else {
        ans.innerHTML = "<b>Wrong Answer :(</b>";
        ans.style.color = "red";
    }
}

function ref() {
    const ans = document.getElementById("answer");
    const form = document.getElementById("form");

    ans.innerHTML="";
    form.reset();
    getNumber();

}


