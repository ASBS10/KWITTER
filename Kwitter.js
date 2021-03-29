function addUser() {
    Username = document.getElementById("username").value;
    localStorage.setItem("user_name", Username);
    window.location="kwitter_room.html";
}