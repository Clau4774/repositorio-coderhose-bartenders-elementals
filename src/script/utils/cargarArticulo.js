export const cargarArticulo = (articulo) => {
    const getElem = elem => document.querySelector(elem);

    const siteParts = {
        articleTitle: getElem('#article-title'),
        articleImage: getElem('#article-image'),
        ingredientsContainer: getElem('#article-introduction-recipe-ingredient'),
        cocktailHistoryTitle: getElem('#cocktail-history-title'),
        cocktailHistoryContainer: getElem('#cocktail-history-container'),
        cocktailElaborationContainer: getElem('#cocktail-elaboration-container')
    };

    const {articleImage, articleTitle, ingredientsContainer, cocktailHistoryTitle, cocktailHistoryContainer, cocktailElaborationContainer} = siteParts;

    if(articulo === undefined) return;

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

    ingredientsContainer.innerHTML = `<li class="ingredient">Método de elaboración: ${elaborationMethod}</li> <li class="ingredient">Cristalería: ${glass}</li> ` + ingredientList.map(ingrediente => `<li class="ingredient">${ingrediente.ingredientQuantity} ${ingrediente.mesureScale} ${ingrediente.ingredientName}</li>`).join('') + `<li>Garnish: ${garnish}</li>`;

    cocktailHistoryTitle.innerText = historyTitle;
    cocktailHistoryContainer.innerHTML = historyContent.map(item => `<p>${item}</p>`).join('');

    cocktailElaborationContainer.innerHTML = recipeInstructions.map(content => `<p>${content}</p>`).join('');
}