# Proyecto03-Rockthecode

Proyecto 03 - pinterest

PARTE JAVASCRIPT
Este proyecto está dividido en componentes:
1 Header.js : creados y imprimidos en el html todos los elementos del <header>. Llama a las otras componentes dentro de la carpeta "Header" (cada una crea un elemento diferente)

2. La carpeta "Main" agrupa todo el contenido del main:
   2.1 PeticionAPI.js:
   --- la funcion "getUnsplashAPI": hace la petición a la API Unsplash
   --- la funcion "getInputValue": guardar el valor del input según la busqueda del usuario
   --- la funcion "printResults": imprime el resultado de la API según el valor del input guardado
   ** Si NO hay resultados imprimo un alert para avisar al usuario (funcion en componente "AlertWindow").
   ** Si hay resultados llamo la función "PrintPhotos" (en componente PrintPhotos.js) que se encarga de imprimir el resultado de la API en el <main>.
   --- la función "LoadMore": se encarga de cargar mas fotos de la API cuando pulsamos en el botón "Cargar mas" a final de la página. Gracias a esta función pasamos a la API el parametro "page" actualizado, para que imprima fotos de otra pagina y no salgan repetidas.

3. El file "main.js" es el que está linkeado al file index.html : aquí llamo todas las funciones vitales para que la página web funcione

PARTE CSS

- style.css: aqui están las variables, el font usado, y estilos genericos
- Header.css : aqui están los estilos de los elementos presentes en el <header>
- HeaderResponsive: aquí están las correcciones de estilo con pantallas diferentes (móvil, iPad,...)
- Main.css: aquí están los estilos de los elementos presentes en el <main>
- MainResponsive: aquí están las correcciones de estilo con pantallas diferentes (móvil, iPad,...)
