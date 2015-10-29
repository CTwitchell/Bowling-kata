/*globals document, window */
var nameSubmit = function () {
    if (document.getElementById("userinput").value !== "") {
        document.getElementById("name1").innerHTML = document.getElementById("userinput").value;
        document.getElementById("userinput").value = "";
    } else {
        alert("Please Enter A Name.");
    }
};

function entInfo(e) {
    if (typeof e == 'undefined' && window.event) {
        e = window.event;
    }
    if (e.keyCode == 13 && document.getElementById("userinput").value === "") {
        return alert("Please Enter A Name.");
    }
    if (e.keyCode == 13) {
        document.getElementById("name1").innerHTML = document.getElementById("userinput").value;
        document.getElementById("userinput").value = "";
    }
}

document.getElementById("submit").onclick = nameSubmit;
var i = 1;

function rolls(e) {

    if (i <= 20 && e !== 10) {
        document.getElementById("roll" + i).innerHTML = e;
        i++;
    }
    if (i % 2 !== 0 && e == 10) {
        i++;
        document.getElementById("roll" + i).innerHTML = "X";
        i++;
    }
}