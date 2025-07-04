import { cargarArticulos } from "../utils/cargarArticulos.js";
import { buscador } from '../utils/buscador.js';
import { getElem } from "../utils/getElem.js";
import { showLogInMenu } from "../utils/showLogInMenu.js";
import { checkLogIn } from "../utils/checkLogIn.js";
import { checkUserSessionLog } from "../utils/checkUserSessionLog.js";


const inputBusqueda = document.querySelector('#input-busqueda');

inputBusqueda.addEventListener('input', buscador);

const lastArticlesContainer = document.querySelector("#last-articles-container");

const articulosAMostrar = await cargarArticulos();

lastArticlesContainer.innerHTML = articulosAMostrar;

const botonLogin = getElem('#log-in');
botonLogin.addEventListener('click', showLogInMenu);

const logButton = getElem('#button-log-in');
logButton.addEventListener('click', checkLogIn);

botonLogin.addEventListener('click', showLogInMenu);

checkUserSessionLog()