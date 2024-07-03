export const createLogo = () => {
  const imgLogo = document.createElement('img');
  imgLogo.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1718730850/ROCKTHECODE/Proyecto_03_Pinterest_PicMuse/PicMuse_cis2nx.png';
  imgLogo.alt = 'logo PicMuse';
  imgLogo.classList.add('logo');
  return imgLogo;
};
