function book() {
    let name = document.getElementById("contact-name").value;
    let email = document.getElementById("contact-email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Message sent successfully!");

    }
}