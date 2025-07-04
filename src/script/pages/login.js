import { buscador } from "../utils/buscador.js";
import { checkLogIn } from "../utils/checkLogIn.js";
import { checkUserSessionLog } from "../utils/checkUserSessionLog.js";
import { createUser } from "../utils/createUser.js";
import { getElem } from "../utils/getElem.js";
import { showLogInMenu } from "../utils/showLogInMenu.js";

const inputBusqueda = getElem('#input-busqueda');
inputBusqueda.addEventListener('input', buscador);

const button = getElem('.button');

button.addEventListener('click', createUser);

const botonLogin = getElem('#log-in');

botonLogin.addEventListener('click', showLogInMenu);

const logButton = getElem('#button-log-in');
logButton.addEventListener('click', checkLogIn);

checkUserSessionLog()