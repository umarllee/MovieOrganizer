import apiInfo from './apiInfo.json'

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

export default searchMovies