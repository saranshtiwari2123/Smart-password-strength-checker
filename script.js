document.getElementById("checkBtn").addEventListener("click", function () {

    let password = document.getElementById("password").value;

    let score = 0;

    // Length check
    if (password.length >= 8) {
        score++;
    }

    // Uppercase check
    if (/[A-Z]/.test(password)) {
        score++;
    }

    // Lowercase check
    if (/[a-z]/.test(password)) {
        score++;
    }

    // Number check
    if (/[0-9]/.test(password)) {
        score++;
    }

    // Special character check
    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }

    let result = document.getElementById("result");

    let progressBar = document.getElementById("progress-bar");

    if (score <= 2) {

    result.innerText = "Strength: Weak";
    result.style.color = "red";

    progressBar.style.width = "40%";
    progressBar.style.backgroundColor = "red";
}
    else if (score <= 4) {

    result.innerText = "Strength: Medium";
    result.style.color = "orange";

    progressBar.style.width = "70%";
    progressBar.style.backgroundColor = "orange";
}
    else {

    result.innerText = "Strength: Strong";
    result.style.color = "green";

    progressBar.style.width = "100%";
    progressBar.style.backgroundColor = "green";
}

});

let toggleBtn = document.getElementById("toggleBtn");
let passwordInput = document.getElementById("password");

toggleBtn.addEventListener("click", function(){

    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        toggleBtn.innerText = "Hide";
    }
    else{
        passwordInput.type = "password";
        toggleBtn.innerText = "Show";
    }

});

let generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", function(){

    let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    for(let i = 0; i < 12; i++){

        let randomIndex =
        Math.floor(Math.random() * chars.length);

        password += chars[randomIndex];
    }

    passwordInput.value = password;

});

let copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", function(){

    navigator.clipboard.writeText(
        passwordInput.value
    );

    alert("Password Copied!");
});