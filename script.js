// === Helper functions ===
const $ = s => document.querySelector(s);
const box = $('#box');
const input = $('#color-input');
const applyBtn = $('#apply-btn');
const randomBtn = $('#random-btn');

// === Logging and utilities ===
function log(msg) {
  console.log('[app]', msg);
}

function shortHex(h) {
  return /^#([0-9a-f]{6})$/i.test(h) &&
    h[1] == h[2] && h[3] == h[4] && h[5] == h[6]
    ? '#' + h[1] + h[3] + h[5]
    : h;
}

function randomHex() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
}

// === Core behavior ===
applyBtn.addEventListener('click', () => {
  const c = input.value;
  box.style.backgroundColor = shortHex(c);
  log(`Applied color: ${c}`);
});

input.addEventListener('change', () => {
  box.style.backgroundColor = shortHex(input.value);
});

// === Random color feature ===
if (randomBtn) {
  randomBtn.addEventListener('click', () => {
    const rnd = randomHex();
    box.style.backgroundColor = rnd;
    input.value = rnd;
    log(`Random color applied: ${rnd}`);
  });
}

// === Init ===
document.addEventListener('DOMContentLoaded', () => log('ready'));
