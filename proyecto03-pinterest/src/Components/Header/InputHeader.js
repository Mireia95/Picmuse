import { createInputButton } from './InputSearchButton';

export const printInput = () => {
  const divInput = document.createElement('div');
  const input = createInput();
  input.type = 'text';
  input.id = 'search';
  input.name = 'search';
  input.placeholder = 'Buscar';

  const searchButton = createInputButton();
  divInput.classList.add('divInput');
  divInput.appendChild(searchButton);
  divInput.appendChild(input);
  return divInput;
};

export const createInput = () => {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'search';
  input.name = 'search';
  input.placeholder = 'Buscar';
  return input;
};
