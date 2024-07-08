export const printMain = (divPadre) => {
  const main = document.createElement('main');
  main.id = 'main';
  divPadre.appendChild(main);
};

export const printSectionPhoto = () => {
  const main = document.querySelector('#main');
  const sectionGallery = document.createElement('section');
  sectionGallery.id = 'gallery';
  main.appendChild(sectionGallery);
};
