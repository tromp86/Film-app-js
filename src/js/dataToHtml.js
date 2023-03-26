// функция для получения html кода для слайдера
async function getHtmlData(masData) {
    let htmlData = '';
    for (let i = 0; i < masData.length; i++) {
        const image = await fetch(`https://image.tmdb.org/t/p/w500${masData[i].poster_path}`);
        htmlData += `<div class="item_wrapper">
            <img src="${image.url}" alt="" class="image_item_slider">
        </div>`;
    }
    return htmlData;
}


module.exports = getHtmlData;



