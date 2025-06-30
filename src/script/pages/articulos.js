import { cargarArticulos } from "../utils/cargarArticulos.js";
import { buscador } from '../utils/buscador.js';
import { getElem } from "../utils/getElem.js";
import { showLogInMenu } from "../utils/showLogInMenu.js";
import { checkLogIn } from "../utils/checkLogIn.js";


const inputBusqueda = document.querySelector('#input-busqueda');

inputBusqueda.addEventListener('input', buscador);

const lastArticlesContainer = document.querySelector("#last-articles-container");

const articulosAMostrar = cargarArticulos();

lastArticlesContainer.innerHTML = articulosAMostrar;

const botonLogin = getElem('#log-in');
botonLogin.addEventListener('click', showLogInMenu);

const logButton = getElem('#button-log-in');
logButton.addEventListener('click', checkLogIn);