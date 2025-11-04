let toggle = document.querySelector("#toggleBtn");

function setDarklight() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
}

if( localStorage.getItem("theme")){
document.body.classList.add(localStorage.getItem("theme"))
}
else{
  setDarklight();
}


// Toggle theme manually
toggle.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  localStorage.setItem("theme", "dark")
  } 
  
  else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
});

// Detect system theme change
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
  if(!localStorage.getItem("theme")){
setDarklight(); 
  }
  
});

// Set initial theme
setDarklight();
