import './Header.css';
import './HeaderResponsive.css';
import { printInput } from './InputHeader';
import { createNav } from './Nav';
import { createLogo } from './logo';
import { createIcons } from './IconHeader';
import { getNavMobile } from './NavResponsive';
import { printResults, startWord } from '../Main/PetitionAPI';

//funcion para crear el header
export const createHeader = (elementoPadre) => {
  const headerHTML = document.createElement('header');
  headerHTML.id = 'header';
  const imgLogo = createLogo();
  imgLogo.addEventListener('click', () => {
    printResults(startWord);
  });
  const divNav = createNav();
  const inputComponent = printInput();
  const icons = createIcons();

  headerHTML.classList.add('flex-container');

  headerHTML.appendChild(imgLogo);
  headerHTML.appendChild(divNav);

  headerHTML.appendChild(inputComponent);
  headerHTML.appendChild(icons);
  elementoPadre.appendChild(headerHTML);

  //nav en mobile: activado con el botón de menu que se encuentra en la variable icons
  const menuMobile = document.querySelector('#menuMobile');
  const navMobile = document.querySelector('#navMobile');
  getNavMobile(menuMobile, navMobile);
};
