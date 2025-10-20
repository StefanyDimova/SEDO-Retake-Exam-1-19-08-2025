// Commit 1 – unchanged apply logic
document.getElementById('apply-btn').addEventListener('click', function () {
  var c = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = c;
});

// Commit 2 – stub validator
function validatePickedColor() {
  return true;
}

// Commit 3 – live preview on change
document.getElementById('color-input').addEventListener('change', function () {
  document.getElementById('box').style.backgroundColor = this.value;
});