const Section = Object.freeze({
  Intro: "#intro",
  About: "#about",
  Skills: "#skills",
  Connect: "#connect"
});

let currentSectionIdx = 0;
let currentTop = 0;
const sections = [
  Section.Intro,
  Section.About,
  Section.Skills,
  Section.Connect
];

function scrollToNext() {
  // Don't jump to next section if there's existing scrolling happening
  if (isStillScrolling(currentSectionIdx)) return;
  if (!(currentSectionIdx < sections.length - 1)) return;

  currentTop += getElementY(sections[currentSectionIdx + 1]);
  window.scrollTo(0, currentTop);
  currentSectionIdx++;
}

function scrollToPrev() {
  // Don't jump to next section if there's existing scrolling happening
  if (isStillScrolling(currentSectionIdx)) return;
  if (!(currentSectionIdx > 0)) return;

  currentTop += getElementY(sections[currentSectionIdx - 1]);
  window.scrollTo(0, currentTop);
  currentSectionIdx--;
}

function scrollToSection(sectionIdx) {
  currentTop += getElementY(sections[sectionIdx]);
  window.scrollTo(0, currentTop);
}

// Currently approaching section's (pending section's) top is 0 when it's done scrolling
function isStillScrolling(pendingSectionIdx) {
  if (getElementY(sections[pendingSectionIdx]) == 0) return false;
  return true;
}

function getElementY(query) {
  return document.querySelector(query).getBoundingClientRect().top;
}

// document.querySelector("#navbar").addEventListener("click", e => {
//   let top = getElementY(sections[currentSectionIdx]);
//   console.log("Top of " + sections[currentSectionIdx] + ": " + top);
// });
