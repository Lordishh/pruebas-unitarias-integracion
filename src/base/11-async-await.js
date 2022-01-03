const getImagen = async () => {
  try {
    const apiKey = "GsZ5KGD73v1qKAoExOuyJpPqlprtWsoc";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    console.log(data);
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

getImagen();

// peticion
//   .then((res) => res.json())
//   .then(({ data }) => {
//     const { url } = data.images.original;

//     const img = document.createElement("img");
//     img.src = url;

//     document.body.append(img);
//   })
//   .catch(console.warn);
