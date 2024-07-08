import { printAlertWindow } from './AlertWindow';
import { cleanGallerySection } from '../utils/CleanSection';
import './Main.css';
import './MainResponsive.css';

import { getUnsplashPeticion } from '../utils/APIPeticion';
import { printPhotos } from '../utils/PrintPhotos';

//*variables globales
let photosAPI = [];

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
