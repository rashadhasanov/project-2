const listItems = document.querySelectorAll("a");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function () {
    for (let j = 0; j < listItems.length; j++) {
      listItems[j].classList.remove("active-link");
    }
    listItems[i].classList.add("active-link");
  });
}

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
