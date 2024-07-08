import { createNav } from './Nav';
import { createButtonNavMobile } from './NavResponsive';

export const createIcons = () => {
  const divIcons = document.createElement('div');

  const iconNotificationButton = document.createElement('button');
  iconNotificationButton.id = 'notifications';
  const iconNotificationImg = document.createElement('img');
  iconNotificationImg.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1718730458/ROCKTHECODE/Proyecto_03_Pinterest_PicMuse/bell_cc1xlb.png';
  iconNotificationImg.alt = 'icona de notificaciones';

  const iconMessageButton = document.createElement('button');
  iconMessageButton.id = 'messages';
  const iconMessageImg = document.createElement('img');
  iconMessageImg.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1718730457/ROCKTHECODE/Proyecto_03_Pinterest_PicMuse/message-circle_usu9ah.png';
  iconNotificationImg.alt = 'icona de mensajes';

  const iconUserButton = document.createElement('button');
  iconUserButton.id = 'user';
  const iconUserImg = document.createElement('img');
  iconUserImg.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1718730457/ROCKTHECODE/Proyecto_03_Pinterest_PicMuse/user_ezu7rz.png';
  iconUserImg.alt = 'icona de user';

  //creo icon por el menu del nav con mobile
  const menuButton = createButtonNavMobile();
  const navMobile = createNav();
  navMobile.id = 'navMobile';
  //quito clase del nav original
  navMobile.classList.remove('divNav');
  //añado clase nuevo para mobile
  navMobile.classList.add('closed');

  divIcons.className = 'divIcons';
  divIcons.classList.add('flex-container');

  iconNotificationButton.appendChild(iconNotificationImg);
  divIcons.appendChild(iconNotificationButton);

  iconMessageButton.appendChild(iconMessageImg);
  divIcons.appendChild(iconMessageButton);

  iconUserButton.appendChild(iconUserImg);
  divIcons.appendChild(iconUserButton);

  divIcons.appendChild(menuButton);

  //append child nav
  divIcons.appendChild(navMobile);

  return divIcons;
};
