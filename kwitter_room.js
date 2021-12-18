var firebaseConfig = {
      apiKey: "AIzaSyByqen64VIJ_vRlH8vEHAggXDazuaeo3hs",
      authDomain: "kwitter-dba57.firebaseapp.com",
      databaseURL: "https://kwitter-dba57-default-rtdb.firebaseio.com",
      projectId: "kwitter-dba57",
      storageBucket: "kwitter-dba57.appspot.com",
      messagingSenderId: "807429542974",
      appId: "1:807429542974:web:cd5041fa338d11bb80ed6f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row
      });});}
getData();
function redirectToRoomName(name)
{
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location="index.html";
}