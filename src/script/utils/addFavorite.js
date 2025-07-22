import { checkUserFavorites } from "./checkUserFavorites.js";

export const addFavorite = result => {
    const user = JSON.parse(localStorage.getItem('userLogged'));

    const userHaveFavorite = checkUserFavorites(user, result);

    if(userHaveFavorite) {
        const userUpdateList = user.favorites.filter(elem => elem.id !== userHaveFavorite.id);
        user.favorites = userUpdateList;
        
        return localStorage.setItem('userLogged', JSON.stringify(user));
    }

    user.favorites = [...user.favorites, result];

    return localStorage.setItem('userLogged', JSON.stringify(user));

}