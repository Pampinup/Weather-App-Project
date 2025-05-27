// Gallery script
function makeItDark() {
  let theme = document.querySelector(".theme");
  theme.classList.add("dark");
  let buttonTheme = document.querySelector(".button-theme");
  buttonTheme.classList.add("dark");
  let container = document.querySelector(".container");
  container.classList.add("dark");
  let text = document.querySelector(".text");
  text.classList.add("dark");
  let buttonDesign = document.querySelector(".button-design");
  buttonDesign.classList.add("dark");
  let codedBy = document.querySelector(".by");
  codedBy.classList.add("dark");
  let moreInfo = document.querySelector(".more-info");
  moreInfo.classList.add("dark");
  let rights = document.querySelector(".rights");
  rights.classList.add("dark");
  let title = document.querySelector(".title");
  title.classList.add("dark");
  let withMe = document.querySelector(".with-me");
  withMe.classList.add("dark");

  buttonTheme.innerHTML = "🤍 Light ";
}
function makeItLight() {
  let theme = document.querySelector(".theme");
  theme.classList.remove("dark");
  let buttonTheme = document.querySelector(".button-theme");
  buttonTheme.classList.remove("dark");
  let container = document.querySelector(".container");
  container.classList.remove("dark");
  let text = document.querySelector(".text");
  text.classList.remove("dark");
  let buttonDesign = document.querySelector(".button-design");
  buttonDesign.classList.remove("dark");
  let codedBy = document.querySelector(".by");
  codedBy.classList.remove("dark");
  let moreInfo = document.querySelector(".more-info");
  moreInfo.classList.remove("dark");
  let rights = document.querySelector(".rights");
  rights.classList.remove("dark");
  let title = document.querySelector(".title");
  title.classList.remove("dark");
  let withMe = document.querySelector(".with-me");
  withMe.classList.remove("dark");

  buttonTheme.innerHTML = "🖤 Dark ";
}
function changeWithMe() {
  let name = prompt("Welcome! What's your name?");
  let mail = prompt("What's your email?");
  withMe.innerHTML = `Thank you ${name}! ✨ We'll be in touch! Check your ${mail} ✨`;
}
let buttonDesign = document.querySelector(".button-design");
buttonDesign.addEventListener("click", changeWithMe);

function noWorking() {
  // This function is called when the "About Me" section is clicked
  alert("This section is not working yet. Cooming soon!");
}
let aboutMe = document.querySelector(".about-me");
aboutMe.addEventListener("click", noWorking);

let buttonTheme = document.querySelector(".button-theme");
buttonTheme.addEventListener("click", function () {
  let theme = document.querySelector(".theme");
  if (theme.classList.contains("dark")) {
    makeItLight();
  } else {
    makeItDark();
  }
});
let withMe = document.querySelector(".with-me");

// Dropdown menu script
const menuButton = document.getElementById("menu-button");
const dropdown = menuButton.querySelector(".dropdown-menu");
menuButton.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});
document.addEventListener("click", function () {
  dropdown.style.display = "none";
});
