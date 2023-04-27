var emailInput = document.getElementById("e-mail");
var passInput = document.getElementById("password");
var form = document.getElementById("add-form");

/* Validate Email */

var paragraph1 = document.getElementById("warnings");

function validateEmail(emailStr) {
  var email = emailStr.value;

  var regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  if (!regexEmail.test(email)) {
    return false;
  } else {
    return true;
  }
}

emailInput.addEventListener("blur", function () {
  var warnings = "";
  var rslt = validateEmail(emailInput);

  if (rslt) {
    emailInput.classList.remove("red-border");
    emailInput.classList.add("green-border");
  } else {
    emailInput.classList.remove("green-border");
    emailInput.classList.add("red-border");
    warnings += "Email not valid";
    paragraph1.innerHTML = warnings;
  }
});

emailInput.addEventListener("focus", function () {
  document.getElementById("warnings").innerHTML = "";

  emailInput.classList.remove("green-border");
  emailInput.classList.remove("red-border");
});

/* Validate Password and Repeat Password */

var paragraph2 = document.getElementById("warnings-2");

function validatePass(passStr) {
  var pass = passStr.value;
  if (pass.length < 8) {
    return false;
  } else {
    return true;
  }
}

passInput.addEventListener("blur", function () {
  var warnings = "";
  var rslt = validatePass(passInput);

  if (rslt) {
    passInput.classList.remove("red-border");
    passInput.classList.add("green-border");
  } else {
    passInput.classList.remove("green-border");
    passInput.classList.add("red-border");
    warnings += "Password not valid";
    paragraph2.innerHTML = warnings;
  }
});

passInput.addEventListener("focus", function () {
  document.getElementById("warnings-2").innerHTML = "";

  passInput.classList.remove("green-border");
  passInput.classList.remove("red-border");
});

/* Validate Login */

var formInput = document.getElementById("add-form");

formInput.addEventListener("submit", function validateForm(e) {
  e.preventDefault();

  if (
    emailInput.classList.contains("red-border") ||
    passInput.classList.contains("red-border")
  ) {
    alert("Some inputs have the wrong information");
  } else if (emailInput.value == "" || passInput.value == "") {
    alert("The fields are empty!");
  } else {
    alert(
      "The e-mail is : " +
        emailInput.value +
        "\nThe password is : " +
        passInput.value
    );
  }
});
