function adduser()
{
    user_name=document.getElementById("user1").value;

    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}