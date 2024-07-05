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

//export let word = 'design pastel'; //valor del parametro query de la API. Sirve para el buscador de fotos
//export let startWord = 'design pastel'; //valor del parametro query de la API. Para la primera busqueda de fotos
//export let page = 1; //valor del parametro page de la API. Al cargar mas fotos cambiará

printHeader(document.body, state); //creo header
printMain(document.body); //creo el main
printSectionPhoto(); //creo y imprimo la section #gallery donde cargo las fotos
printResults(state); //imprimo fotos de la API por primera vez al cargar la pagina
createButton(state); //creo button "cargar mas"
