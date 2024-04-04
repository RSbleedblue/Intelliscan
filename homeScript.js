const getUserName =JSON.parse (localStorage.getItem("userData")).userName;
const generateBTN = document.getElementById("generateBTN");
const geminiResult = document.getElementById("geminiResult");
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
  logoContainer.classList.add("ml-[20%]");
  if(select === 'job'){
    main.classList.add('-z-999');
    drawer.classList.add('z-999');
    geminiResult.classList.add('z-1000');
    main.style.filter = "blur(15px)";

    const changeSkill = document.getElementById("changeSkill");
    const welcomeText = document.getElementById("welcomeText");

    welcomeText.innerHTML = '';
    welcomeText.innerHTML = `Hi <span class="gradient-text font-semibold text-2xl">${getUserName}</span>,
     Intelliscan Job Recommendation will help you find perfect match for you!`;
    changeSkill.classList.add("text-2xl");
    changeSkill.classList.remove("text-xl");
    changeSkill.innerHTML = 'Enter Your Skills';
    generateBTN.value = "job";
    console.log(generateBTN.value);

  }
  else if(select === 'project'){
    main.classList.add('-z-999');
    drawer.classList.add('z-999');
    main.style.filter="blur(15px)";
    
    const changeSkill = document.getElementById("changeSkill");
    const welcomeText = document.getElementById("welcomeText");
    welcomeText.innerHTML = '';
    welcomeText.innerHTML = `Hi <span class="gradient-text font-semibold text-2xl">${getUserName}</span>,
     Intelliscan Project Recommendation will help you find perfect match for you!`;
     changeSkill.classList.remove("text-2xl");
     changeSkill.classList.add("text-xl");
    changeSkill.innerHTML = 'Enter Your TechStack for getting Projects';
    generateBTN.value = "project";
    console.log(generateBTN.value);

  }
}
drawer.querySelector('[data-modal-hide]').onclick = function(){
  drawer.classList.remove('left-0');
  drawer.classList.add('-left-200');
  main.style.filter = "blur(0px)";
  logoContainer.classList.remove("ml-[20%]");
  geminiResult.classList.add("hidden");
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
  value;
  console.log("hi");
}