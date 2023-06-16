const myForm = document.getElementById("myForm");
const result = document.getElementById("result");

myForm.addEventListener("submit", (e)=> {
  e.preventDefault()
  result.textContent = "Thank you for reaching out"

})


function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
