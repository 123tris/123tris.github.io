// Gallery: clicking a thumbnail swaps the main image; clicking the main image opens it full size.
document.querySelectorAll('.gallery').forEach(function (gallery) {
  var main = gallery.querySelector('.shot');
  var buttons = gallery.querySelectorAll('.thumbs button');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var img = button.querySelector('img');
      main.src = button.dataset.full || img.src;
      main.alt = img.alt;
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', b === button ? 'true' : 'false'); });
    });
  });
  main.title = 'Open full size';
  main.addEventListener('click', function () { window.open(main.src, '_blank', 'noopener'); });
});
