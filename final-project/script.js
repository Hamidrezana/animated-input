document.querySelectorAll("input").forEach((e) => {
  e.addEventListener("blur", function (e) {
    const label = e.target.parentNode.querySelector("label").classList;
    if (e.target.value !== "") {
      label.add("animated-input__label--active");
    } else {
      label.remove("animated-input__label--active");
    }
  });
});
document.querySelectorAll(".animated-input").forEach((e) => {
  e.addEventListener("click", function (e) {
    const input = e.target.querySelector("input");
    if (input) {
      input.focus();
    }
  });
});
