import { checkUserFavorites } from "./checkUserFavorites.js";
import { getElem } from "./getElem.js";

export const showAddFavorite = (resultado) => {
    const articleIntroductionContainer = getElem('.article-introduction-container');

    const user = JSON.parse(localStorage.getItem('userLogged'));

    console.log(user)

    const hasInFavoriteList = checkUserFavorites(user, resultado)

    if(hasInFavoriteList) {
        
        articleIntroductionContainer.innerHTML += `
            <button class="article-like-button">
                <img src="../assets/iconos/favorite-selected.png" alt="favorite icon selected" />
            </button>`;
        return
    } else {
        articleIntroductionContainer.innerHTML += `
            <button class="article-like-button">
                <img src="../assets/iconos/favorito.png" alt="favorite icon" />
            </button>`;
    }

    
}