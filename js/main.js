var dropSwitch = {dropped:true};
function dropDown(){

  var dropOne = document.querySelector("#float-down");
  var dropTwo = document.querySelectorAll("#float-down li");
  var dropThree = document.querySelectorAll("#float-down li a");

  dropOne.style.display = dropSwitch.dropped ? "inline-block" : "none";

    for (var i = 0; i < dropTwo.length; i++) {
      if (dropSwitch.dropped) {
        dropTwo[i].style.display = "inline-block";
      }
      else{
        dropTwo[i].style.display = "none";
      }
    }
  for (var i = 0; i < dropThree.length; i++) {
    if (dropSwitch.dropped) {
      dropThree[i].style.display = "inline-block";
    }
    else{
      dropThree[i].style.display =   "none";
    }
  }

  dropSwitch.dropped = !dropSwitch.dropped;
}

var dropElement = document.querySelector("li .fa-align-justify");
dropElement.addEventListener("mousedown", dropDown);
addEventListener("resize", function(event){
  if(document.body.clientWidth > 900){
    dropSwitch.dropped = false;
    dropDown();
  }

});
