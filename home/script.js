var img = document.getElementById("myImage"); 
img.addEventListener("click", function() { 
   window.location = "https://dapibble.com"
}); 
function toggle() {
  let menu = document.getElementById("side-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
  else {
    menu.style.display = "block";
  }
}


