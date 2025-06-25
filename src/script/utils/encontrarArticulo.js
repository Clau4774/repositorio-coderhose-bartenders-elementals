import articulosForo from "../data/articulosForo.js";

export const encontrarArticulo = (option = undefined) => {    
    if(option !== undefined && option.trim() !== '') {
        const filteredArticles = articulosForo.filter(elem => elem.name.includes(option));

        return filteredArticles || {error: 'Articulo no encontrado...'};
    }

    const windowSearch = window.location.pathname + window.location.search;

    const findArticle = articulosForo.find(elem => elem.information.link === windowSearch)
    

    return  findArticle || {error: 'Articulo no encontrado...'};
}