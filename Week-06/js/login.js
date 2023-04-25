window.addEventListener("load", function () {
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

  /* email.addEventListener("blur", function validationEmail() {
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
}); */
});
