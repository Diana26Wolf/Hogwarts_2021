function Login(){
    un= document.getElementById("user").value;
    localStorage.setItem("User_Name", un);
    window.location="hogwarts_room.html"
}