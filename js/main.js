function dropDown(){
  console.log("clicked");
  var hasClass = document.querySelector("header nav").classList.contains("dropped");
  if (hasClass) {
    document.querySelector("header nav").classList.remove("dropped");
  } else {
    document.querySelector("header nav").classList.add("dropped");
  }
}

var dropElement = document.querySelector("header i.fa-align-justify");
dropElement.addEventListener("click", dropDown);
