const getGif = async( category ) => {

    const URL = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&api_key=jjVL5k5YOKRQZTsf44JtO10NKU3luswp&limit=10`
    
    const resp = await fetch(URL);
    
    const {data} = await resp.json();
    
            const gifs = data.map(img => {
                return{
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url
                }
            })         
            return gifs;
        }

export default getGif