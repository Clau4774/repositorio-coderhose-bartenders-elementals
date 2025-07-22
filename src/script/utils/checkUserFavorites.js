export const checkUserFavorites = (user, drink) => {
    const checkUserFavorites = user.favorites.find(elem => elem.id === drink.id);

    if(checkUserFavorites) {
        return checkUserFavorites;
    }

    return false;
}