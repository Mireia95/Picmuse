import { getUnsplashPeticion } from './PetitionAPI';
import { printPhotos } from './PrintPhotos';

export const loadMorePhotos = async (state) => {
  console.log(state);
  try {
    const photosAPI = await getUnsplashPeticion(state);
    console.log(photosAPI); //imprimo array de objetos que me devuelve la API
    printPhotos(photosAPI); //imprimo nuevas fotos
  } catch (error) {
    console.log('Error gettingResults: ' + error);
  }
};
