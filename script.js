// code to change links in about section

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-links");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}

// code for opening and closing of menu bar in mobile screen

const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbzqhNrqW6yA0htjV3UfyeC0b9vwoxSldaIaA747mAy2QrqiW512fZ1GF02Z3yC-FAOV/exec";
// const form = document.forms["submit-to-google-sheet"];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => console.log("Success!", response))
//     .catch((error) => console.error("Error!", error.message));
// });

