import { loadMorePhotos } from './LoadMore';

export const createButton = (state) => {
  const main = document.querySelector('#main');
  const button = document.createElement('button');
  button.innerText = 'Cargar más';
  button.id = 'loadMore';
  main.appendChild(button);
  console.log('CreateButton ha sido ejecutada');

  button.addEventListener('click', () => {
    console.log('me has pulsado');
    state.page++;
    loadMorePhotos(state);
  });
};
