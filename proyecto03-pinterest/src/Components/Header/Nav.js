const navOptions = ['Inicio', 'Explorar', 'Crear'];

export const createNav = () => {
  const divNav = document.createElement('div');
  const ulNav = document.createElement('ul');

  for (const option of navOptions) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '';
    a.innerText = option;
    li.appendChild(a);
    ulNav.appendChild(li);
  }

  divNav.classList.add('divNav');
  ulNav.classList.add('flex-container');

  divNav.appendChild(ulNav);
  return divNav;
};
