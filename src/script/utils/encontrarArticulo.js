import articulosForo from "../data/articulosForo.js";

export const encontrarArticulo = () => {    
    const windowSearch = window.location.pathname + window.location.search;

    const findArticle = articulosForo.find(elem => elem.information.link === windowSearch)
    

    return  findArticle
}