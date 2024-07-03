export const createButtonNavMobile = () => {
  const menuButton = document.createElement('button');
  menuButton.id = 'menuMobile';
  const img = document.createElement('img');
  img.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1715778915/ROCKTHECODE/iconos/menu_icon_mrhfb0.png';
  img.alt = 'menu';
  menuButton.classList.add('navResponsive');
  menuButton.appendChild(img);
  return menuButton;
};

//funcion evento al pulsar el botón menuButton creado aqui arriba: hago visible el menú nav
export const getNavMobile = (button, nav) => {
  button.addEventListener('click', () => {
    nav.classList.toggle('closed');
  });
};
