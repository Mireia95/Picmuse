import { printResults } from '../Main/PrintResults';

export const createInputButton = (input, state) => {
  const inputButton = document.createElement('button');
  inputButton.id = 'searchButton';
  const lupaImg = document.createElement('img');
  lupaImg.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1718730458/ROCKTHECODE/Proyecto_03_Pinterest_PicMuse/search_f6xlaj.png';
  lupaImg.alt = 'lupa';
  inputButton.appendChild(lupaImg);

  inputButton.addEventListener('click', () => {
    state.word = input.value;
    printResults(state);
  });
  return inputButton;
};
