function verify1() {
  const a1 = document.getElementById("a1").value;
  const a2 = document.getElementById("a2").value;
  const a3 = document.getElementById("a3").value;
  const choose1 = document.getElementById("choose1");
  const obs1 = document.getElementById("observations1");

  const selectedText1 = choose1.options[choose1.selectedIndex].text;

  if (selectedText1 == "--- Select ---") {
    obs1.innerHTML = "Select one of the options"
    obs1.style.color = "black";
  }
  else if (a1.length == 0 || a2.length == 0 || a3.length == 0) {
    obs1.innerHTML = "Enter all the values"
    obs1.style.color = "black";
  }

  else if (a1.length > 1 || a2.length > 1 || a3.length > 1) {
    obs1.innerHTML = "Choose values from the set {0, 1}";
    obs1.style.color = "black";
  }

  else if (a1 > 1 || a1 < 0 || a2 > 1 || a2 < 0 || a3 > 1 || a3 < 0) {
    obs1.innerHTML = "Choose values from the set {0, 1}";
    obs1.style.color = "black";
  }

  else {
    if (((a1 == 1) && (a2 == 1) && (a3 == 1)) && (selectedText1 == "Linearly Dependent")) {
      obs1.innerHTML = "<b>Correct Answer!!!</b>";
      obs1.style.color = "green";
    }

    else {
      obs1.style.color = "red";
      if (obs1.innerHTML == "<b>Wrong Answer :(</b>") {
        obs1.innerHTML = "<b>Wrong Again :(</b>";
      }
      else {
        obs1.innerHTML = "<b>Wrong Answer :(</b>";
      }
    }
  }
}

function verify2() {
  const b1 = document.getElementById("b1").value;
  const b2 = document.getElementById("b2").value;
  const b3 = document.getElementById("b3").value;
  const b4 = document.getElementById("b4").value;
  const choose2 = document.getElementById("choose2");
  const obs2 = document.getElementById("observations2");

  const selectedText2 = choose2.options[choose2.selectedIndex].text;

  if (selectedText2 == "--- Select ---") {
    obs2.innerHTML = "Select one of the options"
    obs2.style.color = "black";
  }
  else if (b1.length == 0 || b2.length == 0 || b3.length == 0 || b4.length == 0) {
    obs2.innerHTML = "Enter all the values"
    obs2.style.color = "black";
  }

  else if (b1.length > 1 || b2.length > 1 || b3.length > 1 || b4.length > 1) {
    obs2.innerHTML = "Choose values from the set {0, 1}";
    obs2.style.color = "black";
  }

  else if (b1 > 1 || b1 < 0 || b2 > 1 || b2 < 0 || b3 > 1 || b3 < 0 || b4 > 1 || b4 < 0) {
    obs2.innerHTML = "Choose values from the set {0, 1}";
    obs2.style.color = "black";
  }

  else {
    if (((b1 == 1) && (b2 == 0) && (b3 == 1) && (b4 == 1)) && (selectedText2 == "Linearly Dependent")) {
      obs2.innerHTML = "<b>Correct Answer!!!</b>";
      obs2.style.color = "green";
    }

    else {
      obs2.style.color = "red";
      if (obs2.innerHTML == "<b>Wrong Answer :(</b>") {
        obs2.innerHTML = "<b>Wrong Again :(</b>";
      }
      else {
        obs2.innerHTML = "<b>Wrong Answer :(</b>";
      }
    }
  }
}

function verify3() {
  const c1 = document.getElementById("c1").value;
  const c2 = document.getElementById("c2").value;
  const c3 = document.getElementById("c3").value;
  const c4 = document.getElementById("c4").value;
  const choose3 = document.getElementById("choose3");
  const obs3 = document.getElementById("observations3");

  const selectedText3 = choose3.options[choose3.selectedIndex].text;

  if (selectedText3 == "--- Select ---") {
    obs3.innerHTML = "Select one of the options"
    obs3.style.color = "black";
  }
  else if (c1.length == 0 || c2.length == 0 || c3.length == 0 || c4.length == 0) {
    obs3.innerHTML = "Enter all the values"
    obs3.style.color = "black";
  }

  else if (c1.length > 1 || c2.length > 1 || c3.length > 1 || c4.length > 1) {
    obs3.innerHTML = "Choose values from the set {0, 1}";
    obs3.style.color = "black";
  }

  else if (c1 > 1 || c1 < 0 || c2 > 1 || c2 < 0 || c3 > 1 || c3 < 0 || c4 > 1 || c4 < 0) {
    obs3.innerHTML = "Choose values from the set {0, 1}";
    obs3.style.color = "black";
  }

  else {
    if (((c1 == 0) && (c2 == 0) && (c3 == 0) && (c4 == 0)) && (selectedText3 == "Linearly Independent")) {
      obs3.innerHTML = "<b>Correct Answer!!!</b>";
      obs3.style.color = "green";
    }

    else {
      obs3.style.color = "red";
      if (obs3.innerHTML == "<b>Wrong Answer :(</b>") {
        obs3.innerHTML = "<b>Wrong Again :(</b>";
      }
      else {
        obs3.innerHTML = "<b>Wrong Answer :(</b>";
      }
    }
  }
}


function page1() {
  const sec1 = document.getElementById("example1");
  const sec2 = document.getElementById("example2");
  const sec3 = document.getElementById("example3");
  const obs1 = document.getElementById("observations1");
  const form1 = document.getElementById("form1");

  sec1.style.display = "block";
  sec2.style.display = "none";
  sec3.style.display = "none";
  obs1.innerHTML = "";
  form1.reset();
}


function page2() {
  const sec1 = document.getElementById("example1");
  const sec2 = document.getElementById("example2");
  const sec3 = document.getElementById("example3");
  const obs2 = document.getElementById("observations2");
  const form2 = document.getElementById("form2");

  sec1.style.display = "none";
  sec2.style.display = "block";
  sec3.style.display = "none";
  obs2.innerHTML = "";
  form2.reset();
}

function page3() {
  const sec1 = document.getElementById("example1");
  const sec2 = document.getElementById("example2");
  const sec3 = document.getElementById("example3");
  const obs3 = document.getElementById("observations3");
  const form3 = document.getElementById("form3");

  sec1.style.display = "none";
  sec2.style.display = "none";
  sec3.style.display = "block";
  obs3.innerHTML = "";
  form3.reset();
}


