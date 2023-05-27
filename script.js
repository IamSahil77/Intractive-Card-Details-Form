function btn() {
    var a = document.getElementById("cname").value;
    var c = document.getElementById("cmm").value;
    var d = document.getElementById("cyy").value;
    var e = document.getElementById("cvc").value;

    var input = document.getElementById('cnum').value;
    var formattedInput = formatInput(input);
    

    if (a == 0 || input == 0 || c == 0 || d == 0 || e == 0)  {
        alert("please fill the information first");
    }
    else {
        document.getElementById("left").innerHTML = a;
        if(formattedInput==undefined){
          alert("Card number must be of 16 digits");
          document.getElementById("cnum").style.color="red";
        }
        else{
        document.getElementById('shownum').innerText = formattedInput;
      }
        if(c>12){
          alert("month can go up to 12");
          document.getElementById("cmm").style.color="red";
        }
        else{
        document.getElementById("right").innerHTML = c + "/" + d;
        }
        if(e.length>3){
          alert("cvc can go upto 3 digits");
          document.getElementById("cvc").style.color="red";
        }
        else{
        document.getElementById("showcvc").innerHTML = e;
        }
    }


}

  function formatInput(input) {
    var formatted = "";
    if(input.length==16){
    for (var i = 0; i < input.length; i++) {
      if (i > 0 && i % 4 == 0) {
        formatted += " ";
      }
      formatted += input.charAt(i);
    }
    return formatted;
  }
  }