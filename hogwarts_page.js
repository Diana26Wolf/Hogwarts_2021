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
roomname = localStorage.getItem("rn")

function Send() {
      input_msg = document.getElementById("Msg").value;
      if (input_msg == "") {
            document.getElementById("Msg").value = "Type something first"

      } else {
            firebase.database().ref(roomname).push({
                  name: username,
                  message: input_msg,
                  like: 0
            })
            document.getElementById("Msg").value = "";
      }
}

function getData() {
      firebase.database().ref("/" + roomname).on('value', function (snapshot) {
          document.getElementById("Output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              childData = childSnapshot.val();
              if (childKey != "purpose") {
                  firebase_message_id = childKey;
                  message_data = childData;
                  var name = message_data['name']
                  message = message_data['message']
                  like = message_data['like']
  
                  name_var = "<h4>" + name + "<img class= 'user_tick' src= 'tick.png'> </h4>";
                  name_message = "<h4 class= 'message_h4'>" + message + "</h4>";
                  firebase_btn = "<button class= 'btn btn-warning' id= " + firebase_message_id + " value= " + like + " onclick= 'update_like(this.id)'>"
                  span_tag = "<span class= 'glyphicon glyphicon-thumbs-up'> Like:" + like + "</span> </button> <hr>"
                  row = name_var + name_message + firebase_btn + span_tag;
                  document.getElementById("Output").innerHTML += row;
  
              }
          });
      });
  }

getData();

function Logout() {
      localStorage.removeItem("rn")
      localStorage.removeItem("User_Name")
      window.location = "hogwarts.html"
}

function update_like(message_id) {
      button_id = message_id
      likes = document.getElementById(button_id).value
      likes_in_number = Number(likes) + 1
      firebase.database().ref(roomname).child(message_id).update({
            like: likes_in_number
      })
}