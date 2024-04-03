
const getUserName =JSON.parse (localStorage.getItem("userData")).userName;
function takeMe() {
  const createResumeSection = document.getElementById("create-Resume");
  createResumeSection.classList.add("smooth-scroll");
  createResumeSection.scrollIntoView({ behavior: "smooth" });
  console.log("script Working");
}

const textarea = document.getElementById("summary");
const workHistory = document.getElementById("workHistory");
function adjustTextareaHeight(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";

  const containerDiv = textarea.closest(".w-full");
  containerDiv.style.height = textarea.scrollHeight + "px";
}

document.getElementById("summary").addEventListener("input", function () {
  adjustTextareaHeight(this);
});
document.getElementById("workHistory").addEventListener("input", function () {
  adjustTextareaHeight(this);
});
document.getElementById("education").addEventListener("input", function () {
  adjustTextareaHeight(this);
});
document.getElementById("skills").addEventListener("input", function () {
  adjustTextareaHeight(this);
});

$(document).ready(function () {
  $("#submitbtn").click(function () {
    $("#create-Resume").printThis();
  });
});


const drawer = document.getElementById("drawer");
const main = document.getElementById("mainPage");
const logoContainer = document.getElementById("logo-container");
function getDrawer(select) {
  drawer.classList.remove('-left-200');
  drawer.classList.add('left-0'); 
  main.classList.add('opacity-20');
  main.classList.add('z-0');
  drawer.classList.add('z-999');
  logoContainer.classList.add("ml-[20%]");
  if(select === 'job'){
    const welcomeText = document.getElementById("welcomeText");
    welcomeText.innerHTML = '';
    welcomeText.innerHTML = `Hi <span class="gradient-text font-semibold text-2xl">${getUserName}</span>,
     Intelliscan Job Recommendation will help you find perfect match for you!`;
  }
  else if(select === 'project'){
    
    const welcomeText = document.getElementById("welcomeText");
    welcomeText.innerHTML = '';
    welcomeText.innerHTML = `Hi <span class="gradient-text font-semibold text-2xl">${getUserName}</span>,
     Intelliscan Project Recommendation will help you find perfect match for you!`;

  }
}
drawer.querySelector('[data-modal-hide]').onclick = function(){
  drawer.classList.remove('left-0');
  drawer.classList.add('-left-200');
  main.classList.remove('opacity-20','z-999');
  logoContainer.classList.remove("ml-[20%]");
}
function loadMainPage(){
  if(getUserName === null){
    return;
  }
  const welcomeText  = document.getElementById("welcomeTextMain");
  welcomeText.innerHTML = `Welcome <span class="gradient-text font-semibold">${getUserName}</span>`;
}
loadMainPage();

function callGemini(){
  run();
  console.log("hi");
}