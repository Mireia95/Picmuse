import './Header.css';
import './HeaderResponsive.css';
import { printInput } from './InputHeader';
import { createNav } from './Nav';
import { createIcons } from './IconHeader';
import { getNavMobile } from './NavResponsive';
import { printResults } from '../Main/PetitionAPI';
import { createLogo } from './Logo';

//funcion para crear el header
export const printHeader = (elementoPadre, state) => {
  const headerHTML = document.createElement('header');
  headerHTML.id = 'header';
  const imgLogo = createLogo();
  imgLogo.addEventListener('click', () => {
    state.word = state.startWord;
    state.page = 1;
    console.log(state);
    printResults(state);
  });
  const divNav = createNav();
  const inputComponent = printInput(state);
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
