const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  emailValidate();
  mainPasswordValidate();
  validar();
});

function setError(index) {
  campos[index].style.border = "2px solid #ff7f00";
  spans[index].style.display = "block";
}

function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

function emailValidate() {
  if (!emailRegex.test(campos[0].value)) {
    setError(0);
  } else {
    removeError(0);
  }
}

function mainPasswordValidate() {
  if (campos[1].value.length < 8) {
    setError(1);
  } else {
    removeError(1);
  }
}

let elemento_pai1 = document.getElementById("elementoPai");

function validar() {
  if ((!emailRegex.test(campos[0].value)) && campos[1].value.length < 8) {
    validar2();
  } else {
    validar1();  
  }
}
const span1 = document.createElement("span-h5");
function validar1() {
  span1.textContent = "Formulário Enviado";
  elemento_pai1.appendChild(span1);
  elemento_pai1.style.display = "block";
}
const span2 = document.createElement("span-h6");
function validar2() {
  span2.textContent = "Formulário precisa preencher campos corretamente.";
  elemento_pai1.appendChild(span2);
  elemento_pai1.style.display = "block";
}
