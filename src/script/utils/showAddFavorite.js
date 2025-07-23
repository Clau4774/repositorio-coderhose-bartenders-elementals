import { addFavorite } from "./addFavorite.js";
import { checkUserFavorites } from "./checkUserFavorites.js";
import { getElem } from "./getElem.js";

export const showAddFavorite = (resultado) => {

    const articleIntroductionContainer = getElem('.article-introduction-container');

    const user = JSON.parse(localStorage.getItem('userLogged'));

    const hasInFavoriteList = checkUserFavorites(user, resultado)

    let button = '';


    if(hasInFavoriteList) {
        
        button = `
            <button class="article-like-button">
                <img src="../assets/iconos/favorite-selected.png" alt="favorite icon selected" />
            </button>`;
    } else {
        button = `
            <button class="article-like-button">
                <img src="../assets/iconos/favorito.png" alt="favorite icon" />
            </button>`;
    }

    articleIntroductionContainer.querySelectorAll('.article-like-button').forEach(btn => btn.remove());
    articleIntroductionContainer.insertAdjacentHTML('beforeend', button)

    const articleLikeButton = getElem('.article-like-button');
    
        articleLikeButton.addEventListener('click', () => {
            addFavorite(resultado);
        });
    
}