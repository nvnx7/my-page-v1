modeCheckbox.addEventListener("click", e => {
  if (modeCheckbox.checked) {
    sliderIcon.classList.remove("fa-moon");
    sliderIcon.classList.add("fa-sun");
    document.body.classList.remove("dark");
  } else {
    sliderIcon.classList.remove("fa-sun");
    sliderIcon.classList.add("fa-moon");
    document.body.classList.add("dark");
  }
});
