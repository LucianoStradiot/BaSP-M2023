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
    paragraph.innerText = warnings;
  }
  email.addEventListener("focus", function validationEmail() {
    var warnings = "";

    email.classList.remove("red-border");
    warnings += "";
    paragraph.innerText = warnings;
  });
});

password.addEventListener("blur", function validationPassword() {
  var paragraph = document.getElementById("warnings-2");

  var warnings = "";

  if (password.value.length < 8) {
    password.classList.add("red-border");
    warnings += "Password is not valid";
    paragraph.innerText = warnings;
  }
  password.addEventListener("focus", function validationPassword() {
    var warnings = "";

    password.classList.remove("red-border");
    warnings += "";
    paragraph.innerText = warnings;
  });
});

form.addEventListener("submit", function validation(e) {
  e.preventDefault();
  if (validationEmail() && validationPassword()) {
    alert(email.value && password.value);
  }
});

/* form.addEventListener("submit", function validation(e) {
  e.preventDefault();
  var warnings = "";
  var enter = false;
  var regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  paragraph.innerHTML = "";

  if (!regexEmail.test(email.value)) {
    warnings += `E-mail is not valid `;
    enter = true;
  }

  if (password.value.length < 8) {
    warnings += "Password is not valid";
    enter = true;
  }

  if (enter) {
    paragraph.innerText = warnings;
  } else {
    alert("Email and password succesfull");
  }
}); */
