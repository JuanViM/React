
const getImagen = async() =>{

    const apiKey = 'SgE0jUZXvAFlEH4zRDhMow5rEky23Kpy';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const {url} =  data.images.original;
    const img = document.createElement('img');
    img.src=url;
    document.body.append(img);
}

getImagen();




// peticion.
// then( (resp) => resp.json()
// .then(({data})=> {
//     const {url} = data.images.original;
//     const img = document.createElement('img');
//     img.src=url;
//     document.body.append(img);
// })   
// .catch(console.warn)
// )