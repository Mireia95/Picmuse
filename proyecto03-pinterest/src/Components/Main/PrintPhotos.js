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

export const printPhotos = (arrayPhotos) => {
  const input = document.querySelector('#search');
  input.value = '';
  const sectionGallery = document.querySelector('#gallery');
  for (const photo of arrayPhotos) {
    const article = document.createElement('article');
    const imgDiv = document.createElement('div');
    const a = document.createElement('a');
    a.href = photo.links.html;
    const img = document.createElement('img');
    img.src = photo.urls.small;

    const creatorDivImg = document.createElement('div');
    const creatorImg = document.createElement('img');
    creatorImg.src = photo.user.profile_image.medium;

    const creatorName = document.createElement('h3');
    creatorName.innerText = photo.user.name;

    article.classList.add('article-container');
    creatorDivImg.classList.add('creatorDivImg');

    a.appendChild(img);
    creatorDivImg.appendChild(creatorImg);
    imgDiv.appendChild(a);
    imgDiv.appendChild(creatorDivImg);
    article.appendChild(imgDiv);
    article.appendChild(creatorName);

    sectionGallery.appendChild(article);
  }
};
