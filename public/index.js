const menu = document.querySelector("#menu");

let burger = document.querySelector("#burger");

burger.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});
