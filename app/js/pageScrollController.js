const Section = Object.freeze({
  Intro: "#intro",
  About: "#about",
  Skills: "#skills",
  Connect: "#connect"
});

let currentSectionIdx = 0;
const sections = [
  Section.Intro,
  Section.About,
  Section.Skills,
  Section.Connect
];

let lockScroll = false;

function scrollToNext() {
  // Don't jump to next section if there's existing scrolling happening
  if (lockScroll) return;
  if (!(currentSectionIdx < sections.length - 1)) return;

  currentSectionIdx++;
  document.querySelector(sections[currentSectionIdx]).scrollIntoView(true);
  setScrollLockTimeout();
}

function scrollToPrev() {
  // Don't jump to next section if there's existing scrolling happening
  if (lockScroll) return;
  if (!(currentSectionIdx > 0)) return;

  currentSectionIdx--;
  document.querySelector(sections[currentSectionIdx]).scrollIntoView(true);
  setScrollLockTimeout();
}

function scrollToSection(sectionIdx) {
  // Don't jump to next section if there's existing scrolling happening
  if (lockScroll) return;
  currentSectionIdx = sectionIdx;
  document.querySelector(sections[currentSectionIdx]).scrollIntoView(true);
}

function setScrollLockTimeout() {
  lockScroll = true;
  setTimeout(() => {
    lockScroll = false;
  }, 500);
}

function getRelativeY(query) {
  return document.querySelector(query).offsetTop;
}

function getElementY(query) {
  return document.querySelector(query).getBoundingClientRect().top;
}

function reset() {
  currentSectionIdx = 0;
  document.getElementById("intro").scrollIntoView(true);
}
