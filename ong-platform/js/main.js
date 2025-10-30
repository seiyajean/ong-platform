import { initRouter } from './router.js';
import { renderHome, renderProjetos, renderCadastro } from './templates.js';

const app = document.getElementById('app');

const routes = {
  '/': () => renderHome(app),
  '/projetos': () => renderProjetos(app),
  '/cadastro': () => renderCadastro(app)
};

initRouter(routes);

const toggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');
if (toggle) {
  toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}
