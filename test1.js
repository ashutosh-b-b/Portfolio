var btn1 = document.getElementById("dot1");
var btn2 = document.getElementById("dot2");
var btn3 = document.getElementById("dot3");
btn1.addEventListener('click' , loadDoc1);
btn2.addEventListener('click' , loadDoc2);
btn3.addEventListener('click' , loadDoc3);
function loadDoc1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txt1").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "act.txt", true);
    xhttp.send();
  }
  function loadDoc2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txt2").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "standup.txt", true);
    xhttp.send();
  }
  function loadDoc3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txt3").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "film.txt", true);
    xhttp.send();
  }