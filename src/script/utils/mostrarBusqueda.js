import { getElem } from './getElem.js';

export const mostrarBusqueda = busqueda => {
    const searchNavBarResult = getElem('#search-navbar-result');

    searchNavBarResult.innerHTML = '';

    if(busqueda === undefined ) return ;

    if(busqueda.error) return searchNavBarResult.innerHTML = `
        <li class="search-navbar-result-element">
            <span class="search-not-found">${busqueda.error}</span>
        </li>
        `;

    searchNavBarResult.innerHTML += busqueda.map(search => `
        <li class="search-navbar-result-element">
            <a href="${search.information.link}">
                <img src="${search.imageInfo.imagePath}" alt="${search.imageInfo.imageAltText}">
                <span>${search.title}</span>
            </a>
        </li>
        `).join('');
}