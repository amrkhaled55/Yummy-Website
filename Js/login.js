 const emailInput = document.getElementById("input-name");
const passwordInput = document.getElementById("input-password");
const allUsers = JSON.parse(localStorage.getItem("user")) || [];

function login() {
    const msgError = document.getElementById("msgError");

    const foundUser = allUsers.find(
        user => user.email === emailInput.value && user.password === passwordInput.value
    );

    if (foundUser) {
        window.location = "./home.html";
        console.log("sss");
        
    } else {
        msgError.classList.remove("d-none");
    }
}

document.querySelector(".btn-login").addEventListener("click", login);
