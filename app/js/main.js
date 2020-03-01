// let fn = () => alert(window.pageYOffset);
// setTimeout(fn, 4000);

var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", e => {
  e.preventDefault();
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // doScrolling("#about", 1000);
  } else {
    // alert("Up");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

function doScrolling(element, duration) {
  let startingY = window.pageYOffset;
  let elementY =
    startingY + document.querySelector(element).getBoundingClientRect().top;
  let targetY =
    document.body.scrollHeight -
    (elementY < window.innerHeight
      ? document.body.scrollHeight - window.innerHeight
      : elementY);

  let diff = targetY - startingY;
  let start;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;

    let timeElapsed = timestamp - start; // ms elapsed since start of scroll
    let percent = Math.min(timeElapsed / duration, 1); // % complete
    // percent = easing(percent);

    window.scrollTo(0, startingY + diff * percent);

    // Continue scroll steps until duration of scroll
    if (timeElapsed < duration) window.requestAnimationFrame(step);
  });
}

var easing = function(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};
