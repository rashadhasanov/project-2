const nav = document.querySelector(".nav-menu");

nav.addEventListener("click", (e) => {
  const clicked = e.target;
  const siblings = clicked.closest(".nav-menu").querySelectorAll(".link");
  if (!clicked.classList.contains("link")) return;
  siblings.forEach((el) => {
    if (el !== clicked) el.classList.remove("active-link");
  });
  clicked.classList.add("active-link");
});

const darkMode = document.querySelector(".dark-mode");

darkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkMode.textContent = "Light";
    darkMode.style.borderColor = "white";
  } else {
    darkMode.textContent = "Dark";
    darkMode.style.borderColor = "black";
  }
});
