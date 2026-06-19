function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "" || password === "") {
        alert("Please enter your username and password.");
    }else if(username !== "" && password !== "") {
        alert("Login successful!");
        window.location.href = "index.html";
    }

}