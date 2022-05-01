var eidul = "21 April 2023";

var day = document.getElementById("days");
var hour = document.getElementById("hours");
var mi = document.getElementById("min");
var se = document.getElementById("sec");

function countDown()
{
	var eidday = new Date(eidul);
	var current = new Date();

	var total = (eidday - current)/1000;
    
    var days = Math.floor(total /3600 /24);
    
    var hou = Math.floor(total / 3600) % 24;

    var min = Math.floor(total /60) % 60;

    var sec = Math.floor(total)%60;

    day.innerHTML = days;

     hour.innerHTML = hou;

     mi.innerHTML = min;

     se.innerHTML = sec;
  
	

}
countDown();

setInterval(countDown, 1000);