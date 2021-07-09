var firebaseConfig = {
      apiKey: "AIzaSyB1IPYHr1L60VAoyN5o12RYhbcqpSON7G0",
      authDomain: "hogwarts2021-7f22a.firebaseapp.com",
      databaseURL: "https://hogwarts2021-7f22a-default-rtdb.firebaseio.com",
      projectId: "hogwarts2021-7f22a",
      storageBucket: "hogwarts2021-7f22a.appspot.com",
      messagingSenderId: "55432892623",
      appId: "1:55432892623:web:f4c5373f7606fb77ce67ba",
      measurementId: "G-7LP8GJ5V1T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS HERE

username = localStorage.getItem("User_Name")
document.getElementById("username").innerHTML = "Welcome " + username + "!"

function Add() {
      roomname = document.getElementById("room2").value
      firebase.database().ref("/").child(roomname).update({

      })
      localStorage.setItem("rn", roomname)
      window.location = "hogwarts_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("rooms").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='navigate(this.id)'>" + Room_names + "</div><br>"
                  document.getElementById("rooms").innerHTML += row;
                  //End code
            });
      });
}
getData();

function Logout() {
      localStorage.removeItem("rn")
      localStorage.removeItem("User_Name")
      window.location = "hogwarts.html"
}

function navigate(name) {
      localStorage.setItem("rn", name)
      window.location = "hogwarts_page.html"
}
function Secret(){
      window.location = "PLogin.html"
}
window.addEventListener("send1", final_send)
function final_send(e){  
post= localStorage.getItem("class");
document.getElementById("CR").innerHTML= post;
}