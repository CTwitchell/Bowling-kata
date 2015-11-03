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
//var i = 1;

//function rolls(e) {
//
//    if (i <= 20 && e !== 10) {
//        document.getElementById("roll" + i).innerHTML = e;
//        i++;
//    }
//    if (i % 2 !== 0 && e == 10) {
//        i++;
//        document.getElementById("roll" + i).innerHTML = "X";
//        i++;
//    }
//}


var BowlingGame = [];

BowlingGame.roll = function (pins) {
    BowlingGame.push (pins);
};

BowlingGame.score = function () {
    var result = 0;
    var rollIndex = 0; 
    var game = this;
    for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
        if (isStrike()){
            result += getStrikeScore();
            documnet.getElementById("roll" + rollIndex).innerHTML = BowlingGame[0];
            rollIndex++;
            
        
        } else if (isSpare()){
            result += getSpareScore();
            documnet.getElementById("roll" + rollIndex).innerHTML = BowlingGame[rollIndex];
            rollIndex +=2;
        } else {
        result += getNormalScore();
        documnet.getElementById("roll" + rollIndex).innerHTML = BowlingGame[rollIndex];
        rollIndex +=2;
        }
     }
    
    return result;
    
    function isSpare(){
        return game.rolls[rollIndex] + game.rolls[rollIndex + 1] ==10;
    }
    
    function isStrike(){
        return game.rolls[rollIndex] == 10;
    }
    
   function getStrikeScore() {
        return game.rolls[rollIndex] + game.rolls [rollIndex + 1] + game.rolls[rollIndex + 2]; 
    } 
    function getSpareScore() {
        return game.rolls[rollIndex] + game.rolls [rollIndex + 1] + game.rolls[rollIndex + 2]; 
    }
    function getNormalScore() {
       return game.rolls[rollIndex] + game.rolls[rollIndex+1];
    }
};