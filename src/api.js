import apiInfo from './apiInfo.json'
const save = async (request) => {
    const response = await fetch('http://localhost:3200/favorite', {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        return await response.json();
    }
    throw new Error(await response.text());
}

// const get = async (id) => {
//     const response = await fetch('http://localhost:3200/favorite/'+id);

//     if (!response.ok) {
//         throw new Error('You dont have any favourite films!');
//     }
//     return await response.json();
// }

function searchMovies (searchItem){
    const url = new URL(apiInfo.baseUrl); 
    url.searchParams.set('s', searchItem);
    url.searchParams.set('apikey', apiInfo.apiKey);

    const response =  fetch(url).then(r=> r.json());

    if(response.Error) {
        throw new Error (response.Error);
    }

    return response;
}

const api = {save, searchMovies};
export default api;