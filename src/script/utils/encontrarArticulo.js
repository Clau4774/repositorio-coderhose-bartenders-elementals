import articulosForo from "../data/articulosForo.js";

export const encontrarArticulo = (option = undefined) => {    
    if(option !== undefined && option.trim() !== '') {
        const filteredArticles = articulosForo.filter(elem => elem.title.toLocaleLowerCase().includes(option.toLowerCase()));
        console.log(filteredArticles, "filteredArticles");
        console.log(option, 'option')

        if(filteredArticles.length === 0) {
            console.log('EntraAca')
            return {error: 'Artículo no encontrado...'};
        }

        return filteredArticles ;
    }

    console.log(option)

    if(option === undefined){

    const windowSearch = window.location.pathname + window.location.search;

    const findArticle = articulosForo.find(elem => elem.information.link.toLocaleLowerCase() === windowSearch.toLocaleLowerCase())
    

    return  findArticle || {error: 'Articulo no encontrado...'};
    }
}