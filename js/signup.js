function signup() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    if (name!=="" && email!=="" && username!=="" && password!=="" && confirmPassword!=="") {
        if (password === confirmPassword) {
            alert("Sign up successful!");
            window.location.href = "login.html";
            return;     
        }
        else if (password !== confirmPassword) {
            alert("Passwords do not match.");
        }
    }
    else if (name=="") {
        alert("Please enter your name.");
    }
    else if (email=="") {
        alert("Please enter your email.");
    }
    else if (username=="") {
        alert("Please enter your username.");
    }
    else if (password=="") {
        alert("Please enter your password.");
    }
    else if (password=="") {
        alert("Please enter your password.");
    }
    else if (confirmPassword=="") {
        alert("Please confirm your password.");
    }
}