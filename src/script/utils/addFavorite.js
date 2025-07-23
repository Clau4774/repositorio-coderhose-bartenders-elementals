import { checkUserFavorites } from "./checkUserFavorites.js";
import { createUserMenuLog } from "./createUserMenuLog.js";
import { showAddFavorite } from "./showAddFavorite.js";

export const addFavorite = result => {
    const user = JSON.parse(localStorage.getItem('userLogged'));

    const userHaveFavorite = checkUserFavorites(user, result);

    if(userHaveFavorite) {
        const userUpdateList = user.favorites.filter(elem => elem.id !== userHaveFavorite.id);
        user.favorites = userUpdateList;
        
        localStorage.setItem('userLogged', JSON.stringify(user));

        createUserMenuLog(user);

        showAddFavorite(result);

        Toastify({
        text: 'Se quitado de favoritos',
        gravity: 'bottom',
        duration: 1500,
        close: true,
        style: {
            background: 'red'
        }
    }).showToast();

        return
    }

    user.favorites = [...user.favorites, result];

    localStorage.setItem('userLogged', JSON.stringify(user));

    createUserMenuLog(user);

    showAddFavorite(result);

    Toastify({
        text: 'Se ha agregado a favoritos',
        gravity: 'bottom',
        duration: 1500,
        close: true,
        style: {
            background: 'green'
        }
    }).showToast();
}