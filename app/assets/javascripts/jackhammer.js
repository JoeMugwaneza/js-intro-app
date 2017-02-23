

// function jackHammer () {
//     alert("Success !!!");
//   }

var JackHammerClicked = 1;

var colors = ["yellow", "black", "indigo", "blue", "green"];
var i = 0

function jackHammer() {

  var colorChange = document.getElementById("color-on-click"); 
  colorChange.style["background-color"] = colors[i]; 
  i += 1
  
  if (JackHammerClicked === 5) {
    alert("Success !!!!!");
  } else {
    console.log("keep clicking")
  };
  JackHammerClicked++; 
}