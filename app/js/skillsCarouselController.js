const navDotClassName = "nav-dot";

let currentIdx = 0;
const items = ["#item1", "#item2", "#item3"];
const carousel = document.querySelector("#skill-items-container");
const nextBtn = document.querySelector("#nav-btn-next");
const prevBtn = document.querySelector("#nav-btn-prev");

nextBtn.addEventListener("click", e => {
  if (currentIdx >= items.length - 1) return;

  currentIdx++;
  carousel.scrollTo(getRelativeX(items[currentIdx]), 0);
});

prevBtn.addEventListener("click", e => {
  if (currentIdx <= 0) return;

  currentIdx--;
  carousel.scrollTo(getRelativeX(items[currentIdx]), 0);
});

function getRelativeX(query) {
  return document.querySelector(query).offsetLeft;
}
