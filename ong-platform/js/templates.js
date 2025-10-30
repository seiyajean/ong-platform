import { initForm } from './form.js';
import { showAlert } from './ui.js';

export function renderHome(container) {
  container.innerHTML = `
    <section id="hero">
      <img src="images/banner-principal.png" alt="Voluntários unidos" class="banner">
      <h1>Juntos pela transformação social</h1>
      <p>Promovemos dignidade e oportunidades em comunidades de vulnerabilidade social.</p>
    </section>

    <section class="index-section">
      <article class="index-card">
        <img src="images/projeto-educacao.png" alt="Educação">
        <h3>Educação</h3>
        <p>Reforço escolar e inclusão digital para crianças e jovens.</p>
      </article>
      <article class="index-card">
        <img src="images/projeto-saude.png" alt="Saúde">
        <h3>Saúde</h3>
        <p>Campanhas de saúde e orientação básica nas comunidades.</p>
      </article>
      <article class="index-card">
        <img src="images/doacoes.png" alt="Doações">
        <h3>Doações</h3>
        <p>Campanhas de arrecadação para famílias e projetos.</p>
      </article>
    </section>
  `;

  // optional small toast
  showAlert('Bem-vindo à ONG Esperança Viva', 'success', 2500);
}

export function renderProjetos(container) {
  container.innerHTML = `
    <h1>Projetos em destaque</h1>
    <section class="projetos-container">
      <article class="card">
        <img src="images/projeto-educacao.png" alt="Educação">
        <div class="card-body">
          <h3>Educação para Todos</h3>
          <p>Reforço escolar com atividades semanais.</p>
        </div>
      </article>

      <article class="card">
        <img src="images/projeto-saude.png" alt="Saúde">
        <div class="card-body">
          <h3>Saúde Comunitária</h3>
          <p>Atendimentos básicos e campanhas de vacinação.</p>
        </div>
      </article>

      <article class="card">
        <img src="images/doacoes.png" alt="Doações">
        <div class="card-body">
          <h3>Campanhas de Doações</h3>
          <p>Participe e ajude a transformar vidas.</p>
        </div>
      </article>
    </section>
  `;
}

export function renderCadastro(container) {
  container.innerHTML = `
    <h1>Formulário de Cadastro</h1>
    <div class="form-wrapper">
      <form id="cadastroForm" action="#" method="post" autocomplete="on" novalidate>
        <fieldset>
          <legend>Dados pessoais</legend>
          <label for="nome">Nome completo</label>
          <input type="text" id="nome" name="nome" required minlength="3">

          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" required>

          <label for="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}">

          <label for="tel">Telefone</label>
          <input type="tel" id="tel" name="tel" placeholder="(00) 00000-0000" required>

          <label for="nascimento">Data de nascimento</label>
          <input type="date" id="nascimento" name="nascimento" required>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>
          <label for="cep">CEP</label>
          <input type="text" id="cep" name="cep" placeholder="00000-000" required pattern="\\d{5}-\\d{3}">

          <label for="endereco">Endereço</label>
          <input type="text" id="endereco" name="endereco" required>

          <label for="cidade">Cidade</label>
          <input type="text" id="cidade" name="cidade" required>

          <label for="estado">Estado</label>
          <select id="estado" name="estado" required>
            <option value="">Escolha...</option>
            <option value="DF">Distrito Federal</option>
            <option value="SP">São Paulo</option>
            <!-- mantenha a lista completa -->
          </select>
        </fieldset>

        <button type="submit">Enviar cadastro</button>
      </form>
    </div>
  `;

  // inicializa validação/máscaras
  initForm(document.getElementById('cadastroForm'));
}
