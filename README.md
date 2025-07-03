# PicMuse project

In this project I have created a replica of Pinterest.
The project focuses on learning how to use VITE by creating components to better organize and reuse the code, using HTML, CSS and JS VANILLA.
I used the Unsplash API to make requests that allow us to get different images based on the user's search.

<div align="center">
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1751546024/ROCKTHECODE/Proyecto_03_Pinterest_PicMuse/picmuse-mockup_batbwg.png" alt="picmuse mockup" />
</div>

## Project Link:
https://picmuse.netlify.app

## Developed with:
- Javascript Vanilla
- HTML
- CSS

## Requirements:
Project created with Vite. If you open it please install NPM package:

`npm install`

<br>
<br>

## Development:

### JAVASCRIPT COMPONENTS
The "main.js" file is linked to the index.html file: this is where I call all the essential functions to make the website work. The functions that I call are located in other components:

#### HEADER
The "Header" folder contains all the content relating to the header:

- Header.js: This is the main file. It creates and renders all header elements in the HTML. It calls other components (each component creates a different element).
- IconHeader.js: Creates a div with all icons in the top right corner (notifications, messages, login).
- InputHeader.js: Creates the search bar. Its event allows you to save the searched word and call the function that displays the photos in the main section.

-InputSearchButton.js: Generates the icon search. Its event saves the searched word from the input and calls the function that displays the photos in the main section.
- Logo.js: Creates the logo of the website. When it is clicked, the initial state of the page is loaded.
- Nav.js: Creates the navigation bar in the header.
NavResponsive.js: Creates a vertical navigation menu for smaller screens, like mobile devices.

#### MAIN
The "Main" folder contains all content related to the main section:

- PrintPhotos.js: Contains the functions printMain() and printSectionPhotos(), which are used to render and display the API photos.
- PeticionAPI.js:
The "getUnsplashAPI" function makes a request to the Unsplash API.
The "printResults" function prints the API results based on the stored input value.
If there are no results, it triggers an alert to notify the user (function in the "AlertWindow" component).
If there are results, the function "PrintPhotos" (in PrintPhotos.js) is called, which handles the rendering of the API results within the component .
- ButtonUpload.js: Creates the "Load more" button at the bottom of the page. Its click event enables the display of additional photos in the main section: the "page" parameter is updated in the API request to fetch photos from another page to avoid duplicates. The new photos are displayed using the loadMorePhotos() function, which is located in LoadMore.js.

- LoadMore.js: loads more photos from the API when you click on the "Load more" button at the bottom of the page.


#### CSS 

- style.css: global variables, font used and global styles.
- Header.css: style elements for the Header section
- HeaderResponsive: styles for web responsive, on Header section. Styles corrections for different screens such as phone or iPad.
- Main.css: style elements for the main section
- MainResponsive: styles for web responsive, in the Main section. Corrections to the styles for different screens such as phone or iPad.

### Contact

###### mireia95.granzotto@gmail.com
