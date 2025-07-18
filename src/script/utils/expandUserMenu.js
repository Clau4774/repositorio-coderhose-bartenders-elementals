import { getElem } from "./getElem.js";

export const expandUserMenu = () => {
    const userMenuContainer = getElem('#user-menu-container');
    userMenuContainer.classList.toggle('hidden');
}