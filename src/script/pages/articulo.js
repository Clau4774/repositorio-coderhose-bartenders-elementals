import { encontrarArticulo } from "../utils/encontrarArticulo.js";
import { cargarArticulo } from '../utils/cargarArticulo.js';
import { buscador } from '../utils/buscador.js';
import { getElem } from "../utils/getElem.js";
import { showLogInMenu } from "../utils/showLogInMenu.js";
import { checkLogIn } from "../utils/checkLogIn.js";
import { checkUserSessionLog } from "../utils/checkUserSessionLog.js";
import { showAddFavorite } from "../utils/showAddFavorite.js";
import { addFavorite } from "../utils/addFavorite.js";

const inputBusqueda = document.querySelector('#input-busqueda');

inputBusqueda.addEventListener('input', buscador);

const resultado = await encontrarArticulo();

cargarArticulo(resultado);

const botonLogin = getElem('#log-in');
botonLogin.addEventListener('click', showLogInMenu);

const logButton = getElem('#button-log-in');
logButton.addEventListener('click', checkLogIn);

const isLogged = checkUserSessionLog();

if(isLogged) {
    showAddFavorite(resultado);

    const articleLikeButton = getElem('.article-like-button');
    articleLikeButton.addEventListener('click', () => {
        addFavorite(resultado);
    });
}