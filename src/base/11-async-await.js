export const getImagen = async () => {
  try {
    const apiKey = "BNbKvt5wAkkVU83Bz2vFjWpVVvuQPCoP";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    // console.log(data);
    const { url } = data.images.original;

    return url;
  } catch (error) {
    //manejo del error
    // console.log(error);
    return "No existe";
  }
};
