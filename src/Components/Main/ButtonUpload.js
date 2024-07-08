import { loadMorePhotos } from './LoadMore';

export const createButton = (state) => {
  const main = document.querySelector('#main');
  const button = document.createElement('button');
  button.innerText = 'Cargar más';
  button.id = 'loadMore';
  main.appendChild(button);

  button.addEventListener('click', () => {
    console.log('voy a cargar mas fotos');
    state.page++;
    loadMorePhotos(state);
  });
};
