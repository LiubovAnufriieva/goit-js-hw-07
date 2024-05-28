


const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', () => {
  e.preventDefault();
  const inputValue = input.value.trim();
  output.textContent = inputValue || 'Anonymous';
});
