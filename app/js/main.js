const wrapper = document.getElementById("wrapper");

const nextBtn = document.querySelector("#nav-btn-next");
const prevBtn = document.querySelector("#nav-btn-prev");
const peekGradient = document.querySelector("#fade-gradient");
const navDots = document.querySelector("#nav-dots");

const navBar = document.getElementById("navbar");
const navExpandBtn = document.getElementById("nav-expand");
const navCollapseBtn = document.getElementById("nav-collapse");
const navBtnList = document.getElementById("nav-list");

window.addEventListener("wheel", e => {
  if (e.deltaY < 0 && currentSectionIdx > 0) {
    // scrolled up
    scrollToPrev();
  } else if (e.deltaY > 0 && currentSectionIdx < sections.length - 1) {
    // scrolled down
    scrollToNext();
  }
});

peekGradient.addEventListener("click", e => {
  scrollToNextItem();
});

nextBtn.addEventListener("click", e => {
  scrollToNextItem();
});

prevBtn.addEventListener("click", e => {
  scrollToPrevItem();
});

navDots.addEventListener("click", e => {
  scrollToItem(e.target);
});

navExpandBtn.addEventListener("click", e => {
  if (e.target) {
    expandNavBar();
  }
});

navCollapseBtn.addEventListener("click", e => {
  if (e.target) {
    collapseNavBar();
  }
});

navBtnList.addEventListener("click", e => {
  if (e.target.tagName == "A") {
    e.preventDefault();
    collapseNavBar();

    const idx = sections.indexOf(e.target.getAttribute("href"));

    scrollToSection(idx);
  }
});
