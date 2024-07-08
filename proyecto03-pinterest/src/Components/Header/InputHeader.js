import { printResults } from '../Main/PrintResults';
import { createInputButton } from './InputSearchButton';

export const printInput = (state) => {
  const divInput = document.createElement('div');
  const input = createInput(state);
  input.type = 'text';
  input.id = 'search';
  input.name = 'search';
  input.placeholder = 'Buscar';

  const searchButton = createInputButton(input, state);
  divInput.classList.add('divInput');
  divInput.appendChild(searchButton);
  divInput.appendChild(input);
  return divInput;
};

const createInput = (state) => {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'search';
  input.name = 'search';
  input.placeholder = 'Buscar';

  input.addEventListener('keydown', (e) => {
    state.word = e.target.value;
    if (e.key === 'Enter') {
      state.page = 1;
      printResults(state);
    }
  });
  return input;
};
