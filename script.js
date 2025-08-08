let chaosLevel = 0;
const body = document.body;
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

const errorMessages = [
  "Error 404: Page not found.",
  "Error 405: Page found but doesn't like you.",
  "Error 418: I'm a teapot.",
  "Error 666: Your fridge is now connected.",
  "Error 9000: IT'S OVER NINE THOUSAND!!!",
  "Downloading more RAM...",
  "Installing suspicious browser extensions...",
  "Calibrating potato..."
];

const bigQuotes = [
  "WHO TOUCHED MY SPAGHET?!",
  "404: Your dignity not found.",
  "Activating Duck Protocol...",
  "Did you just... click my face?",
  "Your computer is now legally a sandwich."
];

const sounds = [
  'assets/cat-laugh-meme-1.wav',
  'assets/auughhh.wav',
  'assets/shocked-sound-effect.wav',
  'assets/5p59j-npiin.wav',
  'assets/baby-laughing-meme.wav',
  'assets/cartoon-boing_7vRWDlc.mp3'
];

function duplicateButton(el) {
  const clone = el.cloneNode(true);
  clone.onclick = function() { duplicateButton(this); };
  clone.style.position = 'absolute';
  clone.style.left = Math.random() * (window.innerWidth - 100) + 'px';
  clone.style.top = Math.random() * (window.innerHeight - 50) + 'px';
  body.appendChild(clone);
}

function startChaos() {
  setInterval(() => {
    chaosLevel++;

    if (chaosLevel % 2 === 0) {
      p.textContent = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    }

    randomShake(h1);
    if (chaosLevel % 2 === 0) randomBgColor();
    if (chaosLevel % 3 === 0) spawnEmoji();
    if (chaosLevel % 4 === 0) runawayButtons();
    if (chaosLevel % 5 === 0) playSound();
    if (chaosLevel % 6 === 0) flipText();
    if (chaosLevel % 4 === 0) quoteBomb();
    if (chaosLevel % 8 === 0) fontChaos();
    if (chaosLevel > 15) explodePage();
  }, 1000);
}

function randomShake(el) {
  el.style.transform = `translate(${Math.random()*10-5}px, ${Math.random()*10-5}px) rotate(${Math.random()*10-5}deg)`;
}

function randomBgColor() {
  body.style.backgroundColor = `hsl(${Math.random()*360}, 80%, 80%)`;
}

function spawnEmoji() {
  const e = document.createElement('div');
  e.className = 'emoji';
  e.style.left = Math.random()*window.innerWidth + 'px';
  e.style.top = window.innerHeight + 'px';
  e.textContent = ['🫠','😵','🔥','💥','🌀','👀','🍕','💩','🦆','🛸'][Math.floor(Math.random()*10)];
  body.appendChild(e);
  setTimeout(() => e.remove(), 3000);
}

function runawayButtons() {
  document.querySelectorAll('.button').forEach(btn => {
    btn.style.position = 'relative';
    btn.onmouseover = () => {
      btn.style.left = (Math.random()*200 - 100) + 'px';
      btn.style.top = (Math.random()*200 - 100) + 'px';
    };
  });
}

function playSound() {
  const soundFile = sounds[Math.floor(Math.random() * sounds.length)];
  const audio = new Audio(soundFile);
  audio.play();
}

function flipText() {
  p.style.transform = p.style.transform.includes('rotate')
    ? ''
    : 'rotate(180deg)';
}

function fontChaos() {
  const fonts = ['Comic Sans MS', 'Courier New', 'Papyrus', 'Impact'];
  body.style.fontFamily = fonts[Math.floor(Math.random()*fonts.length)];
}

function explodePage() {
  body.innerHTML = "<h1>💥 SYSTEM FAILURE 💥</h1><p>I warned you.</p>";
  body.style.backgroundColor = 'black';
  body.style.color = 'white';
}

function quoteBomb() {
  const quote = document.createElement('div');
  quote.textContent = bigQuotes[Math.floor(Math.random() * bigQuotes.length)];
  quote.style.position = 'fixed';
  quote.style.top = '50%';
  quote.style.left = '50%';
  quote.style.transform = 'translate(-50%, -50%)';
  quote.style.fontSize = '4rem';
  quote.style.fontWeight = 'bold';
  quote.style.color = 'yellow';
  quote.style.textShadow = '2px 2px 10px black';
  quote.style.zIndex = '9999';
  quote.style.animation = 'flash 0.3s alternate infinite';

  body.appendChild(quote);
  setTimeout(() => quote.remove(), 2000);
}

// Start the chaos after a short delay
setTimeout(startChaos, 4000);
