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
  // If scroll is locked momentarily do nothing (existing scroll might be happening)
  if (lockScroll) return;
  if (!(currentSectionIdx < sections.length - 1)) return;

  currentSectionIdx++;
  document.querySelector(sections[currentSectionIdx]).scrollIntoView(true);
  setScrollLockTimeout();
  animateHeader(currentSectionIdx);
}

function scrollToPrev() {
  // If scroll is locked momentarily do nothing (existing scroll might be happening)
  if (lockScroll) return;
  if (!(currentSectionIdx > 0)) return;

  currentSectionIdx--;
  document.querySelector(sections[currentSectionIdx]).scrollIntoView(true);
  setScrollLockTimeout();
}

function scrollToSection(sectionIdx) {
  // If scroll is locked momentarily do nothing (existing scroll might be happening)
  if (lockScroll) return;
  currentSectionIdx = sectionIdx;
  document.querySelector(sections[currentSectionIdx]).scrollIntoView(true);
}

// locks the scroll functionality for 500ms
function setScrollLockTimeout() {
  lockScroll = true;
  setTimeout(() => {
    lockScroll = false;
  }, 500);
}

function reset() {
  currentSectionIdx = 0;
  document.getElementById("intro").scrollIntoView(true);
}

// animate the header when into view first time
function animateHeader(currentSecIdx) {
  switch (currentSecIdx) {
    case 1:
      document.getElementById("header-about").classList.add("type-about");
      break;

    case 2:
      document.getElementById("header-skills").classList.add("type-skills");
      break;

    case 3:
      document.getElementById("header-connect").classList.add("type-connect");
      break;
  }
}
