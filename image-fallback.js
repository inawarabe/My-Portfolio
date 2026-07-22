(function () {
  var EXTENSIONS = ['webp', 'jpg', 'jpeg', 'png'];

  document.addEventListener('error', function (event) {
    var img = event.target;
    if (!img || img.tagName !== 'IMG') return;

    var src = img.getAttribute('src');
    if (!src || src.indexOf('/images/') !== 0) return;

    var match = src.match(/^(.*)\.([a-zA-Z0-9]+)$/);
    if (!match) return;

    var base = match[1];
    var tried = (img.getAttribute('data-ext-tried') || match[2].toLowerCase()).split(',');

    var next = null;
    for (var i = 0; i < EXTENSIONS.length; i++) {
      if (tried.indexOf(EXTENSIONS[i]) === -1) { next = EXTENSIONS[i]; break; }
    }

    if (next) {
      tried.push(next);
      img.setAttribute('data-ext-tried', tried.join(','));
      img.src = base + '.' + next;
      return;
    }

    // All extensions exhausted. "0" is an optional dedicated preview image
    // for the work-list card; if it's missing, fall back to the case-study
    // hero image "1" instead.
    if (/\/0$/.test(base) && !img.getAttribute('data-name-fallback')) {
      var fallbackBase = base.slice(0, -1) + '1';
      img.setAttribute('data-name-fallback', '1');
      img.setAttribute('data-ext-tried', EXTENSIONS[0]);
      img.src = fallbackBase + '.' + EXTENSIONS[0];
    }
  }, true);
})();
