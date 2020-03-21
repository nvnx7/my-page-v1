let chars = "1234567890!&$#?%".split("");
let interval;
let timeout;
let original;
let element;

navBtnList.addEventListener("mouseover", e => {
  if (e.target.tagName != "A") return;
  if (timeout) clearTimeout(timeout);
  if (interval) clearInterval(interval);
  if (element) element.innerText = original.join("");

  element = e.target;
  randomizeText();
});

function randomizeText() {
  original = element.innerText.split("");
  interval = setInterval(() => {
    element.innerText = getRandomText(original.slice(0));
  }, 80);

  timeout = setTimeout(() => {
    clearInterval(interval);
    element.innerText = original.join("");
    interval = null;
    timeout = null;
    element = null;
    original = null;
  }, 400);
}

function getRandomText(charArray) {
  var i;
  for (i in charArray) {
    if (getRandomBool()) charArray[i] = getRandomChar();
  }

  return charArray.join("");
}

function getRandomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

function getRandomBool() {
  return Math.random() >= 0.5;
}
