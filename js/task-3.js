const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
const updateNameOutput = () => {
  const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';
};
nameInput.addEventListener('input', updateNameOutput);