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

window.addEventListener("wheel", e => {
  console.log("From Idx:" + currentSectionIdx);

  // Don't jump to next section if there's existing scrolling happening
  if (isStillScrolling(currentSectionIdx)) {
    return;
  }

  if (e.deltaY < 0 && currentSectionIdx > 0) {
    // scrolled up
    scrollToSection(currentSectionIdx - 1);
    currentSectionIdx--;

    console.log("To Idx:" + currentSectionIdx);
  } else if (e.deltaY > 0 && currentSectionIdx < sections.length - 1) {
    // scrolled down

    scrollToSection(currentSectionIdx + 1);
    currentSectionIdx++;

    console.log("To Idx:" + currentSectionIdx);
  }
});

// document.querySelector("#navbar").addEventListener("click", e => {
//   let top = getElementY(sections[currentSectionIdx]);
//   console.log("Top of " + sections[currentSectionIdx] + ": " + top);
// });

function scrollToSection(sectionIdx) {
  currentTop += getElementY(sections[sectionIdx]);
  window.scrollTo(0, currentTop);
}

function isStillScrolling(pendingSectionIdx) {
  if (getElementY(sections[pendingSectionIdx]) == 0) return false;
  return true;
}

function getElementY(query) {
  return document.querySelector(query).getBoundingClientRect().top;
}

// function doScrolling(element, duration) {
//   let startingY = window.pageYOffset;
//   let elementY =
//     startingY + document.querySelector(element).getBoundingClientRect().top;
//   let targetY =
//     document.body.scrollHeight -
//     (elementY < window.innerHeight
//       ? document.body.scrollHeight - window.innerHeight
//       : elementY);

//   let diff = targetY - startingY;
//   let start;

//   window.requestAnimationFrame(function step(timestamp) {
//     if (!start) start = timestamp;

//     let timeElapsed = timestamp - start; // ms elapsed since start of scroll
//     let percent = Math.min(timeElapsed / duration, 1); // % complete
//     // percent = easing(percent);

//     window.scrollTo(0, startingY + diff * percent);

//     // Continue scroll steps until duration of scroll
//     if (timeElapsed < duration) window.requestAnimationFrame(step);
//   });
// }

// var easing = function(t) {
//   return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
// };
