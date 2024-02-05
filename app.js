passwordInput = document.querySelector("#pwd");
confirmPasswordInput = document.querySelector("#confirm-pwd");
errorMessage = document.querySelector(".error");
submitButton = document.querySelector("button")

submitButton.addEventListener("click", (event) => {
    if (confirmPasswordInput.value != passwordInput.value) {
        console.log("Passwords do not match");
        errorMessage.textContent = "* Passwords do not match";
        passwordInput.classList.add("invalid");
        confirmPasswordInput.classList.add("invalid");
        event.preventDefault();
    }
    else if (passwordInput.value == '' || confirmPasswordInput == ''){
        console.log("empty pass");
        errorMessage.textContent = "* Please enter a password";
        passwordInput.classList.add("invalid");
        confirmPasswordInput.classList.add("invalid");
        event.preventDefault();
    }
    else {
        errorMessage.textContent = "";
        passwordInput.classList.remove("invalid");
        confirmPasswordInput.classList.remove("invalid");
    }
});