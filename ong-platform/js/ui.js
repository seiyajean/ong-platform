export function showAlert(message, type = 'info', timeout = 3000, container = null) {
  
  const root = container || document.querySelector('#app') || document.body;
  const alert = document.createElement('div');
  alert.className = `alert ${type}`;
  alert.textContent = message;
  // Estilo alternativo simples caso o CSS não seja carregado
  alert.style.position = 'fixed';
  alert.style.right = '16px';
  alert.style.top = '16px';
  alert.style.zIndex = 9999;
  alert.style.padding = '12px 16px';
  alert.style.borderRadius = '8px';
  alert.style.color = '#fff';
  alert.style.background = type === 'success' ? '#4caf50' : (type === 'error' ? '#f44336' : '#007bff');

  document.body.appendChild(alert);
  if (timeout) setTimeout(() => alert.remove(), timeout);
  return alert;
}
