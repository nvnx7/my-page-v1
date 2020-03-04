const carousel = document.querySelector("#skill-carousel");
const nextBtn = document.querySelector("#nav-btn-next");
const prevBtn = document.querySelector("#nav-btn-prev");
const leftPad = getElementX("#skills");

nextBtn.addEventListener("click", e => {
  carousel.scrollTo(getElementX("#item2") - leftPad, 0);
});

function getElementX(query) {
  return document.querySelector(query).getBoundingClientRect().left;
}
