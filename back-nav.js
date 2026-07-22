(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('a.back-link[href="/work/"]');
    if (!links.length) return;

    var cameFromWorkList = false;
    try {
      var ref = new URL(document.referrer);
      cameFromWorkList = ref.origin === location.origin && /^\/work\/?(index\.html)?$/.test(ref.pathname);
    } catch (e) {}

    if (!cameFromWorkList) return;

    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        history.back();
      });
    });
  });
})();
