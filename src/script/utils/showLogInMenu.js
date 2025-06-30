export const showLogInMenu = () => {
    const menuContainer = document.querySelector('#login-inputs-container');
    const isHidden = menuContainer.classList.contains('hidden');

    if(isHidden) {
        menuContainer.classList.remove('hidden');
        return menuContainer.classList.toggle('showMenu');

    };
    menuContainer.classList.toggle('showMenu');
    menuContainer.classList.toggle('hideMenu');
}