export const checkUserFavorites = (user, article) => {
    const checkUserFavorites = user.favorites.find(elem => elem.id === article.id);

    if(checkUserFavorites) {
        return checkUserFavorites;
    }

    return false;
}