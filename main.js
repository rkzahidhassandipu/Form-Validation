const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

form.addEventListener("submit", e =>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const repasswordValue = repassword.value.trim();

    if (usernameValue === "") {
        setErrorFor(username, "Username cannot be blank");
    }else if(usernameValue == "~!@#$%^&*()+=-[]{}'|;/.,<>"){
        
    }
    else{
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, "Not a valid email");
    }
    else{
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "password cannot be blank");
    }
    else{
        setSuccessFor(password);
    }

    if (repasswordValue === "") {
        setErrorFor(repassword, "Retype-Password cannot be blank");
    }
    else if (repasswordValue !== passwordValue) {
        setErrorFor(repassword, "Password does not match");
    }
    else{
        setSuccessFor(repassword);
    }

    

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const span = formControl.querySelector("span");
        formControl.className = "form-control error";
        span.innerText = message;
    }
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success"
    }
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

