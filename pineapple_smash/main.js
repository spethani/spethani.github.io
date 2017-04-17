var money=0;
var rbprice=10;
var rbscale=1;
var rprice=100;
var rscale=1;
var interval=setInterval(function(){rAuto()}, 500/rscale);
var x=1;
var offCool=true;

document.getElementById("score").innerHTML="$"+money;
document.getElementById("rubberbandlevel").innerHTML="Rubber Band <br>&emsp;&emsp;$"+rbscale+" per click <br>&emsp;&emsp;Cost: $"+rbprice*rbscale;
document.getElementById("ramnek").innerHTML="Ramnek<br>&emsp;&emsp;$"+rscale*2+" per second<br>&emsp;&emsp;Cost: $"+rprice*rscale;
document.getElementById("howBoost").innerHTML="Boost<br>&emsp;&emsp;x"+x;

function animation() {
		document.getElementById("pineapple").width = "250";
    money+=rbscale;
    document.getElementById("score").innerHTML="$"+money;
}

function perSec() {
		setWidth();
		setInterval("setWidth()", 300);
    text("score: "+score,0, 0);
}

function setWidth() {
		document.getElementById("pineapple").width = "200";
    document.getElementById("boost").width = "150";
}
     
function rubberband() {
	if(money>=rbprice*rbscale) {
    rbprice*=rbscale;
  	money-=rbprice;
    rbscale++;
    }
  document.getElementById("score").innerHTML="$"+money;
  document.getElementById("rubberbandlevel").innerHTML="Rubber Band <br>&emsp;&emsp;$"+rbscale+" per click <br>&emsp;&emsp;Cost: $"+rbprice*rbscale;
}

function ramnek() {
	if(money>=rprice*rscale) {
		clearInterval(interval);
  	rprice*=rscale;
    money-=rprice;
    rscale++;
    interval=setInterval(function(){rAuto()}, 500/rscale);
  }
  document.getElementById("score").innerHTML="$"+money;
  document.getElementById("ramnek").innerHTML="Ramnek<br>&emsp;&emsp;$"+rscale*2+" per second<br>&emsp;&emsp;Cost: $"+rprice*rscale;
}

function rAuto() {
	money++;
  document.getElementById("score").innerHTML="$"+money;
}
          
function opacity() {
	document.getElementById("pineapple").style.opacity-=0.1;
}

function interval() {
	setInterval("rAuto()", 1000);
}

function boost() {
	if(offCool==true) {
	activity="active";
	x=Math.floor(Math.random()*5+2);
	rbscale*=x;
  rscale*=x;
  rbprice/=x;
  rprice/=x;
  clearInterval(interval);
  interval=setInterval(function(){rAuto()}, 500/rscale);
  document.getElementById("score").innerHTML="$"+money;
	document.getElementById("rubberbandlevel").innerHTML="Rubber Band <br>&emsp;&emsp;$"+rbscale+" per click <br>&emsp;&emsp;Cost: $"+rbprice*rbscale;
	document.getElementById("ramnek").innerHTML="Ramnek<br>&emsp;&emsp;$"+rscale*2+" per second<br>&emsp;&emsp;Cost: $"+rprice*rscale;
	document.getElementById("howBoost").innerHTML="Boost<br>&emsp;&emsp;x"+x;
  setTimeout("boostEnd()", 10000);
  offCool=false;
  setTimeout("cooldown()", 60000);
  }
  
}

function boostEnd() {
  rbscale/=x;
  rscale/=x;
  rbprice*=x;
  rprice*=x;
  x=1;
  clearInterval(interval);
  interval=setInterval(function(){rAuto()}, 500/rscale);
  document.getElementById("score").innerHTML="$"+money;
	document.getElementById("rubberbandlevel").innerHTML="Rubber Band <br>&emsp;&emsp;$"+rbscale+" per click <br>&emsp;&emsp;Cost: $"+rbprice*rbscale;
	document.getElementById("ramnek").innerHTML="Ramnek<br>&emsp;&emsp;$"+rscale*2+" per second<br>&emsp;&emsp;Cost: $"+rprice*rscale;
	document.getElementById("howBoost").innerHTML="Boost<br>&emsp;&emsp;x"+x;
}

function cooldown() {
	offCool=true;
}
          