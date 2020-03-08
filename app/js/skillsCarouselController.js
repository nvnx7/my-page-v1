const navDotToggleClass = "nav-dot-current";
let currentIdx = 0;
const carousel = document.querySelector("#skill-items-container");

// skip last dummy item
const items = Array.from(carousel.getElementsByClassName("skill-item")).slice(
  0,
  -1
);

const navDotsList = Array.from(
  document.getElementById("nav-dots").getElementsByClassName("nav-dot")
);

function scrollToNextItem() {
  if (currentIdx >= items.length - 1) return;

  // remove class from prev dot
  navDotsList[currentIdx].classList.remove(navDotToggleClass);
  currentIdx++;
  carousel.scrollTo(items[currentIdx].offsetLeft, 0);

  // add class to current dot
  navDotsList[currentIdx].classList.add(navDotToggleClass);
}

function scrollToPrevItem() {
  if (currentIdx <= 0) return;

  // remove class from prev dot
  navDotsList[currentIdx].classList.remove(navDotToggleClass);
  currentIdx--;
  carousel.scrollTo(items[currentIdx].offsetLeft, 0);

  // add class to current dot
  navDotsList[currentIdx].classList.add(navDotToggleClass);
}

function scrollToItem(element) {
  const idx = navDotsList.indexOf(element);

  if (idx == -1) return;

  // remove class from prev dot
  navDotsList[currentIdx].classList.remove(navDotToggleClass);
  currentIdx = idx;
  carousel.scrollTo(items[currentIdx].offsetLeft, 0);

  // add class to current dot
  navDotsList[currentIdx].classList.add(navDotToggleClass);
}

function getRelativeX(query) {
  return document.querySelector(query).offsetLeft;
}
