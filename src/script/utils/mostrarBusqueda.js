export const mostrarBusqueda = busqueda => {
    const searchNavBarResult = document.querySelector('#search-navbar-result');

    searchNavBarResult.innerHTML = '';

    console.log(busqueda)

    if(busqueda === undefined ) return ;

    if(busqueda.error) return searchNavBarResult.innerHTML = `
        <li class="search-navbar-result-element">
            <span class="search-not-found">${busqueda.error}</span>
        </li>
        `;

    console.log(busqueda)

    searchNavBarResult.innerHTML += busqueda.map(search => `
        <li class="search-navbar-result-element">
            <a href="${search.information.link}">
                <img src="${search.imageInfo.imagePath}" alt="${search.imageInfo.imageAltText}">
                <span>${search.name}</span>
            </a>
        </li>
        `).join('');
}