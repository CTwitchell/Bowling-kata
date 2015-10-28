//var entersubmit = keyCode == 13;
var nameSubmit = function () {
    if (document.getElementById("userinput").value !== "") {
        document.getElementById("name1").innerHTML = document.getElementById("userinput").value;
        document.getElementById("userinput").value = "";
    } else {
        alert("Please Enter A Name.");
    }
};

document.getElementById("submit").onclick = nameSubmit;
//document.getElementById("submit").submit = nameSubmit;

//var charfield=document.getElementById("char")
//charfield.onkeydown=function(e){
//var e=window.event || e;
//var playerName = document.getElementById("userinput").value
//document.getElementById("keycode").value=e.keyCode
//}