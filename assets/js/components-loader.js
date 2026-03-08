/**
 * Loads HTML components and injects them into the page.
 * Run before main.js so nav/sections exist for scroll and active-link logic.
 */
(function () {
  const COMPONENTS = [
    'components/navbar.html',
    'components/hero.html',
    'components/about.html',
    'components/experience.html',
    'components/projects.html',
    'components/publications.html',
    'components/footer.html'
  ];

  const app = document.getElementById('app');
  if (!app) return;

  async function loadComponent(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error('Failed to load ' + path);
    return res.text();
  }

  async function loadAll() {
    try {
      for (const path of COMPONENTS) {
        const html = await loadComponent(path);
        app.insertAdjacentHTML('beforeend', html);
      }
      loadMainScript();
    } catch (err) {
      console.error('Component load error:', err);
      app.innerHTML = '<p>Failed to load page content. Please refresh.</p>';
    }
  }

  function loadMainScript() {
    const script = document.createElement('script');
    script.src = 'assets/js/main.js';
    script.async = false;
    document.body.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAll);
  } else {
    loadAll();
  }
})();
