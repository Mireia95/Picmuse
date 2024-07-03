import { getUnsplashPeticion } from './PetitionAPI';
import { printPhotos } from './PrintPhotos';

export const printButtonMorePhotos = () => {
  const main = document.querySelector('#main');
  const button = document.createElement('button');
  button.innerText = 'Cargar más';
  button.id = 'loadMore';
  main.appendChild(button);
  return button;
};

const checkButtonMorePhotos = () => {
  //chequeo si existe ya el boton: si no existe lo creo, si no lo llamo a través del id. Esto me evita el error de crearlo mas veces
  if (!document.querySelector('#loadMore')) {
    const button = printButtonMorePhotos();
    return button;
  } else {
    const button = document.querySelector('#loadMore');
    return button;
  }
};

export const getMorePhotos = async (word, page) => {
  const button = checkButtonMorePhotos();
  button.addEventListener('click', () => {
    getNewPhotosArray(word, page);
    page++;
  });
};

const getNewPhotosArray = async (word, page) => {
  try {
    const photosAPI = await getUnsplashPeticion(word, page + 1);
    console.log(photosAPI); //imprimo array de objetos que me devuelve la API
  } catch (error) {
    console.log('Error gettingMorePhotos: ' + error);
  }
  printPhotos(photosAPI);
};
