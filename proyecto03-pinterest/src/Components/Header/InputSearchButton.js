import { printResults } from '../Main/PetitionAPI';

export const createInputButton = (input, word, page) => {
  const inputButton = document.createElement('button');
  inputButton.id = 'searchButton';
  const lupaImg = document.createElement('img');
  lupaImg.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1718730458/ROCKTHECODE/Proyecto_03_Pinterest_PicMuse/search_f6xlaj.png';
  lupaImg.alt = 'lupa';
  inputButton.appendChild(lupaImg);

  inputButton.addEventListener('click', () => {
    word = input.value;
    console.log(word);
    printResults(word, page);
  });
  return inputButton;
};
