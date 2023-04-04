'use strict';

const { openOtherPage } = require('./openPage');
const { openFirstPage } = require('./openPage');

function getInfoForList(page, genreId) {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}&with_watch_monetization_types=flatrate`;
    if (body.lastElementChild.classList.contains('bg2') === false) {
        fetch(url)
            .then((data) => data.json())
            .then((obj) => openFirstPage(obj.results)) 
            .catch((error) => console.log(error))
    } else {
        fetch(url)
            .then((data) => data.json())
            .then((obj) => openOtherPage(obj.results)) 
            .catch((error) => console.log(error))
    }
}

module.exports = getInfoForList;