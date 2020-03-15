modeCheckbox.addEventListener("click", e => {
  if (modeCheckbox.checked) {
    console.log("Day Mode");
    sliderIcon.classList.remove("fa-moon");
    sliderIcon.classList.add("fa-sun");
    document.body.classList.remove("dark");
  } else {
    console.log("Night Mode");
    sliderIcon.classList.remove("fa-sun");
    sliderIcon.classList.add("fa-moon");
    document.body.classList.add("dark");
  }
});
