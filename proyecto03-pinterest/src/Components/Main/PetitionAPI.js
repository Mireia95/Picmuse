import { printAlertWindow } from './AlertWindow';
import { cleanGallerySection } from './CleanSection';
import { getMorePhotos } from './LoadMore';
import './Main.css';
import './MainResponsive.css';
import { printPhotos } from './PrintPhotos';

//*variables globales
export let word = ''; //valor del parametro query de la API. Sirve para el buscador de fotos
export let startWord = 'design pastel'; //valor del parametro query de la API. Para la primera busqueda de fotos
let page = 1; //valor del parametro page de la API. Al cargar mas fotos cambiará

export let photosAPI = [];

//*peticion API
export const getUnsplashPeticion = async (word, page) => {
  try {
    const clientID = '4jlvdYuLsqNEEm_9Swt8i8YsjYiof2h9BhIUpHUVzTM';
    const APIurl = `https://api.unsplash.com/search/photos?query='${word}'&page=${page}&per_page=20&client_id=${clientID}`;

    const res = await fetch(APIurl);
    const APIresults = await res.json();
    photosAPI = APIresults.results;
    return photosAPI;
  } catch (error) {
    console.log('Error API peticion' + error);
  }
};

//*si la busqueda está sin resultados: imprime alert. Si no, imprime fotos
export const printResults = async (word, page) => {
  try {
    photosAPI = await getUnsplashPeticion(word, page);
    console.log(photosAPI); //imprimo array de objetos que me devuelve la API
  } catch (error) {
    console.log('Error gettingResults: ' + error);
  }

  if (photosAPI.length === 0) {
    printAlertWindow();
  } else {
    cleanGallerySection(); //limpio la section #gallery
    printPhotos(photosAPI); //imprimo nuevas fotos
    getMorePhotos(word, page); //si pulsas el boton "cargar más" carga mas fotos
  }
};

//*imprimo fotos de la API según la palabra escrita por el user en el campo del input dell'header
export const getInputValue = () => {
  const input = document.querySelector('#search');
  const lupaButton = document.querySelector('#searchButton');

  //*imprimo fotos si pulso la img de la lupa o si pulso enter
  lupaButton.addEventListener('click', () => {
    word = input.value;
    printResults(word, page);
  });
  input.addEventListener('keydown', (e) => {
    word = e.target.value;
    if (e.key === 'Enter') {
      printResults(word, page);
    }
  });
};
