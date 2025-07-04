import { expandUserMenu } from "./expandUserMenu.js";
import { getElem } from "./getElem.js";
import { logOutUser } from "./logOutUser.js";

export const createUserMenuLog = user => {
    const loginContainer = getElem("#login-container");
    
    

    loginContainer.innerHTML = `
        <div id="user-container">
            <button id="user-expand" class="">${user.userName}</button>
            <div id="user-menu-container">
                <div id="user-favorites">
                </div>
                <button id="button-log-out">Salir de la cuenta</button>
            </div>
        </div>
    `

    const buttonExpandMenu = getElem('#user-expand');
    buttonExpandMenu.addEventListener('click', expandUserMenu);

    const buttonLogOut = getElem('#button-log-out');
    buttonLogOut.addEventListener('click', logOutUser)
}