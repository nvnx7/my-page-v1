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

function scrollToNext() {
  // Don't jump to next section if there's existing scrolling happening
  if (isStillScrolling(currentSectionIdx)) return;
  if (!(currentSectionIdx < sections.length - 1)) return;

  currentSectionIdx++;
  document.querySelector(sections[currentSectionIdx]).scrollIntoView(true);
}

function scrollToPrev() {
  // Don't jump to next section if there's existing scrolling happening
  if (isStillScrolling(currentSectionIdx)) return;
  if (!(currentSectionIdx > 0)) return;

  currentSectionIdx--;
  document.querySelector(sections[currentSectionIdx]).scrollIntoView(true);
}

function scrollToSection(sectionIdx) {
  // Don't jump to next section if there's existing scrolling happening
  if (isStillScrolling(currentSectionIdx)) return;
  currentSectionIdx = sectionIdx;
  document.querySelector(sections[currentSectionIdx]).scrollIntoView(true);
}

// Currently approaching section's (pending section's) top is 0 when it's done scrolling
function isStillScrolling(pendingSectionIdx) {
  if (getElementY(sections[pendingSectionIdx]) == 0) return false;
  return true;
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

// document.querySelector("#navbar").addEventListener("click", e => {
//   let top = getElementY(sections[currentSectionIdx]);
//   console.log("Top of " + sections[currentSectionIdx] + ": " + top);
// });
