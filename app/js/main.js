window.addEventListener("wheel", e => {
  if (e.deltaY < 0 && currentSectionIdx > 0) {
    // scrolled up
    scrollToPrev();
  } else if (e.deltaY > 0 && currentSectionIdx < sections.length - 1) {
    // scrolled down
    scrollToNext();
  }
});
