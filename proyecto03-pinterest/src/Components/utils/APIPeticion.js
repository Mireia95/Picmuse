//*componente para hacer petición de la API unsplash

export const getUnsplashPeticion = async (state) => {
  try {
    const clientID = '4jlvdYuLsqNEEm_9Swt8i8YsjYiof2h9BhIUpHUVzTM';
    const APIurl = `https://api.unsplash.com/search/photos?query='${state.word}'&page=${state.page}&per_page=20&client_id=${clientID}`;

    const res = await fetch(APIurl);
    const APIresults = await res.json();
    const photosAPI = APIresults.results;
    return photosAPI;
  } catch (error) {
    console.log('Error API peticion' + error);
  }
};
