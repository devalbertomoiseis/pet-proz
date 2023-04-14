const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    !(
      nameValidate() &&
      emailValidate() &&
      mainPasswordValidate() &&
      comparePassword() &&
      ruaValidate() &&
      cepValidate() &&
      bairroValidate() &&
      numeroValidate() &&
      complementoValidate()
    ) == true
  ) {
    alert("enviado");
  } else {
    alert("não enviado");
  }
});

function setError(index) {
  campos[index].style.border = "2px solid #ff7f00";
  spans[index].style.display = "block";
}

function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}

function emailValidate() {
  if (!emailRegex.test(campos[1].value)) {
    setError(1);
  } else {
    removeError(1);
  }
}

function mainPasswordValidate() {
  if (campos[2].value.length < 8) {
    setError(2);
  } else {
    removeError(2);
    comparePassword();
  }
}

function comparePassword() {
  if (campos[2].value == campos[3].value && campos[3].value.length >= 8) {
    removeError(3);
  } else {
    setError(3);
  }
}

function ruaValidate() {
  if (campos[4].value.length < 6) {
    setError(4);
  } else {
    removeError(4);
  }
}

function cepValidate() {
  if (campos[5].value.length < 9) {
    setError(5);
  } else {
    removeError(5);
  }
}

function bairroValidate() {
  if (campos[6].value.length < 10) {
    setError(6);
  } else {
    removeError(6);
  }
}

function numeroValidate() {
  if (campos[7].value.length < 1 || campos[7].value <= 0) {
    setError(7);
  } else {
    removeError(7);
  }
}

function complementoValidate() {
  if (campos[8].value.length < 20) {
    setError(8);
  } else {
    removeError(8);
  }
}
