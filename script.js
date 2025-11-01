let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(kuch) {
  if (kuch.key === " ") {
    h1.textContent = "SPC"; // shows "SPC" when space is pressed
  } else {
    h1.textContent = kuch.key; // shows other key names
  }

  console.log(kuch.key);
});
