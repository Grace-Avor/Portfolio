/*const myForm = document.getElementById("myForm");
const result = document.getElementById("result");
myForm.addEventListener("submit", (e)=> {
  e.preventDefault()
  result.textContent = "Thank you for reaching out"

})*/


function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  function myFunction() {
    var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }