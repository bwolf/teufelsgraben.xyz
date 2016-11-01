var infoIcon = document.getElementById('info-icon');
var infoOverlay = document.getElementById('info-overlay');

function isInfoOverlayVisible() {
  return infoOverlay.classList.contains('active');
}

function toggleInfo() {
  if (isInfoOverlayVisible()) {
    infoOverlay.classList.remove('active');
    infoIcon.classList.remove('active');
  } else {
    infoOverlay.classList.add('active');
    infoIcon.classList.add('active');
  }
}

document.getElementById('info-icon').addEventListener('click', function (event) {
  toggleInfo();
  event.stopPropagation();
});

document.getElementById('info-overlay').addEventListener('click', function (event) {
  event.stopPropagation(); // Don't propagate event to parents (e.g. body).
});

document.getElementsByTagName('body')[0].addEventListener('click', function () {
  if (isInfoOverlayVisible()) {
    toggleInfo();
  }
});
