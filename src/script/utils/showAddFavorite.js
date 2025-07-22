import { getElem } from "./getElem.js";

export const showAddFavorite = () => {
    const articleIntroductionContainer = getElem('.article-introduction-container');
        articleIntroductionContainer.innerHTML += `
            <button class="article-like-button">
                <img src="../assets/iconos/favorito.png" alt="favorite icon" />
            </button>`;

            
}