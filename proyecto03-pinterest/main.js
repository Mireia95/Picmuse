import { printHeader } from './src/Components/Header/Header';
import { createButton } from './src/Components/Main/ButtonUpload';

import { printResults } from './src/Components/Main/PetitionAPI';
import {
  printMain,
  printSectionPhoto
} from './src/Components/Main/PrintPhotos';
import './style.css';

//*variables globales
export const state = {
  word: 'design pastel',
  startWord: 'design pastel',
  page: 1
};

printHeader(document.body, state); //creo header
printMain(document.body); //creo el main
printSectionPhoto(); //creo y imprimo la section #gallery donde cargo las fotos
printResults(state); //imprimo fotos de la API por primera vez al cargar la pagina
createButton(state); //creo button "cargar mas"
