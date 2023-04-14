const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type == "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

/*
function typewriterEffect(element, delay = 0) {
  let split_element = element.innerHTML.split("");
  element.innerHTML = "";
  setTimeout(() => {
    split_element.forEach((value, index) => {
      setTimeout(() => {
        element.innerHTML += value;
      }, 100 * index);
    });
  }, delay);
}

typewriterEffect(document.getElementById("teste-escrever"));
typewriterEffect(document.getElementById("teste-escrever"), 900);

*/