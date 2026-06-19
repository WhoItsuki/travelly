function book(){
    let destination = document.getElementById("destination").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let travelers = document.getElementById("travelers").value;

    if(destination === "" || checkin === "" || checkout === "" || travelers === ""){
        alert("Please fill in all fields.");
        return;
    }
    else{
        alert("Booking successful!");
    }

}