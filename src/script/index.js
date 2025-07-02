import { cargarArticulos } from "./utils/cargarArticulos.js";
import { buscador } from './utils/buscador.js';
import { showLogInMenu } from "./utils/showLogInMenu.js";
import { getElem } from "./utils/getElem.js";
import { checkLogIn } from "./utils/checkLogIn.js";

const inputBusqueda = getElem('#input-busqueda');

inputBusqueda.addEventListener('input', buscador);

const lastArticlesContainer = getElem("#last-articles-container");



const ultimosArticulos = await cargarArticulos(3);

lastArticlesContainer.innerHTML = ultimosArticulos;

const botonLogin = getElem('#log-in');

botonLogin.addEventListener('click', showLogInMenu);

const logButton = getElem('#button-log-in');
logButton.addEventListener('click', checkLogIn);
