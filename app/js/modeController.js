modeCheckbox.addEventListener("click", e => {
  if (modeCheckbox.checked) {
    console.log("Day Mode");
    sliderIcon.classList.remove("fa-moon");
    sliderIcon.classList.add("fa-sun");
  } else {
    console.log("Night Mode");
    sliderIcon.classList.remove("fa-sun");
    sliderIcon.classList.add("fa-moon");
  }
});
