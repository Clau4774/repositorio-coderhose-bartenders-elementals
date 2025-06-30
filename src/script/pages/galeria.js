import { buscador } from '../utils/buscador.js';
import { cargarImagenGaleria } from '../utils/cargarImagenGaleria.js';
import { showLogInMenu } from "../utils/showLogInMenu.js";
import { getElem } from "../utils/getElem.js";

const inputBusqueda = getElem('#input-busqueda');

inputBusqueda.addEventListener('input', buscador);

const botonLogin = getElem('#log-in');

botonLogin.addEventListener('click', showLogInMenu);



