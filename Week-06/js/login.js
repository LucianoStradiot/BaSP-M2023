window.addEventListener("load", function () {
  var email = document.getElementById("e-mail");
  var password = document.getElementById("password");
  var form = document.getElementById("add-form");

  email.addEventListener("blur", function validationEmail() {
    var paragraph = document.getElementById("warnings");

    var warnings = "";
    var regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (!regexEmail.test(email.value)) {
      email.classList.add("red-border");
      warnings += "E-mail is not valid";
      paragraph.innerHTML = warnings;
    }
    email.addEventListener("focus", function validationEmail() {
      var warnings = "";

      email.classList.remove("red-border");
      warnings += "";
      paragraph.innerHTML = warnings;
    });
  });

  function validationPassword() {
    var paragraph = document.getElementById("warnings-2");

    var warnings = "";

    if (password.value.length < 8) {
      password.classList.add("red-border");
      warnings += "Password is not valid";
      paragraph.innerHTML = warnings;
    }
    password.addEventListener("focus", function validationPassword() {
      var warnings = "";

      password.classList.remove("red-border");
      warnings += "";
      paragraph.innerHTML = warnings;
    });
  }

  password.addEventListener("blur", validationPassword);
});
