import { buscador } from '../utils/buscador.js';
import { showLogInMenu } from "../utils/showLogInMenu.js";
import { getElem } from "../utils/getElem.js";

const inputBusqueda = document.querySelector('#input-busqueda');

inputBusqueda.addEventListener('input', buscador);

const botonLogin = getElem('#log-in');

botonLogin.addEventListener('click', showLogInMenu);

