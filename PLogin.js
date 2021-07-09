function Go() {
    C = "Balderdash"
    if (document.getElementById("Password").value== C) {
        window.location = "Professors.html"
    } else {
       document.getElementById("no").innerHTML= "You are not permitted to view this page"
    }
}