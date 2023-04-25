var nameInput = document.getElementById("name");
var lastNameInput = document.getElementById("last-name");
var dniInput = document.getElementById("DNI");
var bDateInput = document.getElementById("birth-date");
var phoneInput = document.getElementById("phone");
var addressInput = document.getElementById("address");
var cityInput = document.getElementById("city");
var pCodeInput = document.getElementById("postal-code");
var emailInput = document.getElementById("e-mail");
var passInput = document.getElementById("password");

var chars = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var charsNumb = "0123456789";

function validateName(input) {
  var value = input.value;
  var validLetters = true;

  for (var i = 0; i < value.length; i++) {
    if (chars.indexOf(value.charAt(i)) == -1) {
      validLetters = false;
      break;
    }
  }
  if (validLetters && value.length >= 3) {
    return true;
  } else {
    return false;
  }
}

function validateDNI(dniNumber) {
  var value = dniNumber.value;
  var validNumbers = true;

  for (var i = 0; i < value.length; i++) {
    if (charsNumb.indexOf(value.charAt(i)) == -1) {
      validNumbers = false;
      break;
    }
  }
  if (validNumbers && value.length >= 7) {
    return true;
  } else {
    return false;
  }
}

function validatePhone(phoneNumber) {
  var value = phoneNumber.value;
  var validNumbers = true;

  for (var i = 0; i < value.length; i++) {
    if (charsNumb.indexOf(value.charAt(i)) == -1) {
      validNumbers = false;
      break;
    }
  }
  if (validNumbers && value.length == 10) {
    return true;
  } else {
    return false;
  }
}

function validateBdate() {
  var bdate = bDateInput.value;
  var validNumbers = true;
  console.log(bdate);
  for (var i = 0; i < bdate.length; i++) {
    if (bdate.substring(0, 4) !== 4) {
      validNumbers = false;
      break;
    }
  }
}

var paragraph = document.getElementById("warningsName");
var paragraph2 = document.getElementById("warningsLastName");
var paragraph3 = document.getElementById("warningsDNI");
var paragraph4 = document.getElementById("warningsBdate");
var paragraph5 = document.getElementById("warningsPhone");

nameInput.addEventListener("blur", function () {
  var warnings = "";
  var rslt = validateName(nameInput);

  if (rslt) {
    nameInput.classList.remove("red-border");
    nameInput.classList.add("green-border");
  } else {
    nameInput.classList.remove("green-border");
    nameInput.classList.add("red-border");
    warnings += "Must contain more than 3 letters ";
    paragraph.innerHTML = warnings;
  }
});

nameInput.addEventListener("focus", function () {
  document.getElementById("warningsName").innerHTML = "";

  nameInput.classList.remove("green-border");
  nameInput.classList.remove("red-border");
});

lastNameInput.addEventListener("blur", function () {
  var warnings = "";
  var rslt = validateName(lastNameInput);

  if (rslt) {
    lastNameInput.classList.remove("red-border");
    lastNameInput.classList.add("green-border");
  } else {
    lastNameInput.classList.remove("green-border");
    lastNameInput.classList.add("red-border");
    warnings += "Must contain more than 3 letters";
    paragraph2.innerHTML = warnings;
  }
});

lastNameInput.addEventListener("focus", function () {
  document.getElementById("warningsLastName").innerHTML = "";

  lastNameInput.classList.remove("green-border");
  lastNameInput.classList.remove("red-border");
});

dniInput.addEventListener("blur", function () {
  var warnings = "";
  var rslt = validateDNI(dniInput);

  if (rslt) {
    dniInput.classList.remove("red-border");
    dniInput.classList.add("green-border");
  } else {
    dniInput.classList.remove("green-border");
    dniInput.classList.add("red-border");
    warnings += "Must contain more than 7 numbers";
    paragraph3.innerHTML = warnings;
  }
});

dniInput.addEventListener("focus", function () {
  document.getElementById("warningsDNI").innerHTML = "";

  dniInput.classList.remove("green-border");
  dniInput.classList.remove("red-border");
});

phoneInput.addEventListener("blur", function () {
  var warnings = "";
  var rslt = validatePhone(phoneInput);

  if (rslt) {
    phoneInput.classList.remove("red-border");
    phoneInput.classList.add("green-border");
  } else {
    phoneInput.classList.remove("green-border");
    phoneInput.classList.add("red-border");
    warnings += "Must contain 10 numbers";
    paragraph5.innerHTML = warnings;
  }
});

phoneInput.addEventListener("focus", function () {
  document.getElementById("warningsPhone").innerHTML = "";

  phoneInput.classList.remove("green-border");
  phoneInput.classList.remove("red-border");
});

bDateInput.addEventListener("blur", function () {
  var warnings = "";
  var rslt = validateBdate(bDateInput);

  if (rslt) {
    bDateInput.classList.remove("red-border");
    bDateInput.classList.add("green-border");
  } else {
    bDateInput.classList.remove("green-border");
    bDateInput.classList.add("red-border");
    warnings += "Must contain 10 numbers";
    paragraph4.innerHTML = warnings;
  }
});

bDateInput.addEventListener("focus", function () {
  document.getElementById("warningsBdate").innerHTML = "";

  bDateInput.classList.remove("green-border");
  bDateInput.classList.remove("red-border");
});
