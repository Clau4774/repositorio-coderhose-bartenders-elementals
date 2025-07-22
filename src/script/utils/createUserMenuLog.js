import { expandUserMenu } from "./expandUserMenu.js";
import { getElem } from "./getElem.js";
import { logOutUser } from "./logOutUser.js";

export const createUserMenuLog = user => {
    const loginContainer = getElem("#login-container");

    loginContainer.innerHTML = `
        <div id="user-container">
            <button id="user-expand-button" class="">${user.userName}</button>
            <div id="user-menu-container" class="hidden">
                <ul id="user-favorites">
                    ${(user.favorites.length !== 0) ? user.favorites.map(elem => '<li class="favorite-element"> <a href=" ' + elem.information.link+ ' "><img src="' + elem.imageInfo.imagePath + '" alt=" '+elem.imageInfo.imageAltText + '"/><span>' +elem.name + '</span> </a></li>').join(''): '<li><span>Aun no hay favoritos</span></li>'}
                </ul>
                <button id="button-log-out">Salir de la cuenta</button>
            </div>
        </div>
    `

    const buttonExpandMenu = getElem('#user-expand-button');
    buttonExpandMenu.addEventListener('click', expandUserMenu);

    const buttonLogOut = getElem('#button-log-out');
    buttonLogOut.addEventListener('click', logOutUser)
}