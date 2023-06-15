function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  var myForm = document.getElementById("myForm");
      var result = document.getElementById("result");
      function submitForm(event) {
         event.preventDefault();
         myForm.submit();

         result.innerHTML = "<b>Thank you for reaching out</b>"
      }