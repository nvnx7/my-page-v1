let chars = "1234567890!&$#?%".split("");
let interval;
let timeout;
let original;
let element;

let handleRandomizeText = e => {
  if (e.target.tagName != "A") return;

  if (timeout) clearTimeout(timeout);
  if (interval) clearInterval(interval);
  if (element) element.innerText = original.join("");

  if (e.target.children.length == 0) element = e.target;
  else element = e.target.children[1];

  randomizeText();
};

navBtnList.addEventListener("mouseenter", handleRandomizeText, true);
connections.addEventListener("mouseenter", handleRandomizeText, true);

function randomizeText() {
  original = element.innerText.split("");
  interval = setInterval(() => {
    element.innerText = getRandomText(original.slice(0));
  }, 80);

  timeout = setTimeout(() => {
    clearInterval(interval);
    element.innerText = original.join("");
    interval = null;
    element = null;
    original = null;
    timeout = null;
  }, 400);
}

function getRandomText(charArray) {
  var i;
  for (i in charArray) {
    if (charArray[i] == "\n") continue;
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
