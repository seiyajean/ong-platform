const KEY = 'esperanca_viva_submissoes';

export function saveSubmission(obj) {
  const arr = JSON.parse(localStorage.getItem(KEY) || '[]');
  arr.push({ ...obj, createdAt: new Date().toISOString() });
  localStorage.setItem(KEY, JSON.stringify(arr));
}

export function getSubmissions() {
  return JSON.parse(localStorage.getItem(KEY) || '[]');
}
