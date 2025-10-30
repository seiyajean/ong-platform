export function initRouter(routes) {
  // routes: objeto { '/': renderFunc, '/projetos': renderFunc, '/cadastro': renderFunc }
  function resolveRoute() {
    const hash = location.hash.replace('#', '') || '/';
    const route = routes[hash] ? hash : '/';
    routes[route]();
    // update active nav link
    document.querySelectorAll('nav a').forEach(a => {
      const href = a.getAttribute('href') || '';
      a.classList.toggle('active', href === `#${route}`);
    });
  }

  window.addEventListener('hashchange', resolveRoute);
  window.addEventListener('load', resolveRoute);
}

export function navigateTo(route) {
  location.hash = route;
}
