// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".


const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', () => {
  const inputValue = input.value.trim();
  output.textContent = inputValue || 'Anonymous';
});
