import { createHeader } from './src/Components/Header/Header';
import {
  getInputValue,
  printResults,
  startWord
} from './src/Components/Main/PetitionAPI';
import {
  printMain,
  printSectionPhoto
} from './src/Components/Main/PrintPhotos';
import './style.css';

createHeader(document.body); //creo header
printMain(document.body); //creo el main
printSectionPhoto(); //creo y imprimo la section #gallery donde cargo las fotos
printResults(startWord, 1); //imprimo fotos de la API por primera vez al cargar la pagina
getInputValue(); //imprimo fotos de la API según la busqueda del user
