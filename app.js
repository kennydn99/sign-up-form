passwordInput = document.querySelector("#pwd");
confirmPasswordInput = document.querySelector("confirm-pwd");

passwordInput.addEventListener("input", () => {
    console.log("pwd input has changed");
    if (passwordInput.value != confirmPasswordInput) {
        console.log("Passwords do not match");
    }
});