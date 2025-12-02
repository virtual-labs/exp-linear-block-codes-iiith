function verify1() {
  const n1 = document.getElementById("n1").value;
  const m1 = document.getElementById("m1").value;
  const d1 = document.getElementById("d1").value;
  const r1 = document.getElementById("r1").value;
  const obs1 = document.getElementById("observations1");


  if (n1.length == 0 || m1.length == 0 || d1.length == 0 || r1.length == 0) {
    obs1.innerHTML = "Enter all the values"
    obs1.style.color = "black";
  }

  else {
    if (((n1 == 5) && (m1 == 6) && (d1 == 2) && (r1 == 0.51 || r1 == 0.52))) {
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
  const n2 = document.getElementById("n2").value;
  const m2 = document.getElementById("m2").value;
  const d2 = document.getElementById("d2").value;
  const r2 = document.getElementById("r2").value;
  const obs2 = document.getElementById("observations2");


  if (n2.length == 0 || m2.length == 0 || d2.length == 0 || r2.length == 0) {
    obs2.innerHTML = "Enter all the values"
    obs2.style.color = "black";
  }

  else {
    if (((n2 == 4) && (m2 == 9) && (d2 == 1) && (r2 == 0.79 || r2 == 0.80))) {
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
  const n3 = document.getElementById("n3").value;
  const k3 = document.getElementById("k3").value;
  const d3 = document.getElementById("d3").value;
  const r3 = document.getElementById("r3").value;
  const obs3 = document.getElementById("observations3");


  if (n3.length == 0 || k3.length == 0 || d3.length == 0 || r3.length == 0) {
    obs3.innerHTML = "Enter all the values"
    obs3.style.color = "black";
  }

  else {
    if (((n3 == 3) && (k3 == 2) && (d3 == 2) && (r3 == 0.66 || r3 == 0.67))) {
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

function verify4() {
  const n4 = document.getElementById("n4").value;
  const k4 = document.getElementById("k4").value;
  const d4 = document.getElementById("d4").value;
  const r4 = document.getElementById("r4").value;
  const obs4 = document.getElementById("observations4");


  if (n4.length == 0 || k4.length == 0 || d4.length == 0 || r4.length == 0) {
    obs4.innerHTML = "Enter all the values"
    obs4.style.color = "black";
  }

  else {
    if (((n4 == 6) && (k4 == 3) && (d4 == 2) && (r4 == 0.50))) {
      obs4.innerHTML = "<b>Correct Answer!!!</b>";
      obs4.style.color = "green";
    }

    else {
      obs4.style.color = "red";
      if (obs4.innerHTML == "<b>Wrong Answer :(</b>") {
        obs4.innerHTML = "<b>Wrong Again :(</b>";
      }
      else {
        obs4.innerHTML = "<b>Wrong Answer :(</b>";
      }
    }
  }
}


function page1() {
  const sec1 = document.getElementById("example1");
  const sec2 = document.getElementById("example2");
  const sec3 = document.getElementById("example3");
  const sec4 = document.getElementById("example4");
  const obs1 = document.getElementById("observations1");
  const form1 = document.getElementById("form1");

  sec1.style.display = "block";
  sec2.style.display = "none";
  sec3.style.display = "none";
  sec4.style.display = "none";
  obs1.innerHTML = "";
  form1.reset();
}


function page2() {
  const sec1 = document.getElementById("example1");
  const sec2 = document.getElementById("example2");
  const sec3 = document.getElementById("example3");
  const sec4 = document.getElementById("example4");
  const obs2 = document.getElementById("observations2");
  const form2 = document.getElementById("form2");

  sec1.style.display = "none";
  sec2.style.display = "block";
  sec3.style.display = "none";
  sec4.style.display = "none";
  obs2.innerHTML = "";
  form2.reset();
}

function page3() {
  const sec1 = document.getElementById("example1");
  const sec2 = document.getElementById("example2");
  const sec3 = document.getElementById("example3");
  const sec4 = document.getElementById("example4");
  const obs3 = document.getElementById("observations3");
  const form3 = document.getElementById("form3");

  sec1.style.display = "none";
  sec2.style.display = "none";
  sec3.style.display = "block";
  sec4.style.display = "none";
  obs3.innerHTML = "";
  form3.reset();
}

function page4() {
  const sec1 = document.getElementById("example1");
  const sec2 = document.getElementById("example2");
  const sec3 = document.getElementById("example3");
  const sec4 = document.getElementById("example4");
  const obs4 = document.getElementById("observations4");
  const form4 = document.getElementById("form4");


  sec1.style.display = "none";
  sec2.style.display = "none";
  sec3.style.display = "none";
  sec4.style.display = "block";
  obs4.innerHTML = "";
  form4.reset();
}

