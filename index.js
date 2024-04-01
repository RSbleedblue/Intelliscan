var modal = document.getElementById("authentication-modal");
var link = document.getElementById("signup-link");
const login = document.getElementById("login-Container");

link.onclick = function() {
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(function() { 
        login.style.opacity = "0.2";
    }, 1);
}

modal.querySelector('[data-modal-hide]').onclick = function() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    login.style.opacity = "1";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        login.style.opacity = "1";
    }
}

function registerUser(event){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    const data = {
        email: email,
        userName: userName,
        password: password,
    }
    const JSONData = JSON.stringify(data);
    sessionStorage.setItem("userData", JSONData);

    const userDataString = sessionStorage.getItem("userData");
    if (userDataString) {
        const userData = JSON.parse(userDataString);
        console.log(userData.email);
    } else {
        console.log("userData not found in session storage.");
    }
    const getToast = document.getElementById("toast-success");
    getToast.classList.remove("hidden"); 
    setTimeout(function(){
        getToast.classList.add("hidden");
    }, 3000);

    modal.classList.add('hidden'); 
    modal.setAttribute('aria-hidden', 'true');
    login.style.opacity = "1";
}
function loginUser(event){
    event.preventDefault();
    const getToast = document.getElementById("toast-danger");
    const userName = document.getElementById("loginEmail").value.trim(); // Trim whitespace
    const password = document.getElementById("loginPassword").value.trim(); // Trim whitespace

    // Check if username or password fields are empty
    if(userName.length === 0 || password.length === 0){
        getToast.classList.remove("hidden");
        setTimeout(function(){
            getToast.classList.add("hidden");
        }, 3000);
        return;
    }
    
    const userData = sessionStorage.getItem("userData");
    
    // Check if userData is not found in sessionStorage
    if(userData === null){
        getToast.classList.remove("hidden");
        setTimeout(function(){
            getToast.classList.add("hidden");
        }, 3000);
        return;
    }

    // Parse userData
    const userDataParsed = JSON.parse(userData);

    // Check if entered username and password match stored user data
    if(userName === userDataParsed.email && password === userDataParsed.password){
        // Redirect to home page
        window.location.href = "home.html";
    } else {
        // Display error toast for invalid credentials
        getToast.classList.remove("hidden");
        setTimeout(function(){
            getToast.classList.add("hidden");
        }, 3000);
    }
}
