import { buscador } from '../utils/buscador.js';
import { showLogInMenu } from "../utils/showLogInMenu.js";
import { getElem } from "../utils/getElem.js";
import { checkLogIn } from '../utils/checkLogIn.js';
import { checkUserSessionLog } from '../utils/checkUserSessionLog.js';

const inputBusqueda = document.querySelector('#input-busqueda');

inputBusqueda.addEventListener('input', buscador);

const botonLogin = getElem('#log-in');
botonLogin.addEventListener('click', showLogInMenu);

const logButton = getElem('#button-log-in');
logButton.addEventListener('click', checkLogIn);

checkUserSessionLog()