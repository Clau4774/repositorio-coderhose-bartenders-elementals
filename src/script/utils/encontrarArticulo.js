export const encontrarArticulo = async (option = undefined) => {    

    try {
        const bringData = await fetch('/src/script/data/articulosForo.json');
        const articulosForo = await bringData.json();

        if(option !== undefined && option.trim() !== '') {
        const filteredArticles = articulosForo.filter(elem => elem.title.toLocaleLowerCase().includes(option.toLowerCase()));

        if(filteredArticles.length === 0) {
            return {error: 'Artículo no encontrado...'};
        }

        return filteredArticles ;
    }
    } catch (e) {
        console.error('Algo salió mal...', e);
    }
    
    try {

        const bringData = await fetch('/src/script/data/articulosForo.json');
        const articulosForo = await bringData.json();

        if(option === undefined){

            const windowSearch = window.location.pathname + window.location.search;

            const findArticle = articulosForo.find(elem => elem.information.link.toLocaleLowerCase() === windowSearch.toLocaleLowerCase())

            return  findArticle || {error: 'Articulo no encontrado...'};
    }
    } catch (e) {
        console.error('Algo salío mal...', e);
    }

    
}