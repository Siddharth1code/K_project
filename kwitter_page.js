firebaseConfig = {
      apiKey: "AIzaSyByqen64VIJ_vRlH8vEHAggXDazuaeo3hs",
      authDomain: "kwitter-dba57.firebaseapp.com",
      databaseURL: "https://kwitter-dba57-default-rtdb.firebaseio.com",
      projectId: "kwitter-dba57",
      storageBucket: "kwitter-dba57.appspot.com",
      messagingSenderId: "807429542974",
      appId: "1:807429542974:web:cd5041fa338d11bb80ed6f"
}
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

 function send()
 {
       msg=document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });
       document.getElementById("msg").value="";
 }
function getData() 
{ 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{
       document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) 
        { childKey  = childSnapshot.key; childData = childSnapshot.val(); 
            if(childKey != "purpose") 
        {
         firebase_message_id = childKey;
         message_data = childData;
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_with_tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row=name_with_tag+message_with_tag+like_with_tag+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData()
function updatelike(message_id)
 {
        console.log("clicked on like button - " + message_id);
         button_id = message_id; likes = document.getElementById(button_id).value;
          updated_likes = Number(likes) + 1;
           console.log(updated_likes);
            firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
 }
 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("Room_name");
       window.location="index.html";
 }