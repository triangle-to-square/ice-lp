(function () {
  var nodes = document.querySelectorAll('.sr');
  if (!nodes.length) return;

  function revealAll() {
    nodes.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealAll();
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
        else entry.target.classList.remove('is-visible');
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -7% 0px' }
  );

  nodes.forEach(function (el) {
    io.observe(el);
  });
})();
