import { printAlertWindow } from './AlertWindow';
import { cleanGallerySection } from '../utils/CleanSection';
import './Main.css';
import './MainResponsive.css';

import { getUnsplashPeticion } from '../utils/APIPeticion';
import { printPhotos } from '../utils/PrintPhotos';

//*variables globales
let photosAPI = [];

//!peticion API
/* export const getUnsplashPeticion = async (state) => {
  try {
    const clientID = '4jlvdYuLsqNEEm_9Swt8i8YsjYiof2h9BhIUpHUVzTM';
    const APIurl = `https://api.unsplash.com/search/photos?query='${state.word}'&page=${state.page}&per_page=20&client_id=${clientID}`;

    const res = await fetch(APIurl);
    const APIresults = await res.json();
    photosAPI = APIresults.results;
    return photosAPI;
  } catch (error) {
    console.log('Error API peticion' + error);
  }
}; */

//*si la busqueda está sin resultados: imprime alert. Si no, imprime fotos
export const printResults = async (state) => {
  state.page = 1;
  try {
    photosAPI = await getUnsplashPeticion(state);
    console.log(photosAPI); //imprimo array de objetos que me devuelve la API
  } catch (error) {
    console.log('Error gettingResults: ' + error);
  }

  if (photosAPI.length === 0) {
    printAlertWindow(state);
  } else {
    cleanGallerySection(); //limpio la section #gallery
    printPhotos(photosAPI); //imprimo nuevas fotos
    console.log(state);
  }
};
