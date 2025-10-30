import { saveSubmission } from './storage.js';
import { showAlert } from './ui.js';

function validateCPF(cpf) {
  // Verificação simples de padrões (não apenas a soma de verificação completa)
  return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

function showFieldError(field, message) {
  
  let err = field.parentElement.querySelector('.field-error');
  if (!err) {
    err = document.createElement('div');
    err.className = 'field-error';
    err.style.color = '#b00020';
    err.style.fontSize = '0.9rem';
    err.style.marginTop = '6px';
    field.parentElement.appendChild(err);
  }
  err.textContent = message;
  field.setAttribute('aria-invalid', 'true');
}

function clearFieldError(field) {
  const err = field.parentElement.querySelector('.field-error');
  if (err) err.remove();
  field.removeAttribute('aria-invalid');
}

export function initForm(form) {
  if (!form) return;
  // manipuladores de máscaras
  form.querySelectorAll('input[id="cpf"], input[id="cep"], input[id="tel"]').forEach(inp => {
    inp.addEventListener('input', (e) => {
      const id = e.target.id;
      let v = e.target.value.replace(/\D/g, '');
      if (id === 'cpf') {
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      } else if (id === 'cep') {
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
      } else if (id === 'tel') {
        v = v.replace(/^(\d{2})(\d)/, '($1) $2');
        v = v.replace(/(\d{5})(\d{4})$/, '$1-$2');
      }
      e.target.value = v;
    });
  });

  
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    
    form.querySelectorAll('.field-error').forEach(x => x.remove());

    let valid = true;
    const data = {};
    const elements = form.elements;

    // Verificações básicas para campos obrigatórios
    for (let el of elements) {
      if (!el.name) continue;
      if (el.required && !el.value.trim()) {
        valid = false;
        showFieldError(el, 'Campo obrigatório');
      } else {
        clearFieldError(el);
      }
      data[el.name] = el.value.trim();
    }

    
    if (data.cpf && !validateCPF(data.cpf)) {
      valid = false;
      const cpfField = form.querySelector('#cpf');
      showFieldError(cpfField, 'CPF inválido. Formato: 000.000.000-00');
    }

    
    const emailField = form.querySelector('#email');
    if (emailField && emailField.value) {
      const ok = /\S+@\S+\.\S+/.test(emailField.value);
      if (!ok) {
        valid = false;
        showFieldError(emailField, 'Email inválido');
      }
    }

    if (!valid) {
      showAlert('Existem campos incorretos. Revise o formulário.', 'error', 4000);
      return;
    }

    // Salvar no armazenamento local
    saveSubmission(data);
    showAlert('Cadastro enviado com sucesso!', 'success', 3000);
    form.reset();
  });
}
