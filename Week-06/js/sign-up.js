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
var repeatPassInput = document.getElementById("repeat-password");

var chars = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var charsNumb = "0123456789";

/* Validate Name and Last Name*/

var paragraph = document.getElementById("warningsName");
var paragraph2 = document.getElementById("warningsLastName");

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

/* Validate DNI */

var paragraph3 = document.getElementById("warningsDNI");

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

/* Validate Birth Date */

var paragraph4 = document.getElementById("warningsBdate");

function validateBdate() {
  var bdate = bDateInput.value;

  if (bdate.substring(0, 4) < 1930 || bdate.substring(0, 4) > 2013) {
    return false;
  } else {
    return true;
  }
}

bDateInput.addEventListener("blur", function () {
  var warnings = "";
  var rslt = validateBdate(bDateInput);
  console.log(rslt);
  if (rslt) {
    bDateInput.classList.remove("red-border");
    bDateInput.classList.add("green-border");
  } else {
    bDateInput.classList.remove("green-border");
    bDateInput.classList.add("red-border");
    warnings += "Format not valid";
    paragraph4.innerHTML = warnings;
  }
});

bDateInput.addEventListener("focus", function () {
  document.getElementById("warningsBdate").innerHTML = "";

  bDateInput.classList.remove("green-border");
  bDateInput.classList.remove("red-border");
});

/* Validate Phone */

var paragraph5 = document.getElementById("warningsPhone");

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

/* Validate Address */

var paragraph6 = document.getElementById("warningsAddress");

function validateAddress() {}

addressInput.addEventListener("blur", function () {
  var warnings = "";
  var rslt = validateName(addressInput);

  if (rslt) {
    addressInput.classList.remove("red-border");
    addressInput.classList.add("green-border");
  } else {
    addressInput.classList.remove("green-border");
    addressInput.classList.add("red-border");
    warnings += "Must contain numbers and more than 5 letters ";
    paragraph6.innerHTML = warnings;
  }
});

addressInput.addEventListener("focus", function () {
  document.getElementById("warningsAddress").innerHTML = "";

  addressInput.classList.remove("green-border");
  addressInput.classList.remove("red-border");
});

/* Validate City */

var paragraph7 = document.getElementById("warningsCity");

function validateCity(inputCty) {
  var city = inputCty.value;
  var validNumbers = true;

  for (var i = 0; i < city.length; i++) {
    if (chars.indexOf(city.charAt(i)) == -1) {
      validNumbers = false;
      break;
    }
  }
  if (validNumbers && city.length > 3) {
    return true;
  } else {
    return false;
  }
}

cityInput.addEventListener("blur", function () {
  var warnings = "";
  var rslt = validateCity(cityInput);

  if (rslt) {
    cityInput.classList.remove("red-border");
    cityInput.classList.add("green-border");
  } else {
    cityInput.classList.remove("green-border");
    cityInput.classList.add("red-border");
    warnings += "Must contain more than 3 letters ";
    paragraph7.innerHTML = warnings;
  }
});

cityInput.addEventListener("focus", function () {
  document.getElementById("warningsCity").innerHTML = "";

  cityInput.classList.remove("green-border");
  cityInput.classList.remove("red-border");
});

/* Validate Postal Code */

var paragraph8 = document.getElementById("warningsPcode");

function validatePcode(inputPostal) {
  var postalCode = inputPostal.value;
  var validNumbers = true;

  for (var i = 0; i < postalCode.length; i++) {
    if (charsNumb.indexOf(postalCode.charAt(i)) == -1) {
      validNumbers = false;
      break;
    }
  }
  if (validNumbers && (postalCode.length < 4 || postalCode.length > 5)) {
    return false;
  } else {
    return true;
  }
}

pCodeInput.addEventListener("blur", function () {
  var warnings = "";
  var rslt = validatePcode(pCodeInput);

  if (rslt) {
    pCodeInput.classList.remove("red-border");
    pCodeInput.classList.add("green-border");
  } else {
    pCodeInput.classList.remove("green-border");
    pCodeInput.classList.add("red-border");
    warnings += "Must contain between 4 and 5 numbers";
    paragraph8.innerHTML = warnings;
  }
});

pCodeInput.addEventListener("focus", function () {
  document.getElementById("warningsPcode").innerHTML = "";

  pCodeInput.classList.remove("green-border");
  pCodeInput.classList.remove("red-border");
});

/* Validate Email */

var paragraph9 = document.getElementById("warningsEmail");

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
    paragraph9.innerHTML = warnings;
  }
});

emailInput.addEventListener("focus", function () {
  document.getElementById("warningsEmail").innerHTML = "";

  emailInput.classList.remove("green-border");
  emailInput.classList.remove("red-border");
});

/* Validate Password and Repeat Password */

var paragraph10 = document.getElementById("warningsPass");
var paragraph11 = document.getElementById("warningsPass2");

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
    paragraph10.innerHTML = warnings;
  }
});

passInput.addEventListener("focus", function () {
  document.getElementById("warningsPass").innerHTML = "";

  passInput.classList.remove("green-border");
  passInput.classList.remove("red-border");
});

repeatPassInput.addEventListener("blur", function () {
  var warnings = "";
  var rslt = validatePass(repeatPassInput);

  if (rslt) {
    repeatPassInput.classList.remove("red-border");
    repeatPassInput.classList.add("green-border");
  } else {
    repeatPassInput.classList.remove("green-border");
    repeatPassInput.classList.add("red-border");
    warnings += "Password not valid";
    paragraph11.innerHTML = warnings;
  }
});

repeatPassInput.addEventListener("focus", function () {
  document.getElementById("warningsPass2").innerHTML = "";

  repeatPassInput.classList.remove("green-border");
  repeatPassInput.classList.remove("red-border");
});
