export const getGift = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=SgE0jUZXvAFlEH4zRDhMow5rEky23Kpy&q=${encodeURI(category)}`;

  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifs = data.map( img => {
      return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
  }

  })

  return gifs;
}