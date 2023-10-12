let upbtn = document.getElementById("upbtn")
let inbtn = document.getElementById("inbtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

inbtn.onclick=function(){
    nameField.style.maxHeight= "0";
    title.innerHTML="Sign In";
    upbtn.classList.add("disable")
    inbtn.classList.remove("disable");
}

upbtn.onclick = function () {
  nameField.style.maxHeight = "60px";
   title.innerHTML = "Sign Up";
  inbtn.classList.add("disable");
  upbtn.classList.remove("disable");

};