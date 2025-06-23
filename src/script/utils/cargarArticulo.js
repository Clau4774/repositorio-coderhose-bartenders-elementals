export const cargarArticulo = (articulo) => {
    const getElem = elem => document.querySelector(elem);

    const siteParts = {
        articleTitle: getElem('#article-title'),
        articleImage: getElem('#article-image'),
        ingredientsContainer: getElem('#article-introduction-recipe-ingredient')
    };

    const {articleImage, articleTitle, ingredientsContainer} = siteParts;

    if(Object.hasOwn(articulo, 'error')) {
        const mainContainer = getElem('.main-container');
        return mainContainer.innerHTML = `<h1 style="text-align: center; min-height: 45vh;">${articulo.error}</h1>`
    }


    
    const {title, imageInfo, information} = articulo;

    const {imagePath, imageAltText} = imageInfo;

    const {historyTitle, historyContent, recipe } = information;

    const {glass, iceType, garnish, elaborationMethod, difficulty, ingredientList, recipeInstructions} = recipe;

    articleTitle.innerText = title;

    articleImage.src = imagePath;
    articleImage.alt = imageAltText;

    ingredientsContainer.innerHTML = ingredientList.map(ingrediente => `<li class="ingredient">${ingrediente.ingredientQuantity} ${ingrediente.mesureScale} ${ingrediente.ingredientName}</li>`).join('');
}