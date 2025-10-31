(function () {
  const navLinks = document.getElementById('nav-links');
  const menuToggle = document.getElementById('menu-toggle');
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  function setTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      root.setAttribute('data-theme', theme);
      try { localStorage.setItem('theme', theme); } catch (_) {}
    } else {
      root.removeAttribute('data-theme');
      try { localStorage.removeItem('theme'); } catch (_) {}
    }
  }

  try {
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
  } catch (_) {}

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = root.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Load images by trying multiple extensions for a base path
  var extensionCandidates = ['jpg', 'jpeg', 'png', 'webp'];
  var PLACEHOLDER_DATA = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#94a3b8" font-family="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" font-size="20">Image not found</text></svg>');

  function loadImageWithFallback(img) {
    var base = img.getAttribute('data-src-base');
    if (!base) return;
    var index = 0;

    function tryNext() {
      if (index >= extensionCandidates.length) {
        img.src = PLACEHOLDER_DATA;
        return;
      }
      var candidate = base + '.' + extensionCandidates[index++] + '?v=' + Date.now();
      var probe = new Image();
      probe.onload = function () { img.src = candidate; };
      probe.onerror = tryNext;
      probe.src = candidate;
    }

    tryNext();
  }

  try {
    var lazyImages = document.querySelectorAll('img[data-src-base]');
    lazyImages.forEach(loadImageWithFallback);
  } catch (_) {}
})();


