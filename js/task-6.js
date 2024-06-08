function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const controls = document.getElementById('controls');
  const input = controls.querySelector('input');
  const createButton = controls.querySelector('[data-create]');
  const destroyButton = controls.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  const createBoxes = (amount) => {
    const boxes = [];
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.classList.add('box');
      boxes.push(box);
    }
    boxesContainer.append(...boxes);
  };

  const destroyBoxes = () => {
    boxesContainer.innerHTML = '';
  };

  createButton.addEventListener('click', () => {
    const amount = parseInt(input.value.trim(), 10);
    if (!isNaN(amount) && amount >= 1 && amount <= 100) {
      destroyBoxes(); // Ensure the old boxes are removed before creating new ones
      createBoxes(amount);
      input.value = ''; // Clear the input
    } else {
      alert('Please enter a number between 1 and 100');
    }
  });

  destroyButton.addEventListener('click', () => {
    destroyBoxes();
  });
});
